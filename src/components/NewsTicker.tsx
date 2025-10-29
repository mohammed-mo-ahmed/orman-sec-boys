import { useEffect, useState } from 'react';
import { Megaphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const NewsTicker = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

 const newsItems = [
  {
    ar: 'اقتراب موعد الأمتحانات الشهرية',
    en: 'The monthly exams are approaching'
  },
  {
    ar: 'التحذير من الغياب - التهديد بالفصل إذا تجاوزت المدة المحددة',
    en: 'Warning of absence - threat of dismissal if the specified period exceeds'
  },
  {
    ar: 'مسابقة جائزة الدولة للمبدع الصغير - اشترك الآن',
    en: 'State Prize Competition for Young Innovator - Subscribe now'
  },
  {
    ar: 'مسابقة القرآن الكريم',
    en: 'Quran Recitation Competition'
  }
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [newsItems.length]);

  return (
    <div className="bg-[#0652ba] text-white py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
        <Megaphone className="w-5 h-5 flex-shrink-0" />
        <div className="flex-1 relative h-6 overflow-hidden">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-500 ${
                index === currentIndex
                  ? 'opacity-100 translate-y-0'
                  : index < currentIndex
                  ? 'opacity-0 -translate-y-6'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              {t(item.ar, item.en)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
