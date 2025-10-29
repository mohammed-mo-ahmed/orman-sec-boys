export type Language = 'ar' | 'en';

export interface NavigationItem {
  id: string;
  label: { ar: string; en: string };
  path?: string;
  children?: NavigationItem[];
}

export interface Teacher {
  name: { ar: string; en: string };
  subject: { ar: string; en: string };
  image: string;
}

export interface NewsItem {
  id: string;
  title: { ar: string; en: string };
  date: string;
  content: { ar: string; en: string };
  image: string;
  link: string;
}



export interface Testimonial {
  id: string;
  name: { ar: string; en: string };
  role: { ar: string; en: string };
  content: { ar: string; en: string };
  image: string;
}

export interface AlumniStory {
  id: string;
  name: { ar: string; en: string };
  achievement: { ar: string; en: string };
  image: string;
  link: { ar: string; en: string }; 
}
