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
    <nav className="bg-white shadow-pyramid-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/pyramid-logo.png" 
              alt="Three Pyramids Logo" 
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-pyramid-500 hover:text-pyramid-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
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
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-pyramid-500 hover:text-pyramid-300 
                           transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher and CTA (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-pyramid-100 rounded-full p-1">
              <button 
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-full ${
                  i18n.language === 'en' 
                    ? 'bg-pyramid-300 text-white' 
                    : 'text-pyramid-600 hover:bg-pyramid-200'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('ar')}
                className={`px-3 py-1 rounded-full ${
                  i18n.language === 'ar' 
                    ? 'bg-pyramid-300 text-white' 
                    : 'text-pyramid-600 hover:bg-pyramid-200'
                }`}
              >
                AR
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-pyramid-500 hover:text-pyramid-300 
                             transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Language Switcher (Mobile) */}
            <div className="mt-4">
              <div className="flex items-center bg-pyramid-100 rounded-full p-1 w-fit">
                <button 
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1 rounded-full ${
                    i18n.language === 'en' 
                      ? 'bg-pyramid-300 text-white' 
                      : 'text-pyramid-600 hover:bg-pyramid-200'
                  }`}
                >
                  EN
                </button>
                <button 
                  onClick={() => changeLanguage('ar')}
                  className={`px-3 py-1 rounded-full ${
                    i18n.language === 'ar' 
                      ? 'bg-pyramid-300 text-white' 
                      : 'text-pyramid-600 hover:bg-pyramid-200'
                  }`}
                >
                  AR
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}