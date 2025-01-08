"use client"
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
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
  useEffect(() => {
    // Initialize i18n and set initial language
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
    
    // Set initial document direction and language
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = savedLanguage;
  }, []);

 
  return (
    <html 
      lang="en" 
      className={`${roboto.variable} ${cairo.variable}`}
    >
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body 
        className={`
          ${i18n.language === 'en' ? 'font-roboto' : 'font-cairo'}
          bg-pyramid-50 text-pyramid-900
        `}
      >
        <I18nextProvider i18n={i18n}>
          <div 
            dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
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
