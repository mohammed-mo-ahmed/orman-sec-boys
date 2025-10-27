import { useState } from 'react';
import { X, Users, Sparkles, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';


interface ExtracurricularProps {
  section: 'student-union' | 'clubs' | 'competitions' | 'achievements' | 'library';
}

export const Extracurricular = ({ section }: any) => {
  const { language, t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const clubs = [
    {
      name: { ar: 'نادي القراءه', en: 'Reading Club' },
      description: { ar: 'نادي يهتم بقراءة الكتب ومناقشتها', en: 'A club focused on reading and discussing books' },
      icon: '📖'
    },
    {
      name: { ar: 'نادي العلوم', en: 'Science Club' },
      description: { ar: 'التجارب العلمية والابتكار', en: 'Scientific experiments and innovation' },
      icon: '🔬'
    },
    {
      name: { ar: 'نادي الرياضيات', en: 'Math Club' },
      description: { ar: 'حل المسائل والمنافسات', en: 'Problem solving and competitions' },
      icon: '📐'
    },
    {
      name: { ar: 'نادي البرمجة', en: 'Programming Club' },
      description: { ar: 'تطوير التطبيقات والألعاب', en: 'Application and game development' },
      icon: '💻'
    },
    {
      name: { ar: 'نادي الفنون', en: 'Arts Club' },
      description: { ar: 'الرسم والتصميم الإبداعي', en: 'Drawing and creative design' },
      icon: '🎨'
    },
    {
      name: { ar: 'نادي الموسيقى', en: 'Music Club' },
      description: { ar: 'العزف والإنشاد', en: 'Playing instruments and singing' },
      icon: '🎵'
    }
  ];

  const competitions = [
    {
      title: { ar: 'مسابقة جائزة الدولة للمبدع الصغير', en: 'State Prize Competition for Young Creator' },
      date: { ar: '31 ديسمبر 2025', en: '31 December 2025' },
      status: { ar: 'التسجيل مفتوح', en: 'Registration Open' }
    }
  ];

  const achievements = [
    {
      title: { ar: '', en: '' },
      year: '',
      image: ''
    }
  ];

const renderStudentUnion = () => (
  <div className="space-y-12">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        {t('اتحاد الطلاب', 'Student Union')}
      </h1>
      <p className="text-xl text-gray-600">
        {t(
          'منظمة طلابية تمثل صوت الطلاب وتنظم الفعاليات والأنشطة',
          'A student organization representing the student voice and organizing events and activities'
        )}
      </p>
    </div>

    {/* المهام والفعاليات */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <Users className="w-12 h-12 text-[#0652ba] mb-4" />
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('المهام', 'Responsibilities')}</h3>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-[#0652ba] mt-1">•</span>
            <span>{t('تمثيل الطلاب في الاجتماعات الإدارية', 'Representing students in administrative meetings')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0652ba] mt-1">•</span>
            <span>{t('تنظيم الفعاليات والأنشطة المدرسية', 'Organizing school events and activities')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0652ba] mt-1">•</span>
            <span>{t('حل المشكلات الطلابية', 'Resolving student issues')}</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <Sparkles className="w-12 h-12 text-[#0652ba] mb-4" />
        <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('الفعاليات', 'Events')}</h3>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-[#0652ba] mt-1">•</span>
            <span>{t('اليوم الرياضي السنوي', 'Annual Sports Day')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0652ba] mt-1">•</span>
            <span>{t('المعرض الثقافي', 'Cultural Exhibition')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#0652ba] mt-1">•</span>
            <span>{t('حفل التخرج السنوي', 'Annual Graduation Ceremony')}</span>
          </li>
        </ul>
      </div>
    </div>

    {/* قسم الصور في صف واحد */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <img
        src="\Images\Unclassified\SU\1.jpg"
        alt="Student Union 1"
        className="w-full h-64 object-cover rounded-xl shadow-md hover:shadow-xl transition-all"
      />
      <img
        src="\Images\Unclassified\SU\2.jpg"
        alt="Student Union 2"
        className="w-full h-64 object-cover rounded-xl shadow-md hover:shadow-xl transition-all"
      />
      <img
        src="\Images\Unclassified\SU\3.jpg"
        alt="Student Union 3"
        className="w-full h-64 object-cover rounded-xl shadow-md hover:shadow-xl transition-all"
      />
    </div>

{/* الفوتر الخاص باتحاد الطلاب */}
<div className="bg-[#0652ba] text-white py-6 text-center rounded-xl mt-12">
  <p className="flex items-center justify-center gap-2 text-white">
    {t('تابع صفحة اتحاد الطلاب على', 'Follow the Student Union page on')}{' '}
    <a
      href="https://www.facebook.com/profile.php?id=100088099876007"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-white text-[#0652ba] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all"
    >
      <Facebook className="w-5 h-5 text-[#0652ba]" />
      {t('فيسبوك', 'Facebook')}
    </a>
  </p>
</div>

  </div>
);




  const renderClubs = () => (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          {t('النوادي', 'Clubs')}
        </h1>
        <p className="text-xl text-gray-600">
          {t('مجموعة متنوعة من النوادي لتطوير مهارات الطلاب واهتماماتهم', 'A diverse range of clubs to develop students\' skills and interests')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clubs.map((club, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
            <div className="text-6xl mb-4">{club.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{club.name[language]}</h3>
            <p className="text-gray-600">{club.description[language]}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCompetitions = () => (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          {t('المسابقات', 'Competitions')}
        </h1>
        <p className="text-xl text-gray-600">
          {t('مسابقات محلية ودولية لإبراز مواهب طلابنا', 'Local and international competitions to showcase our students\' talents')}
        </p>
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
      {t('لمزيد من التفاصيل، توجه إلى المكتبة أو غرفة الموهوبين', 'For more details, please visit the library or the talented students room')}
      </div>
    </div>
  );
  
const renderLibrary = () => (
<section
  className="relative flex flex-col justify-center items-center px-6"
  style={{ backgroundImage: "url(/Images/Backgrounds/backgroundlibarary.png)",
  }}

  >
    {/* طبقة شفافة فوق الخلفية */}
    <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

    {/* المحتوى */}
    <div className="relative z-10 w-full max-w-7xl text-center py-20 space-y-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 drop-shadow-md">
          {t('مكتبة مدرسة الأورمان', 'Al-Orman School Library')}
        </h1>
        <p className="text-xl text-gray-800 leading-relaxed">
          {t(
            'مكتبة حديثة توفر مصادر تعليمية وكتب متنوعة للطلاب في مختلف المجالات',
            'A modern library offering educational resources and a wide range of books for students'
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: { ar: 'الكتب العلمية', en: 'Scientific Books' }, desc: { ar: 'كتب في الفيزياء والكيمياء والأحياء', en: 'Books on physics, chemistry, and biology' }, icon: '🔬' },
          { title: { ar: 'الكتب الأدبية', en: 'Literature Books' }, desc: { ar: 'روايات، شعر، ومقالات أدبية', en: 'Novels, poetry, and literary essays' }, icon: '📖' },
          { title: { ar: 'قسم التكنولوجيا', en: 'Technology Section' }, desc: { ar: 'كتب عن البرمجة، الإلكترونيات، والذكاء الاصطناعي', en: 'Books on programming, electronics, and AI' }, icon: '💻' },
          { title: { ar: 'قسم اللغات', en: 'Language Section' }, desc: { ar: 'كتب لتعلم الإنجليزية والألمانية ولغات أخرى', en: 'Books for learning English, German, and more' }, icon: '🌍' },
          { title: { ar: 'الوسائط المتعددة', en: 'Multimedia Section' }, desc: { ar: 'أفلام تعليمية ومواد رقمية للبحث', en: 'Educational videos and digital materials for research' }, icon: '🎬' },
          { title: { ar: 'ركن القراءة الهادئة', en: 'Quiet Reading Corner' }, desc: { ar: 'مساحة مريحة للقراءة الفردية والاسترخاء', en: 'A cozy space for personal reading and relaxation' }, icon: '☕' },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/85 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 backdrop-blur-md text-center"
          >
            <div className="text-6xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title[language]}</h3>
            <p className="text-gray-700">{item.desc[language]}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

  const topStudents = [
    {
      title: { ar: 'الصف الأول الثانوي', en: 'First Secondary Grade' },
      image: 'https://i.postimg.cc/your-image1.jpg', // ← هنا حط لينك جدول الصف الأول
    },
    {
      title: { ar: 'الصف الثاني الثانوي', en: 'Second Secondary Grade' },
      image: 'https://i.postimg.cc/your-image2.jpg', // ← هنا حط لينك جدول الصف الثاني
    },
    {
      title: { ar: 'الصف الثالث الثانوي', en: 'Third Secondary Grade' },
      image: 'https://i.postimg.cc/your-image3.jpg', // ← هنا حط لينك جدول الصف الثالث
    },
  ];

  const renderAchievements = () => (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          {t('الإنجازات', 'Achievements')}
        </h1>
        <p className="text-xl text-gray-600">
          {t('إنجازات طلابنا المميزة على المستوى المحلي والدولي', 'Our students’ outstanding achievements at local and international levels')}
        </p>
      </div>

      {/* بطاقات الإنجازات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((ach, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
          >
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg mb-4 text-gray-500 text-lg">
              {ach.image ? (
                <img
                  src={ach.image}
                  alt={ach.title[language]}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                t('لا توجد صورة', 'No Image')
              )}
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">{ach.title[language]}</h3>
            <p className="text-gray-600">
              {t('السنة', 'Year')}: {ach.year || t('غير محدد', 'N/A')}
            </p>
          </div>
        ))}
      </div>

      {/* أوائل الطلبة */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">
          {t('🏆 أوائل الطلبة', 'Top Students')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topStudents.map((grade, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#0652ba]">
                {grade.title[language]}
              </h3>

              {grade.image ? (
                <div
                  onClick={() => setSelectedImage(grade.image)}
                  className="cursor-pointer w-full h-72 rounded-lg overflow-hidden bg-gray-200 group relative"
                >
                  <img
                    src={grade.image}
                    alt={grade.title[language]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold transition-opacity">
                    {t('اضغط للتكبير', 'Click to enlarge')}
                  </div>
                </div>
              ) : (
                <div className="w-full h-72 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-lg">
                  {t('صورة جدول الأوائل', 'Top Students Table Image')}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* نافذة عرض الصورة */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );

  // ✅ العرض الرئيسي
  return (
    <>
      {section === 'library' ? (
        <div className="w-full">{renderLibrary()}</div>
      ) : (
        <div className="min-h-screen bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            {section === 'student-union' && renderStudentUnion()}
            {section === 'clubs' && renderClubs()}
            {section === 'competitions' && renderCompetitions()}
            {section === 'achievements' && renderAchievements()}
          </div>
        </div>
      )}
    </>
  );
};