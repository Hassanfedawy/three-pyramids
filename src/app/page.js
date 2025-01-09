"use client"
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaTruck, FaHardHat, FaTools, FaAward, FaGlobe, FaHandshake, 
  FaBuilding, FaIndustry, FaProjectDiagram,
  FaUsers, FaChartLine, FaLeaf, FaCertificate, FaGavel 
} from 'react-icons/fa';

export default function Home() {
  const { t } = useTranslation('common');

  const serviceHighlights = [
    {
      icon: FaTruck,
      title: t('landing.serviceHighlights.0.title'),
      description: t('landing.serviceHighlights.0.description'),
      image: '/images/na2l.jpg'
    },
    {
      icon: FaHardHat,
      title: t('landing.serviceHighlights.1.title'),
      description: t('landing.serviceHighlights.1.description'),
      image: '/images/Construction Site.jpeg'
    },
    {
      icon: FaTools,
      title: t('landing.serviceHighlights.2.title'),
      description: t('landing.serviceHighlights.2.description'),
      image: '/images/Hafar.jpg'
    }
  ];

  const companyFeatures = [
    {
      icon: FaAward,
      title: t('landing.features.0.title'),
      description: t('landing.features.0.description')
    },
    {
      icon: FaGlobe,
      title: t('landing.features.1.title'),
      description: t('landing.features.1.description')
    },
    {
      icon: FaHandshake,
      title: t('landing.features.2.title'),
      description: t('landing.features.2.description')
    }
  ];

  const projectTypes = [
    {
      icon: FaBuilding,
      title: t('landing.projectTypes.0.title'),
      description: t('landing.projectTypes.0.description')
    },
    {
      icon: FaIndustry,
      title: t('landing.projectTypes.1.title'),
      description: t('landing.projectTypes.1.description')
    },
    {
      icon: FaProjectDiagram,
      title: t('landing.projectTypes.2.title'),
      description: t('landing.projectTypes.2.description')
    }
  ];

  const services = [
    {
      icon: FaTruck,
      title: t('landing.services.0.title'),
      description: t('landing.services.0.description'),
      image: '/images/na2l.jpg'
    },
    {
      icon: FaHardHat,
      title: t('landing.services.1.title'),
      description: t('landing.services.1.description'),
      image: '/images/Construction Site.jpeg'
    },
    {
      icon: FaTools,
      title: t('landing.services.2.title'),
      description: t('landing.services.2.description'),
      image: '/images/Hafar.jpg'
    },
  ];

  const companyStrengths = [
    {
      icon: FaUsers,
      title: t('landing.strengths.0.title'),
      description: t('landing.strengths.0.description')
    },
    {
      icon: FaChartLine,
      title: t('landing.strengths.1.title'),
      description: t('landing.strengths.1.description')
    },
    {
      icon: FaLeaf,
      title: t('landing.strengths.2.title'),
      description: t('landing.strengths.2.description')
    },
    {
      icon: FaCertificate,
      title: t('landing.strengths.3.title'),
      description: t('landing.strengths.3.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pyramid-50 to-pyramid-100 
                    flex flex-col items-center justify-center 
                    relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pyramid-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-pyramid-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 
                      relative z-10 max-w-6xl space-y-16">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center 
                     bg-white/80 backdrop-blur-sm 
                     rounded-pyramid 
                     shadow-pyramid-medium 
                     p-8 sm:p-12 md:p-16
                     animate-fadeIn">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl 
                           font-extrabold text-pyramid-800 
                           tracking-tight 
                           leading-tight
                           animate-slideUp">
              {t('landing.heroTitle')}
            </h1>
            <h2 className="text-2xl sm:text-3xl text-pyramid-600 
                           font-semibold opacity-90
                           animate-slideUp delay-300">
              {t('landing.heroSubtitle')}
            </h2>
            <p className="text-pyramid-500 leading-relaxed 
                          text-base sm:text-lg 
                          max-w-3xl
                          animate-slideUp delay-500">
              {t('landing.heroDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row 
                          justify-center md:justify-start
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
                {t('landing.ctaSection.button')}
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
          
          <div className="relative group">
            <div className="grid grid-cols-2 gap-4">
              {serviceHighlights.map((service, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden rounded-pyramid shadow-pyramid-soft 
                             transform transition-all duration-300 
                             hover:scale-105 hover:shadow-pyramid-medium"
                >
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-contain bg-white"
                    priority={index === 0}
                  />
                  <div className="absolute bottom-0 left-0 right-0 
                                  bg-black/50 text-white 
                                  p-3 text-center">
                    <h3 className="text-sm font-semibold">{service.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Features Section */}
        <div className="bg-white/80 backdrop-blur-sm 
                       rounded-pyramid 
                       shadow-pyramid-medium 
                       p-8 sm:p-12 md:p-16
                       animate-slideUp">
          <h2 className="text-3xl sm:text-4xl text-center 
                         font-bold text-pyramid-800 mb-12">
            {t('landing.featuresSection.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {companyFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="text-center space-y-6 
                           transition-all duration-300 
                           hover:scale-105 
                           hover:shadow-pyramid-soft 
                           p-6 rounded-pyramid"
              >
                <div className="flex justify-center mb-4">
                  <feature.icon 
                    className="text-6xl text-pyramid-500 
                               transition-colors duration-300 
                               group-hover:text-pyramid-700"
                  />
                </div>
                <h3 className="text-xl font-bold text-pyramid-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-pyramid-500 text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Types Section */}
        <div className="bg-white/80 backdrop-blur-sm 
                       rounded-pyramid 
                       shadow-pyramid-medium 
                       p-8 sm:p-12 md:p-16
                       animate-slideUp">
          <h2 className="text-3xl sm:text-4xl text-center 
                         font-bold text-pyramid-800 mb-12">
            {t('landing.projectTypesSection.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <div 
                key={index} 
                className="text-center space-y-6 
                           transition-all duration-300 
                           hover:scale-105 
                           hover:shadow-pyramid-soft 
                           p-6 rounded-pyramid"
              >
                <div className="flex justify-center mb-4">
                  <project.icon 
                    className="text-6xl text-pyramid-500 
                               transition-colors duration-300 
                               group-hover:text-pyramid-700"
                  />
                </div>
                <h3 className="text-xl font-bold text-pyramid-700 mb-3">
                  {project.title}
                </h3>
                <p className="text-pyramid-500 text-base">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white/80 backdrop-blur-sm 
                       rounded-pyramid 
                       shadow-pyramid-medium 
                       p-8 sm:p-12 md:p-16
                       animate-slideUp">
          <h2 className="text-3xl sm:text-4xl text-center 
                         font-bold text-pyramid-800 mb-12">
            {t('landing.servicesSection.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-pyramid 
                           shadow-pyramid-soft 
                           overflow-hidden
                           transition-all duration-300 
                           hover:scale-105 
                           hover:shadow-pyramid-medium"
              >
                <div className="h-48 relative">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-pyramid-700 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-pyramid-500 text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Strengths Section */}
        <div className="bg-pyramid-50 
                       rounded-pyramid 
                       shadow-pyramid-medium 
                       p-8 sm:p-12 md:p-16
                       animate-slideUp">
          <h2 className="text-3xl sm:text-4xl text-center 
                         font-bold text-pyramid-800 mb-12">
            {t('landing.strengthsSection.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {companyStrengths.map((strength, index) => (
              <div 
                key={index} 
                className="text-center space-y-6 
                           bg-white 
                           rounded-pyramid 
                           p-6 
                           shadow-pyramid-soft
                           transition-all duration-300 
                           hover:scale-105 
                           hover:shadow-pyramid-medium"
              >
                <div className="flex justify-center mb-4">
                  <strength.icon 
                    className="text-6xl text-pyramid-500 
                               transition-colors duration-300 
                               group-hover:text-pyramid-700"
                  />
                </div>
                <h3 className="text-xl font-bold text-pyramid-700 mb-3">
                  {strength.title}
                </h3>
                <p className="text-pyramid-500 text-base">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-pyramid-300 text-white 
                       rounded-pyramid 
                       shadow-pyramid-medium 
                       p-8 sm:p-12 md:p-16
                       text-center
                       animate-slideUp">
          <h2 className="text-3xl sm:text-4xl 
                         font-bold mb-6">
            {t('landing.ctaSection.title')}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('landing.ctaSection.description')}
          </p>
          <Link 
            href="/contact"
            className="bg-white text-pyramid-700 
                       px-10 py-4 rounded-full 
                       hover:bg-pyramid-50 
                       transition-all duration-300 
                       text-lg font-semibold 
                       shadow-pyramid-medium
                       transform hover:-translate-y-1 
                       inline-block"
          >
            {t('landing.ctaSection.button')}
          </Link>
        </div>
      </div>
    </div>
  );
}