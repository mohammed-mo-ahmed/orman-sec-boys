import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const Contact = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('شكراً لتواصلك معنا! سنرد عليك قريباً.', 'Thank you for contacting us! We will reply soon.'));
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

 
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>
          {language === 'ar'
            ? 'اتصل بنا - مدرسة الأورمان الثانوية بنين'
            : 'Contact Us - Al-Orman Secondary School for Boys'}
        </title>

        <meta
          name="description"
          content={
            language === 'ar'
              ? 'تواصل مع مدرسة الأورمان الثانوية بنين عبر الهاتف أو البريد الإلكتروني أو زيارتنا في الدقي، الجيزة.'
              : 'Contact Al-Orman Secondary School for Boys via phone, email, or visit us in Dokki, Giza.'
          }
        />

        <meta
          name="keywords"
          content={
            language === 'ar'
              ? 'مدرسة الأورمان, اتصل بنا, مدرسة الدقي, تعليم ثانوي, مدرسة ثانوي, مدرسة الأورمان الثانوية بنين, تواصل, بريد إلكتروني, رقم الهاتف'
              : 'Al Orman School, Contact Us, High School, Secondary, Dokki, Giza, Egypt, Email, Phone'
          }
        />

        <meta name="author" content="Al-Orman Secondary School for Boys" />

        <meta
          property="og:title"
          content={
            language === 'ar'
              ? 'اتصل بنا - مدرسة الأورمان الثانوية بنين'
              : 'Contact Us - Al-Orman Secondary School for Boys'
          }
        />

        <meta
          property="og:description"
          content={
            language === 'ar'
              ? 'ابقَ على تواصل مع مدرسة الأورمان الثانوية بنين للحصول على المساعدة أو الاستفسارات.'
              : 'Stay in touch with Al-Orman Secondary School for Boys for support or inquiries.'
          }
        />

        <meta
          property="og:image"
          content="https://orman-sec-boys.vercel.app/Images/Backgrounds/logo.png"
        />
        <meta
          property="og:url"
          content="https://orman-sec-boys.vercel.app/contact"
        />
      </Helmet>
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t('اتصل بنا', 'Contact Us')}
          </h1>
          <p className="text-xl text-gray-600">
            {t(
              'نحن هنا للإجابة على أسئلتك ومساعدتك',
              'We are here to answer your questions and help you'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">{t('معلومات التواصل', 'Contact Information')}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0652ba] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t('العنوان', 'Address')}</h3>
                  <p className="text-gray-600">
                    {t(
                      '3ش المدارس، الدقى، الجيزة، مصر',
                      '3 Madares St., Dokki, Giza, Egypt'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0652ba] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t('الهاتف', 'Phone')}</h3>
                  <p className="text-gray-600" dir="ltr">33350503</p>

                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0652ba] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t('البريد الإلكتروني', 'Email')}</h3>
                  <p className="text-gray-600">orman.sec.boys@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0652ba] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t('ساعات العمل', 'Working Hours')}</h3>
                  <p className="text-gray-600">
                    {t('الأحد - الخميس : 8:00 ص - 2:00 م', 'Sunday - Thursday: 8:00 AM - 2:00 PM')}
                  </p>
                  <p className="text-gray-600">
                    {t('الجمعة والسبت : مغلق', 'Frida and Saturday : Closed')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
  <div className="aspect-video w-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1234567890123!2d31.2088227!3d30.031471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846d0f2f8bc57%3A0x1fc6282cc4517f94!2sAl-Orman%20School!5e0!3m2!1sar!2seg!4v1700000000000!5m2!1sar!2seg"
      className="w-full h-full"
      width="400" height="300"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      title={t('موقع المدرسة', 'School Location')}
    />
  </div>
</div>

      </div>
    </div>
    </>
  );
};

