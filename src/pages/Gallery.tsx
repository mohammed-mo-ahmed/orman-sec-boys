import { useState } from 'react';
import { Image, Video, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Gallery = () => {
  const { language, t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

const photos = [
  {
    type: 'image',
    url: '/Images/Gallery/imges/1.jpg',
    title: { ar: 'انتخابات المكتب التنفيذي', en: 'Executive office elections' }
  },
  {
    type: 'image',
    url: '/Images/Gallery/imges/2.jpg',
    title: { ar: 'انتخابات المكتب التنفيذي', en: 'Executive office elections' }
  },
  {
    type: 'image',
    url: '/Images/Gallery/imges/3.jpg',
    title: { ar: 'قاعة المحاضرات', en: 'Lecture Hall' }
  },
  {
    type: 'image',
    url: '/Images/Gallery/imges/4.jpg',
    title: { ar: 'نادي الفنون', en: 'Arts Club' }
  },
  {
    type: 'image',
    url: '/Images/Gallery/imges/12.png',
    title: { ar: 'المكتبة', en: 'Library' }
  },
  {
    type: 'map',
    src: "https://www.google.com/maps/embed?pb=!4v1760612267962!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRG1vSmZfQ0E.!2m2!1d30.03145829373583!2d31.20882287949921!3f300!4f0!5f0.7820865974627469",
    thumbnail: '/Images/Gallery/imges/5.png',
    title: { ar: 'الملعب الرياضي', en: 'Sports Field' }
  },
  {
    type: 'image',
    url: '/Images/Gallery/imges/6.jpg',
    title: { ar: 'نادي الموسيقى', en: 'Music Club' }
  },
  {
    type: 'image',
    url: '/Images/Gallery/imges/7.jpg',
    title: { ar: 'طابور الصباح', en: 'Morning Queue' }
  },
  {
    type: 'image',
    url: '/Images/Gallery/imges/8.jpg',
    title: { ar: '', en: '' }
  },
  {
    type: 'image',
    url: '/Images/Gallery/imges/9.jpg',
    title: { ar: '', en: '' }
  },
  {
    type: 'image',
    url: '/Images/Gallery/imges/10.jpg',
    title: { ar: '', en: '' }
  },
  {
    type: 'image',
    url: '/Images/Gallery/imges/11.jpg',
    title: { ar: '', en: '' }
  }
];

  const videos = [
    {
      thumbnail: '',
      title: { ar: '', en: '' },
      duration: ''
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t('المعرض', 'Gallery')}
          </h1>
          <p className="text-xl text-gray-600">
            {t(
              'استكشف صور وفيديوهات الحياة المدرسية والفعاليات',
              'Explore photos and videos of school life and events'
            )}
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('photos')}
            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'photos'
                ? 'bg-[#0652ba] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Image className="w-5 h-5" />
            {t('الصور', 'Photos')}
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'videos'
                ? 'bg-[#0652ba] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Video className="w-5 h-5" />
            {t('الفيديوهات', 'Videos')}
          </button>
        </div>

        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedItem(item)}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all"
              >
                <img
                  src={item.type === 'image' ? item.url : item.thumbnail}
                  alt={item.title[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold">{item.title[language]}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={video.thumbnail}
                    alt={video.title[language]}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#0652ba] border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{video.title[language]}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedItem && (
          <div
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.url}
                alt="Preview"
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <iframe
                src={selectedItem.src}
                width="90%"
                height="80%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onClick={(e) => e.stopPropagation()}
              ></iframe>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
