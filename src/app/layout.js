"use client"
import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import i18n from '../../i18n';
import Navbar from '../components/Navbar';
import "./globals.css";

// English Font
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

// Arabic Font
const cairo = localFont({
  src: [
    {
      path: '../fonts/Cairo-Light.ttf',
      weight: '300',
    },
    {
      path: '../fonts/Cairo-Regular.ttf',
      weight: '400',
    },
    {
      path: '../fonts/Cairo-Medium.ttf',
      weight: '500',
    },
    {
      path: '../fonts/Cairo-Bold.ttf',
      weight: '700',
    }
  ],
  variable: '--font-cairo'
});

export default function RootLayout({ children }) {
  const [language, setLanguage] = useState(i18n.language);
  const { i18n: i18nInstance } = useTranslation();

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setLanguage(lng);
      document.documentElement.lang = lng;
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
      document.body.classList.toggle('dir-rtl', lng === 'ar');
      document.body.classList.toggle('dir-ltr', lng === 'en');
      document.body.style.fontFamily = lng === 'ar' 
        ? 'var(--font-cairo), sans-serif' 
        : 'var(--font-roboto), sans-serif';
    };

    i18nInstance.on('languageChanged', handleLanguageChange);
    handleLanguageChange(i18nInstance.language);

    return () => {
      i18nInstance.off('languageChanged', handleLanguageChange);
    };
  }, [i18nInstance]);

  return (
    <html 
      lang={language} 
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      className={`
        ${language === 'ar' ? 'dir-rtl' : 'dir-ltr'} 
        transition-dir 
        ${cairo.variable} 
        ${roboto.variable}
      `}
    >
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body 
        className={`
          ${language === 'ar' ? 'dir-rtl' : 'dir-ltr'} 
          transition-dir 
          ${language === 'ar' ? cairo.className : roboto.className}
          bg-pyramid-50 text-pyramid-900
        `}
      >
        <I18nextProvider i18n={i18n}>
          <div 
            dir={language === 'ar' ? 'rtl' : 'ltr'}
            className="min-h-screen flex flex-col"
          >
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <footer className="bg-pyramid-700 text-pyramid-50 py-6 mt-8">
              <div className="container mx-auto text-center">
                <p>&copy; 2024 Three Pyramids. All Rights Reserved.</p>
              </div>
            </footer>
          </div>
        </I18nextProvider>
      </body>
    </html>
  );
}
