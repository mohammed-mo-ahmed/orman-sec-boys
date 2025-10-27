import { useState } from 'react';
import { ChevronDown, Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Testimonial } from '../types';
import { Helmet } from 'react-helmet-async';

interface FAQProps {
  onNavigate: (page: string) => void;
}

export const FAQ = ({ onNavigate }: FAQProps) => {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: { ar: 'ما هي شروط القبول في المدرسة؟', en: 'What are the admission requirements?' },
      answer: {
        ar: 'يجب أن يكون الطالب حاصلاً على شهادة إتمام المرحلة الإعدادية بمجموع لا يقل عن 225، واجتياز المقابلة الشخصية والكشف الطبي.',
        en: 'Students must have completed preparatory education with a minimum average of 85%, and pass personal interview and medical examination.'
      }
    },
    {
      question: { ar: 'ما هي الأدارة التعليمية التابعة لها المدرسة؟', en: 'What is the educational administration to which the school belongs?' },
      answer: {
        ar: 'الأدارة التعليمية التابعة لها المدرسة هي اداره الدقي.',
        en: 'The educational administration to which the school is affiliated is the Dokki Administration.'
      }
    },

    
    {
      question: { ar: 'ما هي تكاليف الدراسة؟', en: 'What are the tuition fees?' },
      answer: {
        ar: 'تختلف الرسوم حسب البرنامج الدراسي. يرجى التواصل مع إدارة المدرسة للحصول على معلومات مفصلة.',
        en: 'Fees vary according to the academic program. Please contact the school administration for detailed information.'
      }
    },

    
    
    {
      question: { ar: 'ما هي مواعيد الدراسة؟', en: 'What are the school hours?' },
      answer: {
        ar: 'تبدأ الدراسة من الساعة 7:30 صباحاً حتى 1:00 مساءا.',
        en: 'School starts at 7:30 AM and ends at 1:00 PM.',
      }
    },

      
    {
      question: { ar: 'هل يمكن للطلاب المشاركة في الأنشطة الرياضية؟', en: 'Can students participate in sports activities?' },
      answer: {
        ar: 'بالتأكيد، نشجع جميع الطلاب على المشاركة في الأنشطة الرياضية المتنوعة.',
        en: 'Absolutely, we encourage all students to participate in various sports activities.',
      }
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: { ar: 'أحمد محمد', en: 'Ahmed Mohamed' },
      role: { ar: 'طالب - الصف الثالث', en: 'Student - Grade 3' },
      content: {
        ar: 'المدرسة وفرت لي بيئة تعليمية ممتازة ساعدتني على تطوير مهاراتي الأكاديمية والقيادية. المعلمون متميزون والمرافق حديثة.',
        en: 'The school provided me with an excellent learning environment that helped me develop my academic and leadership skills. Teachers are outstanding and facilities are modern.'
      },
      image: ''
    },
    {
      id: '2',
      name: { ar: 'فاطمة حسن', en: 'Fatma Hassan' },
      role: { ar: 'ولية أمر', en: 'Parent' },
      content: {
        ar: 'أنا سعيدة جداً بمستوى التعليم والاهتمام الذي يحصل عليه ابني. المدرسة تهتم بالجانب الأكاديمي والأخلاقي على حد سواء.',
        en: 'I am very pleased with the level of education and attention my son receives. The school cares about both academic and moral aspects equally.'
      },
      image: ''
    },
    {
      id: '3',
      name: { ar: 'د. محمود علي', en: 'Dr. Mahmoud Ali' },
      role: { ar: 'معلم - رياضيات', en: 'Teacher - Mathematics' },
      content: {
        ar: 'العمل في مدرسة الأورمان تجربة رائعة. الإدارة داعمة والطلاب متحمسون للتعلم. أشعر بالفخر لكوني جزء من هذه المؤسسة.',
        en: 'Working at Al-Orman School is a wonderful experience. Management is supportive and students are eager to learn. I am proud to be part of this institution.'
      },
      image: ''
    }
  ];
return (
  <>
    
    <Helmet>
      <title>
        {language === 'ar' ? 'الأسئلة الشائعة - مدرسة الأورمان الثانوية بنين' : 'FAQ - Al-Orman Secondary School for Boys'}
      </title>
      <meta
        name="description"
        content={
          language === 'ar'
            ? 'إجابات على الأسئلة الأكثر شيوعاً حول مدرسة الأورمان الثانوية بنين.'
            : 'Answers to the most common questions about Al-Orman Secondary School for Boys.'
        }
      />
      <meta
        property="og:title"
        content={language === 'ar' ? 'الأسئلة الشائعة - مدرسة الأورمان الثانوية بنين' : 'FAQ - Al-Orman Secondary School for Boys'}
      />
      <meta
        property="og:description"
        content={
          language === 'ar'
            ? 'اكتشف إجابات على الأسئلة الشائعة حول المدرسة، القبول، الرسوم، الأنشطة، والمزيد.'
            : 'Find answers to frequently asked questions about the school, admissions, fees, activities, and more.'
        }
      />
      <meta property="og:image" content="https://orman-sec-boys.vercel.app/Images/Backgrounds/logo.png" />
      <meta property="og:url" content="https://orman-sec-boys.vercel.app/faq" />
    </Helmet>
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* عنوان FAQ */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t('الأسئلة الشائعة', 'Frequently Asked Questions')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('إجابات على الأسئلة الأكثر شيوعاً حول المدرسة', 'Answers to the most common questions about the school')}
          </p>
        </div>

        {/* الأسئلة */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 flex-1">{faq.question[language]}</h3>
                  <ChevronDown className={`w-6 h-6 text-[#0652ba] transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer[language]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">{t('آراء وشهادات', 'Testimonials')}</h2>
            <p className="text-xl text-gray-600">{t('ماذا يقول طلابنا وأولياء الأمور والمعلمون', 'What our students, parents, and teachers say')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative hover:shadow-xl transition-all">
                <Quote className="w-12 h-12 text-[#0652ba] opacity-20 absolute top-4 right-4" />
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonial.image} alt={testimonial.name[language]} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name[language]}</h3>
                    <p className="text-sm text-[#0652ba]">{testimonial.role[language]}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed relative z-10">{testimonial.content[language]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* زر الاتصال */}
        <section className="mt-16 bg-[#0652ba] text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('لديك سؤال آخر؟', 'Have Another Question?')}</h2>
          <p className="text-xl mb-8 opacity-90">{t('لا تتردد في التواصل معنا للحصول على المزيد من المعلومات', 'Feel free to contact us for more information')}</p>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-8 py-3 bg-white text-[#0652ba] rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            {t('اتصل بنا', 'Contact Us')}
          </button>
        </section>
      </div>
    </div>
    </>
  );
};
