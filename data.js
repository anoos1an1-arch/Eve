/*
  ✦ التعديل من هنا فقط:
  - غيّر الاسم والوصف.
  - أضف أو احذف العناصر من الأقسام الأربعة.
  - image: مسار صورة الأيقونة داخل assets/، أو اتركه فارغًا لاستخدام الرمز.
  - url: رابط التحميل أو الموقع. استخدم # إذا لم يوجد رابط بعد.
  - يمكنك رفع ملفاتك إلى مجلد files/ وإضافة رابط مثل files/my-file.zip
*/
const SITE_DATA = {
  name: "إيـف",
  description: "ملفات، تطبيقات، مشاريع مونتاج وملحقات — مرتبة في مكان واحد.",
  files: [
    { name: "ملف مونتاج جديد", description: "أضف وصفًا مختصرًا للملف", icon: "▤", image: "", url: "#", label: "ملف" },
    { name: "تصاميم وخامات", description: "صور وموارد للتصميم", icon: "▧", image: "", url: "#", label: "تصميم" },
    { name: "ملفات متنوعة", description: "ملفات وروابط مفيدة", icon: "↗", image: "", url: "#", label: "متنوع" }
  ],
  apps: [
    { name: "Alight Motion", description: "تطبيق صناعة الحركة والمونتاج", icon: "◉", image: "", url: "https://alightmotion.com/", label: "تطبيق" },
    { name: "Prisma3D", description: "تصميم ومجسمات ثلاثية الأبعاد", icon: "△", image: "", url: "https://prisma3d.net/", label: "تطبيق" },
    { name: "Sketchfab", description: "استكشاف نماذج ثلاثية الأبعاد", icon: "⬡", image: "", url: "https://sketchfab.com/", label: "موقع" }
  ],
  editing: [
    { name: "مشروع مونتاج 01", description: "أضف تفاصيل المشروع هنا", icon: "▶", image: "", url: "#", label: "مشروع" },
    { name: "انتقالات وتأثيرات", description: "ملحقات للمونتاج", icon: "✦", image: "", url: "#", label: "ملحقات" },
    { name: "مشروع مونتاج 02", description: "أضف رابط المشروع أو ملفه", icon: "▷", image: "", url: "#", label: "مشروع" }
  ],
  addons: [
    { name: "أيقونات", description: "مجموعة أيقونات وموارد", icon: "✧", image: "", url: "#", label: "صور" },
    { name: "خامات وخلفيات", description: "صور وخلفيات للتصميم", icon: "▨", image: "", url: "#", label: "صور" },
    { name: "ملحقات إضافية", description: "أضف الملحقات التي تريدها", icon: "✚", image: "", url: "#", label: "ملحق" }
  ]
};
