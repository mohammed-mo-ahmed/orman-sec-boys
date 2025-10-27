import { GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AlumniStory } from '../types';
import { Helmet } from 'react-helmet-async';

export const Alumni = () => {
  const { language, t } = useLanguage();

  const alumniStories: AlumniStory[] = [
    {
      id: '1',
      name: { ar: 'د.حسام بدراوي', en: 'Dr. Hossam Badrawi' },
      achievement: {
        ar: 'طبيب وأستاذ جامعي وسياسي مصري بارز، شغل مناصب بارزة في الدولة، منها عضو مجلس الشورى المصري ورئيس لجنة التعليم والبحث العلمي في البرلمان من عام 2000 حتى 2005. كما عُيِّن أمينًا عامًا للحزب الوطني عام 2011. يُعرف بدراوي بمساهمته في إصلاح منظومة التعليم وإسهاماته البحثية العديدة في مجالات الصحة والبحث العلمي.',
        en: 'A prominent Egyptian doctor, university professor, and politician, he held prominent positions in the state, including a member of the Egyptian Shura Council and head of the Education and Scientific Research Committee in Parliament from 2000 to 2005. He was also appointed Secretary-General of the National Party in 2011. Badrawi is known for his contribution to reforming the education system and his many research contributions in the fields of health and scientific research.'
      },
      image: '/Images/Unclassified/Alumni/Dr.Hossam-Badrawi.jpg',
      link: {
        ar: 'https://www.hossambadrawi.com/%d8%af-%d8%ad%d8%b3%d8%a7%d9%85-%d8%a8%d8%af%d8%b1%d8%a7%d9%88%d9%8a-%d9%8a%d8%aa%d8%a8%d9%86%d9%8a-%d9%85%d8%a8%d8%a7%d8%af%d8%b1%d8%a9-%d8%aa%d8%a8%d8%af%d8%a3-%d8%a8%d9%85%d8%af%d8%b1%d8%b3%d8%a9/',
        en: 'https://www.hossambadrawi.com/en/dr-hossam-badrawi-starts-an-initiative-that-begins-with-the-orman-model-school-to-develop-ancient-schools/'
      }
    },
    {
      id: '2',
      name: { ar: 'د.حسام نايل', en: 'Dr. Hossam Nayel' },
      achievement: {
        ar: 'كاتب ومترجم وأستاذ نقد أدبي مصري، نال الدكتوراه في النقد الأدبي من جامعة القاهرة. يعمل نايل مدرسًا للنقد الأدبي بأكاديمية الفنون في القاهرة، وله مؤلفات وترجمات متميزة في الأدب والنظرية المعاصرة. فاز بجوائز أدبية في القصة القصيرة وحصل على جائزة الدولة التشجيعية (2013) والترجمة (2019) في مصر.',
        en: 'An Egyptian writer, translator, and professor of literary criticism. He obtained a doctorate in literary criticism from Cairo University. Nayel works as a teacher of literary criticism at the Academy of Arts in Cairo, and has distinguished books and translations in contemporary literature and theory. He won literary awards for short stories and received the State Encouragement Award (2013) and translation (2019) in Egypt.'
      },
      image: '/Images/Unclassified/Alumni/Dr.Hossam-Nayel.jpeg',
      link: {
        ar: 'https://ar.wikipedia.org/wiki/%D8%AD%D8%B3%D8%A7%D9%85_%D9%86%D8%A7%D9%8A%D9%84#:~:text=%D9%88%D9%84%D8%AF%20%D8%AD%D8%B3%D8%A7%D9%85%20%D9%86%D8%A7%D9%8A%D9%84%20%D9%81%D9%8A%20%D8%AD%D9%8A%D9%91,4',
        en: 'https://ar.wikipedia.org/wiki/%D8%AD%D8%B3%D8%A7%D9%85_%D9%86%D8%A7%D9%8A%D9%84#:~:text=%D9%88%D9%84%D8%AF%20%D8%AD%D8%B3%D8%A7%D9%85%20%D9%86%D8%A7%D9%8A%D9%84%20%D9%81%D9%8A%20%D8%AD%D9%8A%D9%91,4'
      }
    }
  ];

  return (
    <>
    <Helmet>
  <title>{language === 'ar' ? 'خريجونا - مدرسة الأورمان الثانوية بنين' : 'Our Alumni - Al-Orman Secondary School for Boys'}</title>
  <meta name="description" content={language === 'ar' ? 'تعرف على خريجي مدرسة الأورمان وإنجازاتهم المتميزة.' : 'Meet our alumni and their outstanding achievements.'} />
  <meta property="og:title" content={language === 'ar' ? 'خريجونا - مدرسة الأورمان الثانوية بنين' : 'Our Alumni - Al-Orman Secondary School for Boys'} />
  <meta property="og:description" content={language === 'ar' ? 'قصص نجاح وإنجازات خريجينا في مختلف المجالات.' : 'Success stories and achievements of our alumni across various fields.'} />
  <meta property="og:image" content="https://orman-sec-boys.vercel.app/Images/Backgrounds/logo.png" />
  <meta property="og:url" content="https://orman-sec-boys.vercel.app/alumni" />
</Helmet>

    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t('خريجونا', 'Our Alumni')}
          </h1>
          <p className="text-xl text-gray-600">
            {t(
              'فخورون بإنجازات خريجينا الذين يحققون التميز في مختلف المجالات',
              'Proud of our alumni achievements who excel in various fields'
            )}
          </p>
        </div>

<div className="flex justify-center mb-16">
  <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-100 w-[400px] md:w-[500px]">
    <div className="w-16 h-16 bg-[#0652ba] rounded-full flex items-center justify-center mx-auto mb-4">
      <GraduationCap className="w-8 h-8 text-white" />
    </div>
    <div className="text-4xl font-bold text-gray-900 mb-2">50,000+</div>
    <div className="text-gray-600">{t('خريج', 'Alumni')}</div>
  </div>


        
        </div>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
            {t('قصص نجاح', 'Success Stories')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumniStories.map((alumni) => (
              <a
                key={alumni.id}
                href={alumni.link[language]} // 👈 بيختار اللينك المناسب حسب اللغة
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100 block"
              >
                <div className="h-64 overflow-hidden bg-gray-200">
                  <img
                    src={alumni.image}
                    alt={alumni.name[language]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{alumni.name[language]}</h3>
                  <p className="text-gray-600 leading-relaxed">{alumni.achievement[language]}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  );
};
