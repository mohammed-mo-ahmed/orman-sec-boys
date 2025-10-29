import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Teacher } from "../../types";
import { Helmet } from "react-helmet-async";

export const Teachers = () => {
  const { language, t } = useLanguage();
  const [openSubject, setOpenSubject] = useState<string | null>(null);

  const toggleSubject = (subject: string) => {
    setOpenSubject(openSubject === subject ? null : subject);
  };

const teachers: Teacher[] = [
  { name: { ar: 'أ. عطية محمد', en: 'Mr. Attia Mohammed' }, subject: { ar: 'مدير المدرسة', en: 'School Principal' }, image: '/Images/Teachers/Mr.Attia-Mohammed.jpg' },
  { name: { ar: 'أ. طارق سنجر', en: 'Mr. Tarek Singer' }, subject: { ar: 'اللغة العربية', en: 'Arabic Language' }, image: '/Images/Teachers/Mr.Tarek-Singer.jpg' },
  { name: { ar: 'أ. ناصر عماره', en: 'Mr. Nasser Amara' }, subject: { ar: 'اللغة الإنجليزية', en: 'English Language' }, image: '/Images/Teachers/Mr.Nasser-Amara.png' },
  { name: { ar: 'أ. عادل', en: 'Mr. Adel' }, subject: { ar: 'اللغة الإنجليزية', en: 'English Language' }, image: '/Images/Teachers/Unknown.jpg' },
  { name: { ar: 'أ. محمود طه', en: 'Mr. Mahmoud Taha' }, subject: { ar: 'الرياضيات', en: 'Mathematics' }, image: '/Images/Teachers/Mr.Mahmoud-Taha.jpg' },
  { name: { ar: 'أ. احمد علي', en: 'Mr. Ahmed Ali' }, subject: { ar: 'الرياضيات', en: 'Mathematics' }, image: '/Images/Teachers/Mr.Ahmed-Ali.jpg' },
  { name: { ar: 'أ. سامح صقر', en: 'Mr. Sameh Saqr' }, subject: { ar: 'العلوم المتكاملة', en: 'Integrated Sciences' }, image: '/Images/Teachers/Mr.Sameh-Saqr.jpg' },
  { name: { ar: 'أ. سامح صقر', en: 'Mr. Sameh Saqr' }, subject: { ar: 'الفيزياء', en: 'Physics' }, image: '/Images/Teachers/Mr.Sameh-Saqr.jpg' },
  { name: { ar: 'أ. فوزي صدقي', en: 'Mr. Fawzy Sedky' }, subject: { ar: 'الكيمياء', en: 'Chemistry' }, image: '/Images/Teachers/Mr.Fawzy-Sedky.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'الأحياء', en: 'Biology' }, image: '/Images/Teachers/Unknown.jpg' },
  { name: { ar: 'أ. حسام عبدالجواد', en: 'Mr. Hossam Abdelgawad' }, subject: { ar: 'التاريخ', en: 'History' }, image: '/Images/Teachers/Mr.Hossam-Abdelgawad.png' },
  { name: { ar: 'أ. أحمد صابر', en: 'Mr. Ahmed Saber' }, subject: { ar: 'التاريخ', en: 'History' }, image: '/Images/Teachers/Mr.Ahmed-Saber.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'الجغرافيا', en: 'Geography' }, image: '/Images/Teachers/Unknown.jpg' },
  { name: { ar: 'أ. عصام الكاشف', en: 'Mr. Essam El-Kashef' }, subject: { ar: 'الفلسفة', en: 'Philosophy' }, image: '/Images/Teachers/Mr.Essam-El-Kashef.jpg' },
  { name: { ar: 'أ. عبدالجواد افندينا', en: 'Mr. Abdelgawad Afandina' }, subject: { ar: 'الفلسفة', en: 'Philosophy' }, image: '/Images/Teachers/Mr.Abdelgawad-Afandina.png' },
  { name: { ar: 'أ. عصام الكاشف', en: 'Mr. Essam El-Kashef' }, subject: { ar: 'علم النفس', en: 'Psychology' }, image: '/Images/Teachers/Mr.Essam-El-Kashef.jpg' },
  { name: { ar: 'أ. عبدالجواد افندينا', en: 'Mr. Abdelgawad Afandina' }, subject: { ar: 'علم النفس', en: 'Psychology' }, image: '/Images/Teachers/Mr.Abdelgawad-Afandina.png' },
  { name: { ar: '', en: '' }, subject: { ar: 'علوم الحاسوب', en: 'Computer Science' }, image: '/Images/Teachers/Unknown.jpg' },
  { name: { ar: 'أ. حسام شرف', en: 'Mr. Hossam Sharaf' }, subject: { ar: 'اللغة الألمانية', en: 'German Language' }, image: '/Images/Teachers/Mr.Hossam-Sharaf.jpg' },
  { name: { ar: 'أ. محمد السيد', en: 'Mr. Mohamed El-Sayed' }, subject: { ar: 'اللغة الألمانية', en: 'German Language' }, image: '/Images/Teachers/Mr.Mohamed-El-Sayed.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'اللغة الفرنسية', en: 'French Language' }, image: '/Images/Teachers/Unknown.jpg' },
  { name: { ar: 'أ. فاطمة كامل', en: 'Ms. Fatma Kamel' }, subject: { ar: 'اللغة الإيطالية', en: 'Italian Language' }, image: '/Images/Teachers/Ms.Fatma-Kamel.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'اللغة الإسبانية', en: 'Spanish Language' }, image: '/Images/Teachers/Unknown.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'التربية الزراعية', en: 'Agricultural Education' }, image: '/Images/Teachers/Unknown.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'التربية الصناعية', en: 'Industrial Education' }, image: '/Images/Teachers/Unknown.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'التربية الرياضية', en: 'Physical Education' }, image: '/Images/Teachers/Unknown.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'التربية العسكرية', en: 'Military Education' }, image: '/Images/Teachers/Unknown.jpg' },
  { name: { ar: '', en: '' }, subject: { ar: 'التربية الفنية', en: 'Art Education' }, image: '/Images/Teachers/Unknown.jpg' },
  { name: { ar: 'أ. طارق سنجر', en: 'Mr. Tarek Singer' }, subject: { ar: 'التربية الدينية', en: 'Religious Education' }, image: '/Images/Teachers/Mr.Tarek-Singer.jpg' },
  { name: { ar: 'أ. فاطمة الزهراء كامل', en: 'Ms. Fatma El-Zahraa Kamel' }, subject: { ar: 'اداره المكتبه', en: 'Library Management' }, image: '/Images/Teachers/Ms.Fatma-El-Zahraa-Kamel.jpg' },
];

  const subjects: { [key: string]: Teacher[] } = {};
  teachers.forEach((teacher) => {
    const subj = teacher.subject[language];
    if (!subjects[subj]) subjects[subj] = [];
    subjects[subj].push(teacher);
  });

  return (
    <>
      <Helmet>
        <title>{t("هيئة التدريس - مدرسة الأورمان", "Our Teachers - Al-Orman School")}</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t("هيئة التدريس", "Our Teachers")}
            </h1>
            <p className="text-xl text-gray-600">
              {t("فريق من المعلمين المتميزين ذوي الخبرة والكفاءة العالية", "A team of distinguished teachers with high experience and competence")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {Object.keys(subjects).map((subject) => (
              <div key={subject} className="rounded-2xl flex flex-col overflow-hidden transition-all duration-300 bg-white">
                <button
                  onClick={() => toggleSubject(subject)}
                  className="w-full px-6 py-4 bg-[#0652ba] text-white font-semibold text-lg flex justify-between items-center hover:bg-[#0541a5] transition-colors rounded-2xl"
                >
                  {subject}
                  {openSubject === subject ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    openSubject === subject ? "max-h-[999px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <div className="flex flex-col bg-white rounded-2xl">
                    {subjects[subject].map((teacher) => (
                      <div key={teacher.name[language]} className="flex items-center gap-4 px-6 py-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                          <img src={teacher.image} alt={teacher.name[language]} className="w-full h-full object-cover" />
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
      </div>
    </>
  );
};
