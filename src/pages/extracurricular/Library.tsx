import { useLanguage } from "../../context/LanguageContext";
import { Helmet } from "react-helmet-async";

export const Library = () => {
  const { language, t } = useLanguage();

  const items = [
    { title: { ar: "الكتب العلمية", en: "Scientific Books" }, desc: { ar: "كتب في الفيزياء والكيمياء والأحياء", en: "Books on physics, chemistry, and biology" }, icon: "🔬" },
    { title: { ar: "الكتب الأدبية", en: "Literature Books" }, desc: { ar: "روايات، شعر، ومقالات أدبية", en: "Novels, poetry, and literary essays" }, icon: "📖" },
    { title: { ar: "قسم التكنولوجيا", en: "Technology Section" }, desc: { ar: "كتب عن البرمجة، الإلكترونيات، والذكاء الاصطناعي", en: "Books on programming, electronics, and AI" }, icon: "💻" },
    { title: { ar: "قسم اللغات", en: "Language Section" }, desc: { ar: "كتب لتعلم الإنجليزية والألمانية ولغات أخرى", en: "Books for learning English, German, and more" }, icon: "🌍" },
    { title: { ar: "المراجع والموارد", en: "Reference Materials" }, desc: { ar: "كتب مرجعية، خرائط، ومواد متنوعة للطلاب", en: "Books, maps, and other resources for students" }, icon: "📂" },
    { title: { ar: "ركن القراءة الهادئة", en: "Quiet Reading Corner" }, desc: { ar: "مساحة مريحة للقراءة الفردية والاسترخاء", en: "A cozy space for personal reading and relaxation" }, icon: "☕" },
  ];

  return (
    <>
      <Helmet>
        <title>{language === "ar" ? "مكتبة المدرسة - مدرسة الأورمان الثانوية بنين" : "Library - Al-Orman Secondary School for Boys"}</title>
      </Helmet>

      <section className="relative flex flex-col justify-center items-center px-6" style={{ backgroundImage: "url(/Images/Backgrounds/backgroundlibarary.png)" }}>
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
        <div className="relative z-10 w-full max-w-7xl text-center py-20 space-y-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 drop-shadow-md">{t("مكتبة مدرسة الأورمان", "Al-Orman School Library")}</h1>
            <p className="text-xl text-gray-800 leading-relaxed">{t("مكتبة حديثة توفر مصادر تعليمية وكتب متنوعة للطلاب في مختلف المجالات", "A modern library offering educational resources and a wide range of books for students")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div key={index} className="bg-white/85 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 backdrop-blur-md text-center">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title[language]}</h3>
                <p className="text-gray-700">{item.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
