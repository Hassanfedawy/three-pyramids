"use client"
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-pyramid-50">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pyramid-700">
              {t('landing.title')}
            </h1>
            <h2 className="text-xl sm:text-2xl text-pyramid-600">
              {t('landing.subtitle')}
            </h2>
            <p className="text-pyramid-500 leading-relaxed text-sm sm:text-base">
              {t('landing.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/services"
                className="bg-pyramid-300 text-white px-6 py-3 rounded-pyramid 
                           hover:bg-pyramid-400 transition-pyramid 
                           shadow-pyramid-soft hover:shadow-pyramid-medium
                           text-center sm:text-left"
              >
                {t('landing.cta')}
              </Link>
              <Link 
                href="/about"
                className="border border-pyramid-300 text-pyramid-600 px-6 py-3 
                           rounded-pyramid hover:bg-pyramid-100 
                           transition-pyramid text-center sm:text-left"
              >
                {t('navbar.about')}
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:block">
            <img 
              src="/construction-materials.jpg" 
              alt="Construction Materials"
              className="w-full h-auto rounded-pyramid 
                         shadow-pyramid-strong 
                         transform hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
}