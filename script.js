(() => {
  const $ = (selector) => document.querySelector(selector);
  const toast = $("#toast");
  let toastTimer;
  let soundEnabled = true;
  let audioContext;

  $("#brandName").textContent = SITE_DATA.name || "إيـف";
  $("#heroName").textContent = SITE_DATA.name || "إيـف";
  $("#footerName").textContent = SITE_DATA.name || "إيـف";
  $("#heroDescription").textContent = SITE_DATA.description || "";

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
  }

  // نغمة قصيرة مولّدة داخل المتصفح؛ لا تحتاج إلى ملف صوت خارجي.
  function clickSound() {
    if (!soundEnabled) return;
    try {
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      if (audioContext.state === "suspended") audioContext.resume();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(660, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(440, audioContext.currentTime + 0.055);
      gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.045, audioContext.currentTime + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.09);
      oscillator.connect(gain); gain.connect(audioContext.destination);
      oscillator.start(); oscillator.stop(audioContext.currentTime + 0.095);
    } catch (_) {}
  }

  $("#soundToggle").addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    $("#soundToggle").setAttribute("aria-pressed", String(soundEnabled));
    $("#soundToggle").innerHTML = soundEnabled ? '♪ <span>الصوت يعمل</span>' : '♪ <span>الصوت متوقف</span>';
    if (soundEnabled) clickSound();
    showToast(soundEnabled ? "تم تشغيل صوت النقر" : "تم إيقاف صوت النقر");
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("#soundToggle")) return;
    if (event.target.closest("a, button, .item-card")) clickSound();
  });

  function safeUrl(url) {
    return typeof url === "string" && url.trim() ? url.trim() : "#";
  }

  function renderItems(id, items) {
    const container = document.getElementById(id);
    if (!Array.isArray(items) || items.length === 0) {
      container.innerHTML = '<p class="empty-state">لا توجد عناصر هنا بعد. أضف عناصر من ملف data.js.</p>';
      return;
    }
    container.innerHTML = items.map((item) => {
      const name = escapeHtml(item.name || "عنصر جديد");
      const description = escapeHtml(item.description || "");
      const icon = escapeHtml(item.icon || "✦");
      const image = item.image ? `<img src="${escapeAttr(item.image)}" alt="" loading="lazy" onerror="this.remove()">` : "";
      const url = escapeAttr(safeUrl(item.url));
      const external = /^https?:\/\//i.test(item.url || "");
      return `<a class="item-card" href="${url}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ""} aria-label="${name}">
        <span class="item-icon">${image || icon}</span>
        <span class="item-copy"><h3>${name}</h3><p>${description}</p></span>
        <span class="item-arrow" aria-hidden="true">↗</span>
      </a>`;
    }).join("");
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[char]));
  }
  function escapeAttr(value) { return escapeHtml(value); }

  renderItems("filesGrid", SITE_DATA.files);
  renderItems("appsGrid", SITE_DATA.apps);
  renderItems("editingGrid", SITE_DATA.editing);
  renderItems("addonsGrid", SITE_DATA.addons);

  document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast("أضف رابط هذا العنصر في ملف data.js");
    });
  });
})();
