"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    router.replace(pathname, { locale: lng });
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 
                          (navigator.language.startsWith('ar') ? 'ar' : 'en');
    
    if (savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const navItems = [
    { href: '/', label: t('navbar.home') },
    { href: '/about', label: t('navbar.about') },
    { href: '/services', label: t('navbar.services') },
    { href: '/contact', label: t('navbar.contact') }
  ];

  return (
    <nav className="bg-white shadow-pyramid-soft sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-5">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/Images/Logo.jpg" 
              alt="Three Pyramids Logo" 
              className="h-16 sm:h-20 w-auto 
                         transition-transform duration-300 
                         hover:scale-105 
                         hover:brightness-110 
                         active:scale-95 
                         rounded-lg 
                         shadow-sm 
                         hover:shadow-md"
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-pyramid-500 hover:text-pyramid-300 focus:outline-none transition-colors"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-pyramid-500 hover:text-pyramid-300 
                           transition-colors font-medium font-roboto
                           text-base lg:text-lg tracking-wide
                           relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pyramid-300 
                                 transition-all duration-300 
                                 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Language Switcher and CTA (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-pyramid-100 rounded-full p-1">
              <button 
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-full font-roboto font-medium text-sm
                  ${i18n.language === 'en' 
                    ? 'bg-pyramid-300 text-white' 
                    : 'text-pyramid-600 hover:bg-pyramid-200'
                  }`}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('ar')}
                className={`px-3 py-1 rounded-full font-cairo font-medium text-sm
                  ${i18n.language === 'ar' 
                    ? 'bg-pyramid-300 text-white' 
                    : 'text-pyramid-600 hover:bg-pyramid-200'
                  }`}
              >
                AR
              </button>
            </div>
          </div>

          {/* Mobile Menu (Dropdown) */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-pyramid-soft md:hidden">
              <div className="px-4 pt-2 pb-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-pyramid-500 hover:text-pyramid-300 
                               transition-colors font-medium font-roboto
                               text-base tracking-wide"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex justify-center space-x-4 pt-4">
                  <button 
                    onClick={() => changeLanguage('en')}
                    className={`px-3 py-1 rounded-full font-roboto font-medium text-sm
                      ${i18n.language === 'en' 
                        ? 'bg-pyramid-300 text-white' 
                        : 'text-pyramid-600 hover:bg-pyramid-200'
                      }`}
                  >
                    English
                  </button>
                  <button 
                    onClick={() => changeLanguage('ar')}
                    className={`px-3 py-1 rounded-full font-cairo font-medium text-sm
                      ${i18n.language === 'ar' 
                        ? 'bg-pyramid-300 text-white' 
                        : 'text-pyramid-600 hover:bg-pyramid-200'
                      }`}
                  >
                    العربية
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}