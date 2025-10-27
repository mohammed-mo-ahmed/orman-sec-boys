import { NavigationItem } from '../types';

export const navigationItems: NavigationItem[] = [
 
  {
    id: 'about',
    label: { ar: 'عن المدرسة', en: 'About' },
    children: [
      { id: 'overview', label: { ar: 'نظرة عامة', en: 'Overview' }, path: '/about/overview' },
      { id: 'vision', label: { ar: 'الرؤية والرسالة', en: 'Vision & Mission' }, path: '/about/vision' },
      { id: 'history', label: { ar: 'التاريخ', en: 'History' }, path: '/about/history' },
      { id: 'teachers', label: { ar: 'المعلمون', en: 'Teachers' }, path: '/about/teachers' }
    ]
  },
  {
    id: 'extracurricular',
    label: { ar: 'الأنشطة اللامنهجية', en: 'Extracurriculars' },
    children: [
      { id: 'student-union', label: { ar: 'اتحاد الطلاب', en: 'Student Union' }, path: '/extracurricular/student-union' },
      { id: 'clubs', label: { ar: 'النوادي', en: 'Clubs' }, path: '/extracurricular/clubs' },
      { id: 'competitions', label: { ar: 'المسابقات', en: 'Competitions' }, path: '/extracurricular/competitions' },
      { id: 'Al-Orman-Library', label: { ar: 'مكتبة الأورمان', en: 'Al-Orman Library' }, path: '/extracurricular/library' },
      { id: 'achievements', label: { ar: 'الإنجازات', en: 'Achievements' }, path: '/extracurricular/achievements' }
    ]
  },
  {
    id: 'resources',
    label: { ar: 'الموارد التعليمية', en: 'Learning Resources' },
    path: '/resources'
  },
  {
    id: 'news',
    label: { ar: 'الإعلانات', en: 'News' },
    path: '/news'
  },
  {
    id: 'gallery',
    label: { ar: 'المعرض', en: 'Gallery' },
    path: '/gallery'
  },
  {
    id: 'alumni',
    label: { ar: 'الخريجون', en: 'Alumni' },
    path: '/alumni'
  },
  {
    id: 'faq',
    label: { ar: 'الأسئلة الشائعة', en: 'FAQ & Testimonials' },
    path: '/faq'
  },
  {
    id: 'contact',
    label: { ar: 'اتصل بنا', en: 'Contact' },
    path: '/contact'
  }
];
