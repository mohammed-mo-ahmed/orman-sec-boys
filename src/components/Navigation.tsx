import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { navigationItems } from '../data/navigation';
import { NavigationItem } from '../types';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement | null>(null);

  
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderNavItem = (item: NavigationItem, isMobile = false) => {
    const baseClasses = `
      flex items-center w-full px-5 py-2 
      text-sm lg:text-base font-semibold tracking-wide 
      transition-colors select-none
    `;

    if (item.children) {
      return (
        <div key={item.id} className={`relative ${!isMobile ? 'group' : ''}`}>
          <button
            onClick={() => {
              if (isMobile) setOpenDropdown(prev => (prev === item.id ? null : item.id));
            }}
            className={`
              ${baseClasses} 
              ${language === 'ar' ? 'text-right flex-row-reverse' : 'text-left'}
              rounded-md hover:bg-white/20 focus:bg-white/25
              ${!isMobile ? 'justify-center text-center' : 'justify-between'}
            `}
            style={{ minHeight: '50px' }}
          >
            <span
              className={`flex-1 ${
                !isMobile ? 'text-center break-words whitespace-normal leading-tight' : ''
              }`}
            >
              {item.label[language]}
            </span>

            <ChevronDown
              className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 
                ${
                  openDropdown === item.id
                    ? 'rotate-180'
                    : !isMobile
                    ? 'group-hover:rotate-180'
                    : ''
                }`}
            />
          </button>

          <div
            className={`${
              isMobile
                ? `overflow-hidden transition-all duration-300 ${
                    openDropdown === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`
                : 'absolute top-full left-0 mt-1 hidden group-hover:block'
            } bg-[#0652ba] rounded-md shadow-lg py-2 min-w-[200px] z-50`}
          >
            {item.children.map((child) => (
              <NavLink
                key={child.id}
                to={child.path!}
                onClick={() => {
                  if (isMobile) setMobileMenuOpen(false);
                  setOpenDropdown(null);
                }}
                className={({ isActive }) =>
                  `${baseClasses} ${
                    isActive ? 'bg-white/25' : 'hover:bg-white/20'
                  } text-${language === 'ar' ? 'right' : 'left'} rounded-none`
                }
                style={{ minHeight: '50px' }}
              >
                {child.label[language]}
              </NavLink>
            ))}
          </div>
        </div>
      );
    }

    return (
      <NavLink
        key={item.id}
        to={item.path!}
        onClick={() => {
          if (isMobile) setMobileMenuOpen(false);
          setOpenDropdown(null);
        }}
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? 'bg-white/25' : 'hover:bg-white/20'} rounded-md ${
            !isMobile ? 'justify-center text-center' : ''
          }`
        }
        style={{ minHeight: '50px' }}
      >
        <span
          className={`block w-full ${
            !isMobile ? 'text-center break-words whitespace-normal leading-tight' : ''
          }`}
        >
          {item.label[language]}
        </span>
      </NavLink>
    );
  };

  return (
    <nav
      ref={navRef}
      className={`bg-[#0652ba] text-white shadow-lg sticky top-0 z-50 ${
        language === 'ar' ? 'text-right' : 'text-left'
      } font-[Cairo]`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16 justify-between">
          <Link to="/" className="w-40 sm:w-48 md:w-56 lg:w-60 h-auto">
            <img
              src={
                language === 'ar'
                  ? '/Images/Backgrounds/logo-ar.png'
                  : '/Images/Backgrounds/logo-en.png'
              }
              alt={language === 'ar' ? 'الشعار' : 'Logo'}
              className="w-full h-full object-contain"
            />
          </Link>

          
          <div className="hidden lg:flex items-center gap-2">
            {navigationItems.map((item) => renderNavItem(item))}

            <button
              onClick={toggleLanguage}
              className="ml-4 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/25 transition-colors flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
          </div>

          
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 bg-white/10 rounded-lg hover:bg-white/25 transition-colors flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen((s) => !s)}
              className="p-2 rounded-lg hover:bg-white/25 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-1">
            {navigationItems.map((item) => renderNavItem(item, true))}
          </div>
        )}
      </div>
    </nav>
  );
};
