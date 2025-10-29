import { Facebook, Users } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Helmet } from "react-helmet-async";

export const StudentUnion = () => {
  const { language, t } = useLanguage();
  return (
    <>
      <Helmet>
        <title>{language === "ar" ? "اتحاد الطلاب - مدرسة الأورمان الثانوية بنين" : "Student Union - Al-Orman Secondary School for Boys"}</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t("اتحاد الطلاب", "Student Union")}</h1>
            <p className="text-xl text-gray-600">{t("منظمة طلابية تمثل صوت الطلاب وتنظم الفعاليات والأنشطة", "A student organization representing the student voice and organizing events and activities")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Users className="w-12 h-12 text-[#0652ba] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t("المهام", "Responsibilities")}</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• {t("تمثيل الطلاب في الاجتماعات الإدارية", "Representing students in administrative meetings")}</li>
                <li>• {t("تنظيم الفعاليات والأنشطة المدرسية", "Organizing school events and activities")}</li>
                <li>• {t("حل المشكلات الطلابية", "Resolving student issues")}</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <img src="/Images/Unclassified/SU/1.jpg" alt="Student Union 1" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="/Images/Unclassified/SU/2.jpg" alt="Student Union 2" className="w-full h-64 object-cover rounded-xl shadow-md" />
            <img src="/Images/Unclassified/SU/3.jpg" alt="Student Union 3" className="w-full h-64 object-cover rounded-xl shadow-md" />
          </div>

          <div className="bg-[#0652ba] text-white py-6 text-center rounded-xl mt-12">
            <p className="flex items-center justify-center gap-2 text-white">
              {t("تابع صفحة اتحاد الطلاب على", "Follow the Student Union page on")}
              <a href="https://www.facebook.com/profile.php?id=100088099876007" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-[#0652ba] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                <Facebook className="w-5 h-5 text-[#0652ba]" />
                {t("فيسبوك", "Facebook")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
