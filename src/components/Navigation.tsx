import { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { navigationItems } from '../data/navigation';
import { NavigationItem } from '../types';

interface NavigationProps {
  currentPage: string;
  onNavigate: (path: string) => void;
}

export const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleNavigate = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const renderNavItem = (item: NavigationItem, isMobile = false) => {
    if (item.children) {
      return (
        <div key={item.id} className="relative group">
          <button
            onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
              isMobile ? 'w-full text-right justify-between' : ''
            } hover:bg-white/10`}
          >
            <span>{item.label[language]}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.id ? 'rotate-180' : ''}`} />
          </button>
          {(openDropdown === item.id || (!isMobile && false)) && (
            <div className={`${isMobile ? 'relative' : 'absolute top-full left-0 mt-1'} bg-[#0652ba] rounded-lg shadow-lg py-2 min-w-[200px] ${!isMobile && 'hidden group-hover:block'}`}>
              {item.children.map(child => (
                <button
                  key={child.id}
                  onClick={() => child.path && handleNavigate(child.path)}
                  className={`w-full text-${language === 'ar' ? 'right' : 'left'} px-4 py-2 hover:bg-white/10 transition-colors ${
                    currentPage === child.path ? 'bg-white/20' : ''
                  }`}
                >
                  {child.label[language]}
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <button
        key={item.id}
        onClick={() => item.path && handleNavigate(item.path)}
        className={`px-4 py-2 rounded-lg transition-colors ${
          currentPage === item.path ? 'bg-white/20' : 'hover:bg-white/10'
        } ${isMobile ? 'w-full text-right' : ''}`}
      >
        {item.label[language]}
      </button>
    );
  };

  return (
    <nav className="bg-[#0652ba] text-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center h-16 justify-between w-full">
      {/* اللوجو كرابط للصفحة الرئيسية */}
<div className="w-40 sm:w-48 md:w-56 lg:w-60 h-auto cursor-pointer" onClick={() => handleNavigate('/')}>
  <img
    src={language === 'ar' ? '/Images/Backgrounds/logo-ar.png' : '/Images/Backgrounds/logo-en.png'}
    alt={language === 'ar' ? 'الشعار' : 'Logo'}
    className="w-full h-full object-contain transition-opacity duration-300 opacity-100"
  />
</div>


      {/* قائمة التنقل للـ Desktop */}
      <div className="hidden lg:flex items-center gap-2">
        {navigationItems.map(item => renderNavItem(item))}
        <button
          onClick={toggleLanguage}
          className="ml-4 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
        >
          <Globe className="w-4 h-4" />
          <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
        </button>
      </div>

      {/* أيقونات الموبايل */}
      <div className="lg:hidden flex items-center gap-2">
        <button
          onClick={toggleLanguage}
          className="px-3 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
        >
          <Globe className="w-4 h-4" />
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>

    {/* قائمة الموبايل */}
    {mobileMenuOpen && (
      <div className="lg:hidden pb-4 space-y-1">
        {navigationItems.map(item => renderNavItem(item, true))}
      </div>
    )}
  </div>
</nav>

  );
};
