// src/pages/Achievements.tsx
import { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Helmet } from "react-helmet-async";

export const Achievements = () => {
  const { language, t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const achievements = [
    { title: { ar: "", en: "" }, year: "2025", image: "" }
  ];

  const topStudents = [
    { title: { ar: "الصف الأول الثانوي", en: "First Secondary Grade" }, image: "https://i.postimg.cc/your-image1.jpg" },
    { title: { ar: "الصف الثاني الثانوي", en: "Second Secondary Grade" }, image: "https://i.postimg.cc/your-image2.jpg" },
    { title: { ar: "الصف الثالث الثانوي", en: "Third Secondary Grade" }, image: "https://i.postimg.cc/your-image3.jpg" },
  ];

  return (
    <>
      <Helmet>
        <title>{language === "ar" ? "الإنجازات - مدرسة الأورمان الثانوية بنين" : "Achievements - Al-Orman Secondary School for Boys"}</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t("الإنجازات", "Achievements")}</h1>
            <p className="text-xl text-gray-600">{t("إنجازات طلابنا المميزة على المستوى المحلي والدولي", "Our students’ outstanding achievements at local and international levels")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((ach, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg mb-4 text-gray-500 text-lg">
                  {ach.image ? <img src={ach.image} alt={ach.title[language]} className="w-full h-full object-cover rounded-lg" /> : t("لا توجد صورة", "No Image")}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{ach.title[language]}</h3>
                <p className="text-gray-600">{t("السنة", "Year")}: {ach.year || t("غير محدد", "N/A")}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold mb-10 text-gray-900">{t("🏆 أوائل الطلبة", "Top Students")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {topStudents.map((grade, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-semibold mb-4 text-[#0652ba]">{grade.title[language]}</h3>
                  {grade.image ? (
                    <div onClick={() => setSelectedImage(grade.image)} className="cursor-pointer w-full h-72 rounded-lg overflow-hidden bg-gray-200 group relative">
                      <img src={grade.image} alt={grade.title[language]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold transition-opacity">{t("اضغط للتكبير", "Click to enlarge")}</div>
                    </div>
                  ) : <div className="w-full h-72 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-lg">{t("صورة جدول الأوائل", "Top Students Table Image")}</div>}
                </div>
              ))}
            </div>
          </div>

          {selectedImage && (
            <div onClick={() => setSelectedImage(null)} className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"><X className="w-6 h-6" /></button>
              <img src={selectedImage} alt="Preview" className="max-w-full max-h-full object-contain" onClick={(e) => e.stopPropagation()} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
