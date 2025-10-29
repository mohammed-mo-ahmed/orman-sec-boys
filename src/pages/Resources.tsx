import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';

export const Resources = () => {
  const { language, t } = useLanguage();



  const externalLinks = [
    {
      name: { ar: 'موقع الوزارة', en: 'Ministry website' },
      url: 'https://moe.gov.eg/',
      description: { ar: 'وزارة التربية والتعليم والتعليم الفني', en: 'Ministry of Education and Technical Education' }
    },
    {
      name: { ar: 'منصة مدرستنا PLUS', en: 'Madrasetna PLUS Platform' },
      url: 'https://madrasetnaplus.eg/sign-in',
      description: { ar: ' منصة تعليمية  بتقدم تجربة جديده في تقديم المحتوى التعليمي والترفيهي للطلاب في مصر', en: 'An educational platform that offers a new experience in providing educational and entertainment content to students in Egypt' }
    },
    {
      name: { ar: 'المكتبة الالكترونية', en: 'Electronic library' },
      url: 'https://ellibrary.moe.gov.eg/',
      description: { ar: 'منصة شاملة لكل ما يحتاجه الطالب في رحلته التعليمية', en: 'A comprehensive platform for everything a student needs in his educational journey' }
    },
    {
      name: { ar: 'التقييمات', en: 'Weekly evaluations' },
      url: 'https://ellibrary.moe.gov.eg/cha/',
      description: { ar: 'التقييمات الأسبوعية والأداءات الصفية والواجبات المنزلية', en: 'Weekly evaluations, class performance, and homework' }
    },
    {
      name: { ar: 'منصة البث المباشر للحصص الافتراضية', en: 'Live broadcast platform for virtual classes' },
      url: 'https://stream.moe.gov.eg/',
      description: { ar: 'منصة للتواصل المباشر بين المعلمين ذوى الخبرة والطلاب من لقاءات مباشرة يتم اعلانها علي هذه المنصة طبقا للجداول المتاحة.', en: 'A platform for direct communication between experienced teachers and students through direct meetings that are announced on this platform according to the available schedules.' }
    },
    {
      name: { ar: 'منصة QUREO', en: 'QUREO platform' },
      url: 'https://me-portal.qureo.education/login',
      description: { ar: 'منصة البرمجة للصف الاول الثانوي', en: 'Programming platform for the first year of secondary school' }
    },
    {
      name: { ar: 'أكاديمية خان', en: 'Khan Academy' },
      url: 'https://www.khanacademy.org',
      description: { ar: 'دروس مجانية في جميع المواد', en: 'Free lessons in all subjects' }
    },
    {
      name: { ar: 'إدراك', en: 'Edraak' },
      url: 'https://www.edraak.org',
      description: { ar: 'منصة تعليمية عربية', en: 'Arabic educational platform' }
    }
  ];

return (
    <>
      <Helmet>
        <title>{language === 'ar' ? 'الموارد التعليمية - مدرسة الأورمان' : 'Learning Resources - Al-Orman School'}</title>
        <meta
          name="description"
          content={
            language === 'ar'
              ? 'مجموعة شاملة من الموارد التعليمية لدعم رحلتك الأكاديمية في مدرسة الأورمان.'
              : 'A comprehensive collection of educational resources to support your academic journey at Al-Orman School.'
          }
        />
        <meta property="og:title" content={language === 'ar' ? 'الموارد التعليمية - مدرسة الأورمان' : 'Learning Resources - Al-Orman School'} />
        <meta
          property="og:description"
          content={
            language === 'ar'
              ? 'اكتشف أهم المنصات التعليمية والمصادر المفيدة للطلاب.'
              : 'Discover essential learning platforms and helpful resources for students.'
          }
        />
        <meta property="og:image" content="https://orman-sec-boys.vercel.app/Images/Backgrounds/logo.png" />
        <meta property="og:url" content="https://orman-sec-boys.vercel.app/resources" />
      </Helmet>

    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t('الموارد التعليمية', 'Learning Resources')}
          </h1>
          <p className="text-xl text-gray-600">
            {t(
              'مجموعة شاملة من الموارد التعليمية لدعم رحلتك الأكاديمية',
              'A comprehensive collection of educational resources to support your academic journey'
            )}
          </p>
        </div>

       

        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
            <ExternalLink className="w-8 h-8 text-[#0652ba]" />
            {t('منصات التعلم', 'Learning platforms')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {externalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                  {link.name[language]}
                  <ExternalLink className="w-5 h-5 text-[#0652ba]" />
                </h3>
                <p className="text-gray-600">{link.description[language]}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  );
};
