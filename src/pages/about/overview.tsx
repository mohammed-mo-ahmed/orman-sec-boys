import { Target, Users } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Helmet } from "react-helmet-async";

export const Overview = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t("نظرة عامة - مدرسة الأورمان", "Overview - Al-Orman School")}</title>
        <meta
          name="description"
          content={t(
            "مدرسة الأورمان الثانوية العسكرية بنين تقدم تعليم متميز وتدريب عسكري شامل",
            "Al-Orman Secondary School for Boys provides outstanding education and comprehensive military training"
          )}
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t("نظرة عامة", "Overview")}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t(
                "مدرسة الأورمان الثانوية العسكرية بنين هي مؤسسة تعليمية رائدة تجمع بين التعليم الأكاديمي المتميز والتدريب العسكري الشامل لإعداد جيل من القادة المتميزين",
                "Al-Orman Secondary School for Boys is a leading educational institution combining outstanding academic education with comprehensive military training to prepare a generation of distinguished leaders"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#0652ba] rounded-lg flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("التميز الأكاديمي", "Academic Excellence")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(
                  "نوفر برامج تعليمية متقدمة تواكب أحدث المعايير العالمية، مع التركيز على تطوير مهارات التفكير النقدي والإبداع",
                  "We provide advanced educational programs aligned with the latest global standards, focusing on developing critical thinking and creativity skills"
                )}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#0652ba] rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {t("التدريب العسكري", "Military Training")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(
                  "برنامج تدريبي عسكري متكامل يهدف إلى بناء الشخصية القيادية وتعزيز قيم الانضباط والمسؤولية",
                  "A comprehensive military training program aimed at building leadership character and reinforcing values of discipline and responsibility"
                )}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#0652ba] to-[#0652ba]/90 text-white p-12 rounded-xl">
            <h3 className="text-3xl font-bold mb-6 text-center">{t("قيمنا الأساسية", "Our Core Values")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{t("التميز", "Excellence")}</div>
                <p className="opacity-90">{t("في كل ما نقوم به", "In everything we do")}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{t("الانضباط", "Discipline")}</div>
                <p className="opacity-90">{t("أساس النجاح", "Foundation of success")}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{t("القيادة", "Leadership")}</div>
                <p className="opacity-90">{t("نبني القادة", "We build leaders")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
