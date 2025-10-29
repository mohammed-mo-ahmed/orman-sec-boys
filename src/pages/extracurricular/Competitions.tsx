// src/pages/Competitions.tsx
import { useLanguage } from "../../context/LanguageContext";
import { Helmet } from "react-helmet-async";

export const Competitions = () => {
  const { language, t } = useLanguage();

  const competitions = [
    { title: { ar: "مسابقة جائزة الدولة للمبدع الصغير", en: "State Prize Competition for Young Creator" }, date: { ar: "31 ديسمبر 2025", en: "31 December 2025" }, status: { ar: "التسجيل مفتوح", en: "Registration Open" } }
  ];

  return (
    <>
      <Helmet>
        <title>{language === "ar" ? "المسابقات - مدرسة الأورمان الثانوية بنين" : "Competitions - Al-Orman Secondary School for Boys"}</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t("المسابقات", "Competitions")}</h1>
            <p className="text-xl text-gray-600">{t("مسابقات محلية ودولية لإبراز مواهب طلابنا", "Local and international competitions to showcase our students' talents")}</p>
          </div>

          <div className="space-y-6">
            {competitions.map((comp, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#0652ba] hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{comp.title[language]}</h3>
                    <p className="text-gray-600">{comp.date[language]}</p>
                  </div>
                  <div className="px-6 py-2 bg-[#0652ba] text-white rounded-lg font-semibold">
                    {comp.status[language]}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 text-lg text-gray-700 font-medium">
            {t("لمزيد من التفاصيل، توجه إلى المكتبة أو غرفة الموهوبين", "For more details, please visit the library or the talented students room")}
          </div>
        </div>
      </div>
    </>
  );
};
