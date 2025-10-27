
import { useState } from 'react';
import { ChevronDown, ChevronUp, Target, History, Users, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Teacher } from '../types';

interface AboutProps {
  section: 'overview' | 'vision' | 'history' | 'teachers';
}

export const About = ({ section }: AboutProps) => {
  const { language, t } = useLanguage();
  const [openSubject, setOpenSubject] = useState<string | null>(null);



const toggleSubject = (subject: string) => {
  setOpenSubject(openSubject === subject ? null : subject);
};


const teachers: Teacher[] = [
  { name: { ar: 'أ. عطية محمد', en: 'Mr. Attia Mohammed' }, subject: { ar: 'مدير المدرسة', en: 'School Principal' }, image: 'Images/Teachers/Mr.Attia-Mohammed.jpg' },
  { name: { ar: 'أ. طارق سنجر', en: 'Mr. Tarek Singer' }, subject: { ar: 'اللغة العربية', en: 'Arabic Language' }, image: 'Images/Teachers/Mr.Tarek-Singer.jpg' },
  { name: { ar: 'أ. ناصر عماره', en: 'Mr. Nasser Amara' }, subject: { ar: 'اللغة الإنجليزية', en: 'English Language' }, image: 'Images/Teachers/Mr.Nasser-Amara.png' },
  { name: { ar: 'أ . عادل', en: 'Mr. Adel' }, subject: { ar: 'اللغة الإنجليزية', en: 'English Language' }, image: 'Images/Teachers/Unknown.jpg' },
  { name: { ar: 'أ. محمود طه', en: 'Mr. Mahmoud Taha' }, subject: { ar: 'الرياضيات', en: 'Mathematics' }, image: 'Images/Teachers/Mr.Mahmoud-Taha.jpg' },
  { name: { ar: 'أ. احمد علي', en: 'Mr. Ahmed Ali' }, subject: { ar: 'الرياضيات', en: 'Mathematics' }, image: 'Images/Teachers/Mr.Ahmed-Ali.jpg' },
  { name: { ar: 'أ. سامح صقر', en: 'Mr. Sameh Saqr' }, subject: { ar: 'العلوم المتكاملة', en: 'Integrated Sciences' }, image: 'Images/Teachers/Mr.Sameh-Saqr.jpg' },
  { name: { ar: 'أ. سامح صقر', en: 'Mr. Sameh Saqr' }, subject: { ar: 'الفيزياء', en: 'Physics' }, image: 'Images/Teachers/Mr.Sameh-Saqr.jpg' },
  { name: { ar: 'أ. فوزي صدقي', en: 'Mr. Fawzy Sedky' }, subject: { ar: 'الكيمياء', en: 'Chemistry' }, image: 'Images/Teachers/Mr.Fawzy-Sedky.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'الأحياء', en: 'Biology' }, image: 'Images/Teachers/Unknown.jpg' },
  { name: { ar: 'أ. حسام عبدالجواد', en: 'Mr. Hossam Abdelgawad' }, subject: { ar: 'التاريخ', en: 'History' }, image: 'Images/Teachers/Mr.Hossam-Abdelgawad.png' },
  { name: { ar: 'أ. أحمد صابر', en: 'Mr. Ahmed Saber' }, subject: { ar: 'التاريخ', en: 'History' }, image: 'Images/Teachers/Mr.Ahmed-Saber.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'الجغرافيا', en: 'Geography' }, image: 'Images/Teachers/Unknown.jpg' },
  { name: { ar: 'أ. عصام الكاشف', en: 'Mr. Essam El-Kashef' }, subject: { ar: 'الفلسفة', en: 'Philosophy' }, image: 'Images/Teachers/Mr.Essam-El-Kashef.jpg' },
  { name: { ar: 'أ. عبدالجواد افندينا', en: 'Mr. Abdelgawad Afandina' }, subject: { ar: 'الفلسفة', en: 'Philosophy' }, image: 'Images/Teachers/Mr.Abdelgawad-Afandina.png' },
  { name: { ar: 'أ. عصام الكاشف', en: 'Mr. Essam El-Kashef' }, subject: { ar: 'علم النفس', en: 'Psychology' }, image: 'Images/Teachers/Mr.Essam-El-Kashef.jpg' },
  { name: { ar: 'أ. عبدالجواد افندينا', en: 'Mr. Abdelgawad Afandina' }, subject: { ar: 'علم النفس', en: 'Psychology' }, image: 'Images/Teachers/Mr.Abdelgawad-Afandina.png' },
  { name: { ar: '', en: '' }, subject: { ar: 'علوم الحاسوب', en: 'Computer Science' }, image: 'Images/Teachers/Unknown.jpg' },
  { name: { ar: 'أ. حسام شرف', en: 'Mr. Hossam Sharaf' }, subject: { ar: 'اللغة الألمانية', en: 'German Language' }, image: 'Images/Teachers/Mr.Hossam-Sharaf.jpg' },
  { name: { ar: 'أ. محمد السيد', en: 'Mr. Mohamed El-Sayed' }, subject: { ar: 'اللغة الألمانية', en: 'German Language' }, image: 'Images/Teachers/Mr.Mohamed-El-Sayed.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'اللغة الفرنسية', en: 'French Language' }, image: 'Images/Teachers/Unknown.jpg' },
  { name: { ar: 'أ. فاطمة كامل', en: 'Ms. Fatma Kamel' }, subject: { ar: 'اللغة الإيطالية', en: 'Italian Language' }, image: 'Images/Teachers/Ms.Fatma-Kamel.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'اللغة الإسبانية', en: 'Spanish Language' }, image: 'Images/Teachers/Unknown.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'التربية الزراعية', en: 'Agricultural Education' }, image: 'Images/Teachers/Unknown.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'التربية الصناعية', en: 'Industrial Education' }, image: 'Images/Teachers/Unknown.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'التربية الرياضية', en: 'Physical Education' }, image: 'Images/Teachers/Unknown.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'التربية العسكرية', en: 'Military Education' }, image: 'Images/Teachers/Unknown.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'التربية الفنية', en: 'Art Education' }, image: 'Images/Teachers/Unknown.jpg' },
  { name: { ar: 'أ. طارق سنجر', en: 'Mr. Tarek Singer' }, subject: { ar: 'التربية الدينية', en: 'Religious Education' }, image: 'Images/Teachers/Mr.Tarek-Singer.jpg' },
  { name: { ar: 'أ. فاطمة الزهراء كامل', en: 'Ms. Fatma El-Zahraa Kamel' }, subject: { ar: 'اداره المكتبه', en: 'Library Management' }, image: 'Images/Teachers/Ms.Fatma-El-Zahraa-Kamel.jpg' },
];



const renderTeachersAccordion = () => {
  // جمع المدرسين حسب المادة
  const subjects: { [key: string]: Teacher[] } = {};
  teachers.forEach((teacher) => {
    const subj = teacher.subject[language];
    if (!subjects[subj]) subjects[subj] = [];
    subjects[subj].push(teacher);
  });

  return (
    <div className="space-y-12">

      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          {t('هيئة التدريس', 'Our Teachers')}
        </h1>
        <p className="text-xl text-gray-600">
          {t(
            'فريق من المعلمين المتميزين ذوي الخبرة والكفاءة العالية',
            'A team of distinguished teachers with high experience and competence'
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
{Object.keys(subjects).map((subject) => (
  <div
    key={subject}
    className="rounded-2xl flex flex-col overflow-hidden transition-all duration-300 bg-white"
  >
    <button
      onClick={() => toggleSubject(subject)}
      className="w-full px-6 py-4 bg-[#0652ba] text-white font-semibold text-lg flex justify-between items-center hover:bg-[#0541a5] transition-colors rounded-2xl outline-none focus:outline-none focus-visible:outline-none focus:ring-0 active:scale-[0.98] active:shadow-inner select-none"
    >
      {subject}
      {openSubject === subject ? (
        <ChevronUp className="w-5 h-5" />
      ) : (
        <ChevronDown className="w-5 h-5" />
      )}
    </button>



    
<div
  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
    openSubject === subject ? 'max-h-[999px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
  }`}
>


      <div className="flex flex-col bg-white rounded-2xl">
        {subjects[subject].map((teacher) => (
          <div
            key={teacher.name[language]}
            className="flex items-center gap-4 px-6 py-4"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
              <img
                src={teacher.image}
                alt={teacher.name[language]}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{teacher.name[language]}</p>
              <p className="text-gray-600 text-sm">{teacher.subject[language]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
))} 

</div>  
</div>  
);        
};       



  const renderOverview = () => (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          {t('نظرة عامة', 'Overview')}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          {t(
            'مدرسة الأورمان الثانوية العسكرية بنين هي مؤسسة تعليمية رائدة تجمع بين التعليم الأكاديمي المتميز والتدريب العسكري الشامل لإعداد جيل من القادة المتميزين',
            'Al-Orman Secondary School for Boys is a leading educational institution combining outstanding academic education with comprehensive military training to prepare a generation of distinguished leaders'
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="w-16 h-16 bg-[#0652ba] rounded-lg flex items-center justify-center mb-4">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('التميز الأكاديمي', 'Academic Excellence')}</h3>
          <p className="text-gray-600 leading-relaxed">
            {t(
              'نوفر برامج تعليمية متقدمة تواكب أحدث المعايير العالمية، مع التركيز على تطوير مهارات التفكير النقدي والإبداع',
              'We provide advanced educational programs aligned with the latest global standards, focusing on developing critical thinking and creativity skills'
            )}
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="w-16 h-16 bg-[#0652ba] rounded-lg flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('التدريب العسكري', 'Military Training')}</h3>
          <p className="text-gray-600 leading-relaxed">
            {t(
              'برنامج تدريبي عسكري متكامل يهدف إلى بناء الشخصية القيادية وتعزيز قيم الانضباط والمسؤولية',
              'A comprehensive military training program aimed at building leadership character and reinforcing values of discipline and responsibility'
            )}
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#0652ba] to-[#0652ba]/90 text-white p-12 rounded-xl">
        <h3 className="text-3xl font-bold mb-6 text-center">{t('قيمنا الأساسية', 'Our Core Values')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{t('التميز', 'Excellence')}</div>
            <p className="opacity-90">{t('في كل ما نقوم به', 'In everything we do')}</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{t('الانضباط', 'Discipline')}</div>
            <p className="opacity-90">{t('أساس النجاح', 'Foundation of success')}</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{t('القيادة', 'Leadership')}</div>
            <p className="opacity-90">{t('نبني القادة', 'We build leaders')}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVision = () => (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          {t('الرؤية والرسالة', 'Vision & Mission')}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-[#0652ba]">
          <div className="w-20 h-20 bg-[#0652ba] rounded-full flex items-center justify-center mx-auto mb-6">
            <Eye className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">{t('رؤيتنا', 'Our Vision')}</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            {t(
              'أن نكون المؤسسة التعليمية الرائدة في مصر والعالم العربي، نخرج جيلاً من القادة المتميزين الذين يجمعون بين العلم والأخلاق والانضباط',
              'To be the leading educational institution in Egypt and the Arab world, graduating a generation of distinguished leaders who combine knowledge, ethics, and discipline'
            )}
          </p>
        </div>

        <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-[#0652ba]">
          <div className="w-20 h-20 bg-[#0652ba] rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">{t('رسالتنا', 'Our Mission')}</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            {t(
              'تقديم تعليم متميز يجمع بين الأكاديمية والعسكرية، وتطوير قدرات الطلاب الفكرية والبدنية والأخلاقية لإعدادهم لقيادة المستقبل',
              'Providing distinguished education combining academics and military training, and developing students\' intellectual, physical, and moral capabilities to prepare them to lead the future'
            )}
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-10 rounded-xl">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('أهدافنا الاستراتيجية', 'Our Strategic Goals')}</h3>
        <ul className="space-y-4">
          {[
            { ar: 'تحقيق التميز الأكاديمي في جميع المجالات', en: 'Achieving academic excellence in all fields' },
            { ar: 'بناء شخصيات قيادية قادرة على مواجهة التحديات', en: 'Building leadership personalities capable of facing challenges' },
            { ar: 'تعزيز القيم الأخلاقية والوطنية', en: 'Reinforcing ethical and national values' },
            { ar: 'تطوير المهارات العملية والتطبيقية', en: 'Developing practical and applied skills' },
            { ar: 'إعداد الطلاب للنجاح في الحياة الجامعية والمهنية', en: 'Preparing students for success in university and professional life' }
          ].map((goal, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#0652ba] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <p className="text-lg text-gray-700">{goal[language]}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderHistory = () => (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          {t('تاريخنا', 'Our History')}
        </h1>
        <p className="text-xl text-gray-600">
          {t(
            'رحلة من التميز والإنجازات عبر السنين',
            'A journey of excellence and achievements through the years'
          )}
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#0652ba]"></div>

        {[
          {
            year: '1944',
            title: { ar: 'التأسيس', en: 'Foundation' },
            description: { ar: 'تأسيس المدرسة برؤية طموحة لتقديم تعليم متميز', en: 'School founded with an ambitious vision to provide distinguished education' }
          },
          {
            year: '',
            title: { ar: 'التوسع', en: 'Expansion' },
            description: { ar: 'افتتاح مرافق جديدة ومختبرات حديثة', en: 'Opening of new facilities and modern laboratories' }
          },
          {
            year: '',
            title: { ar: 'الاعتماد', en: 'Accreditation' },
            description: { ar: 'الحصول على الاعتماد للجودة التعليمية', en: 'Obtaining accreditation for educational quality' }
          },
          {
            year: '',
            title: { ar: 'الإنجازات', en: 'Achievements' },
            description: { ar: 'حصد العديد من الجوائز الأكاديمية والرياضية', en: 'Winning numerous academic and sports awards' }
          },
          {
            year: '2025',
            title: { ar: 'الحاضر', en: 'Present' },
            description: { ar: 'مواصلة التميز مع أكثر من 3000 طالب و50 معلم', en: 'Continuing excellence with over 500 students and 50 teachers' }
          }
        ].map((milestone, index) => (
          <div key={index} className={`mb-12 flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
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
  );

  const renderTeachers = () => (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          {t('هيئة التدريس', 'Our Teachers')}
        </h1>
        <p className="text-xl text-gray-600">
          {t(
            'فريق من المعلمين المتميزين ذوي الخبرة والكفاءة العالية',
            'A team of distinguished teachers with high experience and competence'
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all border border-gray-100"
          >
            <div className="aspect-square overflow-hidden bg-gray-200">
              <img
                src={teacher.image}
                alt={teacher.name[language]}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{teacher.name[language]}</h3>
              <p className="text-[#0652ba] font-semibold">{teacher.subject[language]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );




  
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {section === 'overview' && renderOverview()}
        {section === 'vision' && renderVision()}
        {section === 'history' && renderHistory()}
        {section === 'teachers' && renderTeachersAccordion()}
      </div>
    </div>
  );
};