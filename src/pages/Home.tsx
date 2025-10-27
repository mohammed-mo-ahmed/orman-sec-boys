import { useState, useEffect } from "react";
import { GraduationCap, Target, Users, Award, BookOpen, Shield } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Helmet } from 'react-helmet-async';

interface HomeProps {
  onNavigate: (path: string) => void;
}

// Typewriter component باستخدام CSS animation مع تأخير 0.5s
const TypewriterTitle = ({ text, trigger }: { text: string; trigger: number }) => {
  return (
    <h1
      key={trigger} // كل مرة trigger يتغير، العنصر بيتخلق من جديد
      className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 overflow-hidden leading-relaxed max-w-full min-h-[5rem] sm:min-h-[6rem] md:min-h-[8rem]"
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="opacity-0 inline"
          style={{
            animation: `typewriter-char 0.3s forwards`,
            animationDelay: `${0.5 + index * 0.03}s`,
          }}
        >
          {char}
        </span>
      ))}

      <style jsx>{`
        @keyframes typewriter-char {
          from { opacity: 0; transform: translateY(0.2em); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </h1>
  );
};




export const Home = ({ onNavigate }: HomeProps) => {
  const { language, t } = useLanguage();

  const features = [
    { icon: GraduationCap, title: { ar: "تعليم متميز", en: "Excellent Education" }, description: { ar: "برامج أكاديمية متطورة تواكب أحدث المعايير", en: "Advanced academic programs meeting the latest standards" } },
    { icon: Shield, title: { ar: "تربية عسكرية", en: "Military Education" }, description: { ar: "تربية عسكرية شاملة لبناء الشخصية القيادية", en: "Comprehensive military Education for leadership development" } },
    { icon: Users, title: { ar: "أنشطة متنوعة", en: "Diverse Activities" }, description: { ar: "مجموعة واسعة من الأنشطة اللامنهجية", en: "Wide range of extracurricular activities" } },
    { icon: Award, title: { ar: "إنجازات مميزة", en: "Outstanding Achievements" }, description: { ar: "سجل حافل بالإنجازات والجوائز", en: "Rich history of achievements and awards" } },
    { icon: BookOpen, title: { ar: "موارد تعليمية", en: "Learning Resources" }, description: { ar: "مكتبة شاملة وموارد رقمية حديثة", en: "Comprehensive library and modern digital resources" } },
    { icon: Target, title: { ar: "رؤية واضحة", en: "Clear Vision" }, description: { ar: "رؤية واضحة لبناء جيل المستقبل", en: "Clear vision for building the future generation" } },
  ];

  const mainTitle = t("مدرسة الأورمان الثانوية العسكرية بنين", "Al-Orman Secondary School for Boys");
  const subTitle = t("نسعى لتخريج جيل متميز يجمع بين التفوق الأكاديمي والانضباط العسكري", "We strive to graduate distinguished individuals combining academic excellence and military discipline");
 return (
    <>
      {/* ✅ Helmet */}
      <Helmet>
        <title>{language === 'ar' ? 'مدرسة الأورمان الثانوية العسكرية بنين' : 'Al-Orman Secondary School for Boys'}</title>
        <meta
          name="description"
          content={
            language === 'ar'
              ? 'مدرسة الأورمان الثانوية العسكرية بنين تقدم تجربة تعليمية فريدة تجمع بين الأكاديمية والانضباط العسكري.'
              : 'Al-Orman Secondary School for Boys offers a unique educational experience combining academics and military discipline.'
          }
        />
        <meta
          property="og:title"
          content={language === 'ar' ? 'مدرسة الأورمان الثانوية العسكرية بنين' : 'Al-Orman Secondary School for Boys'}
        />
        <meta
          property="og:description"
          content={
            language === 'ar'
              ? 'استكشف برامجنا الأكاديمية والأنشطة المتنوعة والإنجازات المتميزة للطلاب.'
              : 'Explore our academic programs, diverse activities, and students’ outstanding achievements.'
          }
        />
        <meta property="og:image" content="https://orman-sec-boys.vercel.app/Images/Backgrounds/logo.png" />
        <meta property="og:url" content="https://orman-sec-boys.vercel.app/" />
      </Helmet>
    <div className="min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0652ba]/40 to-[#0652ba]/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/Images/Backgrounds/backgroundhome.png)", opacity: 10 }}
        ></div>

        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
 
          {/* العنوان الرئيسي بحركة الكتابة */}
          <TypewriterTitle text={mainTitle} trigger={mainTitle} />

          {/* الفقرة أسفل العنوان تظهر بعد انتهاء الكتابة */}
          <p className="text-lg sm:text-xl mb-8 leading-relaxed opacity-0 animate-fade-in">
            {subTitle}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate("/about/overview")}
              className="px-8 py-3 bg-white text-[#0652ba] rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              {t("اكتشف المزيد", "Discover More")}
            </button>
            <button
              onClick={() => onNavigate("/contact")}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-[#0652ba] transition-all transform hover:scale-105"
            >
              {t("تواصل معنا", "Contact Us")}
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .animate-fade-in {
            animation: fadeIn 1s forwards;
            animation-delay: 2.5s; /* بعد انتهاء الكتابة */
          }
        `}</style>
      </section>

      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            {t('ما هي مدرسة الأورمان؟', 'What is Al-Orman School?')}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t(
              'نقدم تجربة تعليمية فريدة تجمع بين الأكاديمية والعسكرية',
              'We offer a unique educational experience combining academics and military training'
            )}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-[#0652ba] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title[language]}</h3>
                  <p className="text-gray-600">{feature.description[language]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0652ba] to-[#0652ba]/90 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">40+</div>
              <div className="text-lg opacity-90">{t('عام من التميز', 'Years of Excellence')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3000+</div>
              <div className="text-lg opacity-90">{t('طالب', 'Students')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">{t('معلم', 'Teachers')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">20+</div>
              <div className="text-lg opacity-90">{t('جائزة', 'Awards')}</div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
    </>
  );
};
