import { useState } from 'react';
import { Calendar, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { NewsItem } from '../types';
import { Helmet } from 'react-helmet-async';

export const News = () => {
  const { language, t } = useLanguage();
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: {
        ar: 'مسابقة جائزة الدولة للمبدع الصغير',
        en: 'State Prize Competition for Young Creator'
      },
      date: '2025-12-31',
      content: {
        ar: 'جائزة الدولة للمبدع الصغير، تحت رعاية السيدة انتصار السيسي، تُنظمها وزارة الثقافة لاكتشاف ودعم مواهب الأطفال من سن 5 إلى 18 سنة في مجالات الأدب والفنون والابتكار، بجوائز قيمتها 40 ألف جنيه. آخر موعد للتقديم 31 ديسمبر 2025، وتشمل فروع الشعر، القصة، المسرح، الرسم، العزف، الغناء، التطبيقات، والمشروعات العلمية.',
        en: 'The State Prize for Young Creator, under the patronage of Mrs. Entissar El-Sisi, is organized by the Ministry of Culture to discover and support children’s talents aged 5 to 18 in literature, arts, and innovation, with prizes worth 40,000 EGP. The deadline for submission is December 31, 2025.'
      },
      image: '/Images/Unclassified/News/State-Prize-Competition.png',
      link: 'http://giza.gov.eg/DocLib4/%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%A7%D9%84%D9%83%D8%A7%D9%85%D9%84%D8%A9%20%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%D8%A9%202026.pdf'
    },
    {
      id: '2',
      title: {
        ar: 'جدول امتحان شهر أكتوبر لطلاب الصف الثانوى فى الجيزة',
        en: 'October exam schedule for secondary school students in Giza'
      },
      date: '2025-10-20',
      content: {
        ar: 'أعلنت مديرية التربية والتعليم بالجيزة جدول امتحانات شهر أكتوبر لطلاب الصفوف الثانوية، والتي تبدأ في 20 أكتوبر وتشمل جميع المواد الدراسية الأساسية.',
        en: 'The Directorate of Education in Giza has announced the October exam schedule for secondary students, starting on October 20 and covering all core subjects.'
      },
      image: '/Images/Unclassified/News/October-exam.png',
      link: 'https://m2.youm7.com/story/2025/10/20/%D8%AC%D8%AF%D9%88%D9%84-%D8%A7%D9%85%D8%AA%D8%AD%D8%A7%D9%86-%D8%B4%D9%87%D8%B1-%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1-%D9%84%D8%B7%D9%84%D8%A7%D8%A8-%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%89-%D9%88%D8%A5%D8%B9%D8%AF%D8%A7%D8%AF%D9%89-%D9%88%D8%AB%D8%A7%D9%86%D9%88%D9%89-%D9%81%D9%89-%D8%A7%D9%84%D8%AC%D9%8A%D8%B2%D8%A9/7164963'
    }
  ];

  return (
    <>
      {/* ✅ Helmet */}
      <Helmet>
        <title>{language === 'ar' ? 'الأخبار والإعلانات - مدرسة الأورمان' : 'News & Announcements - Al-Orman School'}</title>
        <meta
          name="description"
          content={
            language === 'ar'
              ? 'آخر الأخبار والفعاليات من مدرسة الأورمان الثانوية بنين.'
              : 'Latest news and events from Al-Orman Secondary School for Boys.'
          }
        />
        <meta
          property="og:title"
          content={language === 'ar' ? 'الأخبار والإعلانات - مدرسة الأورمان' : 'News & Announcements - Al-Orman School'}
        />
        <meta
          property="og:description"
          content={
            language === 'ar'
              ? 'تابع آخر الأخبار والمبادرات المدرسية والفعاليات المختلفة.'
              : 'Follow the latest news, school initiatives, and events.'
          }
        />
        <meta property="og:image" content="https://orman-sec-boys.vercel.app/Images/Backgrounds/logo.png" />
        <meta property="og:url" content="https://orman-sec-boys.vercel.app/news" />
      </Helmet>

    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t('الأخبار والإعلانات', 'News & Announcements')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('آخر الأخبار والفعاليات من مدرسة الأورمان', 'Latest news and events from Al-Orman School')}
          </p>
        </div>

        {/* 📰 بطاقات الأخبار */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className="h-48 overflow-hidden bg-gray-200 cursor-pointer"
                onClick={() => {
                  // 👇 الزووم متاح فقط لصورة امتحان أكتوبر
                  if (item.id === '2') setZoomImage(item.image);
                }}
              >
                <img
                  src={item.image}
                  alt={item.title[language]}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                  {item.title[language]}
                </h2>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {item.content[language]}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0652ba] font-semibold hover:underline"
                >
                  {t('اقرأ المزيد', 'Read More')} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 🔍 نافذة الزووم */}
      {zoomImage && (
        <div
          onClick={() => setZoomImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setZoomImage(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={zoomImage}
            alt="Zoomed"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
    </>
  );
};
