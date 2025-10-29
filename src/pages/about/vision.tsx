import { Eye, Target } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Helmet } from "react-helmet-async";

export const Vision = () => {
  const { language, t } = useLanguage();

  const goals = [
    { ar: "تحقيق التميز الأكاديمي في جميع المجالات", en: "Achieving academic excellence in all fields" },
    { ar: "بناء شخصيات قيادية قادرة على مواجهة التحديات", en: "Building leadership personalities capable of facing challenges" },
    { ar: "تعزيز القيم الأخلاقية والوطنية", en: "Reinforcing ethical and national values" },
    { ar: "تطوير المهارات العملية والتطبيقية", en: "Developing practical and applied skills" },
    { ar: "إعداد الطلاب للنجاح في الحياة الجامعية والمهنية", en: "Preparing students for success in university and professional life" },
  ];

  return (
    <>
      <Helmet>
        <title>{t("الرؤية والرسالة - مدرسة الأورمان", "Vision & Mission - Al-Orman School")}</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t("الرؤية والرسالة", "Vision & Mission")}</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-[#0652ba]">
              <div className="w-20 h-20 bg-[#0652ba] rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">{t("رؤيتنا", "Our Vision")}</h2>
              <p className="text-lg text-gray-600 leading-relaxed text-center">
                {t(
                  "أن نكون المؤسسة التعليمية الرائدة في مصر والعالم العربي، نخرج جيلاً من القادة المتميزين الذين يجمعون بين العلم والأخلاق والانضباط",
                  "To be the leading educational institution in Egypt and the Arab world, graduating a generation of distinguished leaders who combine knowledge, ethics, and discipline"
                )}
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-[#0652ba]">
              <div className="w-20 h-20 bg-[#0652ba] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">{t("رسالتنا", "Our Mission")}</h2>
              <p className="text-lg text-gray-600 leading-relaxed text-center">
                {t(
                  "تقديم تعليم متميز يجمع بين الأكاديمية والعسكرية، وتطوير قدرات الطلاب الفكرية والبدنية والأخلاقية لإعدادهم لقيادة المستقبل",
                  "Providing distinguished education combining academics and military training, and developing students' intellectual, physical, and moral capabilities to prepare them to lead the future"
                )}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-10 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">{t("أهدافنا الاستراتيجية", "Our Strategic Goals")}</h3>
            <ul className="space-y-4">
              {goals.map((goal, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0652ba] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">{i + 1}</span>
                  </div>
                  <p className="text-lg text-gray-700">{goal[language]}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
