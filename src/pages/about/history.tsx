import { useLanguage } from "../../context/LanguageContext";
import { Helmet } from "react-helmet-async";

export const History = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t("تاريخ المدرسة - مدرسة الأورمان", "Our History - Al-Orman School")}</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t("تاريخنا", "Our History")}
            </h1>
            <p className="text-xl text-gray-600">
              {t("رحلة من التميز والإنجازات عبر السنين", "A journey of excellence and achievements through the years")}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#0652ba]"></div>

            {[
              {
                year: "1944",
                title: { ar: "التأسيس", en: "Foundation" },
                description: {
                  ar: "تأسيس المدرسة برؤية طموحة لتقديم تعليم متميز",
                  en: "School founded with an ambitious vision to provide distinguished education",
                },
              },
              {
                year: "",
                title: { ar: "التوسع", en: "Expansion" },
                description: {
                  ar: "افتتاح مرافق جديدة ومختبرات حديثة",
                  en: "Opening of new facilities and modern laboratories",
                },
              },
              {
                year: "",
                title: { ar: "الاعتماد", en: "Accreditation" },
                description: {
                  ar: "الحصول على الاعتماد للجودة التعليمية",
                  en: "Obtaining accreditation for educational quality",
                },
              },
              {
                year: "",
                title: { ar: "الإنجازات", en: "Achievements" },
                description: {
                  ar: "حصد العديد من الجوائز الأكاديمية والرياضية",
                  en: "Winning numerous academic and sports awards",
                },
              },
              {
                year: "2025",
                title: { ar: "الحاضر", en: "Present" },
                description: {
                  ar: "مواصلة التميز مع أكثر من 3000 طالب و50 معلم",
                  en: "Continuing excellence with over 500 students and 50 teachers",
                },
              },
            ].map((milestone, index) => (
              <div key={index} className={`mb-12 flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="text-3xl font-bold text-[#0652ba] mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{milestone.title[language]}</h3>
                    <p className="text-gray-600">{milestone.description[language]}</p>
                  </div>
                </div>
                <div className="w-6 h-6 bg-[#0652ba] rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
