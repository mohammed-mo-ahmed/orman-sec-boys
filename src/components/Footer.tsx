import { Mail, Phone, MapPin, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[#0c0c14] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t('مدرسة الأورمان الثانوية العسكرية بنين', 'Al-Orman Secondary School for Boys')}
            </h3>
            <p className="text-gray-400 mb-4">
              {t(
                'مؤسسة تعليمية متميزة تجمع بين التعليم الأكاديمي والتدريب العسكري',
                'A distinguished educational institution combining academic education and military training'
              )}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100063944866785"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0652ba] rounded-full flex items-center justify-center hover:bg-[#0652ba]/80 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t('روابط سريعة', 'Quick Links')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => onNavigate('/resources')} className="hover:text-white transition-colors">
                  {t('الموارد التعليمية', 'Learning Resources')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/news')} className="hover:text-white transition-colors">
                  {t('الإعلانات', 'News')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/gallery')} className="hover:text-white transition-colors">
                  {t('المعرض', 'Gallery')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/alumni')} className="hover:text-white transition-colors">
                  {t('الخريجون', 'Alumni')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/faq')} className="hover:text-white transition-colors">
                  {t('الأسئلة الشائعة', 'FAQ & Testimonials')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t('اتصل بنا', 'Contact Us')}</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#0652ba]" />
                <span>{t('3ش المدارس، الدقى، الجيزة، مصر', '3 Madares St., Dokki, Giza, Egypt')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0652ba]" />
                <span dir="ltr">33350503</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0652ba]" />
                <span>orman.sec.boys@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>
            {t(
              '© 2024 مدرسة الأورمان الثانوية العسكرية بنين. جميع الحقوق محفوظة.',
              '© 2024 Al-Orman Secondary School for Boys. All rights reserved.'
            )}
          </p>

<p className="mt-2">
  {language === 'ar' ? (
    <>
      مُطور بواسطة{' '}
      <a
        href="https://api.whatsapp.com/send/?phone=201110008687"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#0652ba] hover:underline"
      >
        محمد محمد يوسف
      </a>
         - طالب بالمدرسة
    </>
  ) : (
    <>
      Developed by{' '}
      <a
        href="https://api.whatsapp.com/send/?phone=201110008687"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#0652ba] hover:underline"
      >
        Mohammed Mohammed Yousuf 
      </a>
       - Student at School
    </>
  )}
</p>

        </div>
      </div>
    </footer>
  );
};
