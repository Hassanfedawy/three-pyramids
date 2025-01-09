"use client"
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { FaTruck, FaHardHat, FaTools } from 'react-icons/fa';

export default function Home() {
  const { t } = useTranslation('common');

  const serviceHighlights = [
    {
      icon: FaTruck,
      title: t('landing.serviceHighlights.0.title'),
      description: t('landing.serviceHighlights.0.description')
    },
    {
      icon: FaHardHat,
      title: t('landing.serviceHighlights.1.title'),
      description: t('landing.serviceHighlights.1.description')
    },
    {
      icon: FaTools,
      title: t('landing.serviceHighlights.2.title'),
      description: t('landing.serviceHighlights.2.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pyramid-50 to-pyramid-100 
                    flex items-center justify-center 
                    relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pyramid-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-pyramid-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 
                      relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:gap-12 
                     bg-white/80 backdrop-blur-sm 
                     rounded-pyramid 
                     shadow-pyramid-medium 
                     p-8 sm:p-12 md:p-16
                     animate-fadeIn">
          {/* Content Section */}
          <div className="space-y-8 text-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl 
                           font-extrabold text-pyramid-800 
                           tracking-tight 
                           leading-tight
                           animate-slideUp">
                {t('landing.title')}
              </h1>
              <h2 className="text-2xl sm:text-3xl text-pyramid-600 
                           font-semibold opacity-90
                           animate-slideUp delay-300">
                {t('landing.subtitle')}
              </h2>
              <p className="text-pyramid-500 leading-relaxed 
                            text-base sm:text-lg 
                            max-w-3xl mx-auto
                            animate-slideUp delay-500">
                {t('landing.description')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row 
                          justify-center 
                          space-y-4 sm:space-y-0 sm:space-x-4
                          animate-slideUp delay-700">
              <Link 
                href="/services"
                className="bg-pyramid-300 text-white 
                           px-8 py-4 rounded-full 
                           hover:bg-pyramid-400 
                           transition-all duration-300 
                           shadow-pyramid-soft 
                           hover:shadow-pyramid-medium 
                           text-lg font-semibold 
                           transform hover:-translate-y-1 
                           inline-block"
              >
                {t('landing.cta')}
              </Link>
              <Link 
                href="/about"
                className="border-2 border-pyramid-300 
                           text-pyramid-600 
                           px-8 py-4 rounded-full 
                           hover:bg-pyramid-100 
                           transition-all duration-300 
                           text-lg font-semibold 
                           transform hover:-translate-y-1 
                           inline-block"
              >
                {t('navbar.about')}
              </Link>
            </div>
          </div>

          {/* Service Highlights */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 
                       border-t border-pyramid-200 pt-12
                       animate-slideUp delay-900"
          >
            {serviceHighlights.map((service, index) => (
              <div 
                key={index} 
                className="text-center space-y-4 
                           transition-all duration-300 
                           hover:scale-105 
                           hover:shadow-pyramid-soft 
                           p-6 rounded-pyramid"
              >
                <div className="flex justify-center mb-4">
                  <service.icon 
                    className="text-5xl text-pyramid-500 
                               transition-colors duration-300 
                               group-hover:text-pyramid-700"
                  />
                </div>
                <h3 className="text-xl font-bold text-pyramid-700 mb-3">
                  {service.title}
                </h3>
                <p className="text-pyramid-500 text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}