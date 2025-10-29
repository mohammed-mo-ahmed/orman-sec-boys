// src/pages/Clubs.tsx
import { useLanguage } from "../../context/LanguageContext";
import { Helmet } from "react-helmet-async";

export const Clubs = () => {
  const { language, t } = useLanguage();

  const clubs = [
    { name: { ar: "نادي القراءه", en: "Reading Club" }, description: { ar: "نادي يهتم بقراءة الكتب ومناقشتها", en: "A club focused on reading and discussing books" }, icon: "📖" },
    { name: { ar: "نادي العلوم", en: "Science Club" }, description: { ar: "التجارب العلمية والابتكار", en: "Scientific experiments and innovation" }, icon: "🔬" },
    { name: { ar: "نادي الرياضيات", en: "Math Club" }, description: { ar: "حل المسائل والمنافسات", en: "Problem solving and competitions" }, icon: "📐" },
    { name: { ar: "نادي البرمجة", en: "Programming Club" }, description: { ar: "تطوير التطبيقات والألعاب", en: "Application and game development" }, icon: "💻" },
    { name: { ar: "نادي الفنون", en: "Arts Club" }, description: { ar: "الرسم والتصميم الإبداعي", en: "Drawing and creative design" }, icon: "🎨" },
    { name: { ar: "نادي الموسيقى", en: "Music Club" }, description: { ar: "العزف والإنشاد", en: "Playing instruments and singing" }, icon: "🎵" },
  ];

  return (
    <>
      <Helmet>
        <title>{language === "ar" ? "النوادي - مدرسة الأورمان الثانوية بنين" : "Clubs - Al-Orman Secondary School for Boys"}</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t("النوادي", "Clubs")}</h1>
            <p className="text-xl text-gray-600">{t("مجموعة متنوعة من النوادي لتطوير مهارات الطلاب واهتماماتهم", "A diverse range of clubs to develop students' skills and interests")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
                <div className="text-6xl mb-4">{club.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{club.name[language]}</h3>
                <p className="text-gray-600">{club.description[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
