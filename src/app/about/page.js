"use client"
import { useTranslation } from 'react-i18next';
import { FaCheckCircle } from 'react-icons/fa';

export default function AboutPage() {
  const { t } = useTranslation('common');

  const companyMilestones = [
    {
      year: t('about.milestones.0.year'),
      event: t('about.milestones.0.event'),
      description: t('about.milestones.0.description'),
      icon: 'foundation'
    },
    {
      year: t('about.milestones.1.year'),
      event: t('about.milestones.1.event'),
      description: t('about.milestones.1.description'),
      icon: 'growth'
    },
    {
      year: t('about.milestones.2.year'),
      event: t('about.milestones.2.event'),
      description: t('about.milestones.2.description'),
      icon: 'innovation'
    },
    {
      year: t('about.milestones.3.year'),
      event: t('about.milestones.3.event'),
      description: t('about.milestones.3.description'),
      icon: 'achievement'
    }
  ];

  const milestoneIcons = {
    foundation: <FaCheckCircle className="text-pyramid-500 w-8 h-8 sm:w-10 sm:h-10" />,
    growth: <FaCheckCircle className="text-pyramid-500 w-8 h-8 sm:w-10 sm:h-10" />,
    innovation: <FaCheckCircle className="text-pyramid-500 w-8 h-8 sm:w-10 sm:h-10" />,
    achievement: <FaCheckCircle className="text-pyramid-500 w-8 h-8 sm:w-10 sm:h-10" />
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pyramid-700 mb-4 sm:mb-6 transition-all duration-500 ease-in-out transform hover:scale-105">
            {t('about.heroTitle')}
          </h1>
          <p className="text-lg sm:text-xl text-pyramid-500 mb-4 sm:mb-6">
            {t('about.heroSubtitle')}
          </p>
          <p className="text-sm sm:text-base text-pyramid-600">
            {t('about.heroDescription')}
          </p>
        </div>
        <div>
          <img 
            src="/construction-materials.jpg" 
            alt="Three Pyramids" 
            className="w-full rounded-pyramid shadow-pyramid-soft transition-all duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
      </section>

      {/* Mission and Values */}
      <section className="bg-pyramid-50 p-6 sm:p-8 md:p-12 rounded-pyramid">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-pyramid-700 mb-4 sm:mb-6 transition-all duration-500 ease-in-out transform hover:scale-105">
            {t('about.missionTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-pyramid-600 mb-4 sm:mb-6">
            {t('about.missionStatement')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {['innovation', 'quality', 'sustainability'].map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-4 sm:p-6 rounded-pyramid shadow-pyramid-soft transition-all duration-500 ease-in-out hover:shadow-pyramid-medium"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-pyramid-600 mb-2 sm:mb-4">
                  {t(`about.values.${value}.title`)}
                </h3>
                <p className="text-sm sm:text-base text-pyramid-500">
                  {t(`about.values.${value}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="bg-white p-6 sm:p-8 md:p-12 rounded-pyramid">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-pyramid-700 text-center mb-4 sm:mb-8 transition-all duration-500 ease-in-out transform hover:scale-105">
            {t('about.milestonesTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-pyramid-600 text-center mb-4 sm:mb-8">
            {t('about.companyDescription')}
          </p>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="bg-pyramid-50 p-6 sm:p-8 md:p-12 rounded-pyramid relative overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-pyramid-700 text-center mb-8 sm:mb-12 transition-all duration-500 ease-in-out transform hover:scale-105">
          {t('about.milestonesTitle')}
        </h2>
        
        {/* Vertical Timeline for Mobile */}
        <div className="block md:hidden space-y-6">
          {companyMilestones.map((milestone, index) => (
            <div 
              key={index}
              className="bg-white p-4 sm:p-6 rounded-pyramid shadow-pyramid-soft relative flex items-center space-x-4 transition-all duration-500 ease-in-out hover:shadow-pyramid-medium"
            >
              <div className="flex-shrink-0">
                {milestoneIcons[milestone.icon]}
              </div>
              <div>
                <div className="text-pyramid-600 font-bold text-xl sm:text-2xl mb-1">
                  {milestone.year}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-pyramid-700 mb-2">
                  {milestone.event}
                </h3>
                <p className="text-sm sm:text-base text-pyramid-500">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal Timeline for Desktop */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-1 bg-pyramid-300 opacity-50"></div>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 relative">
            {companyMilestones.map((milestone, index) => (
              <div 
                key={index}
                className={`
                  bg-white p-4 sm:p-6 rounded-pyramid shadow-pyramid-soft
                  relative z-10 flex items-center space-x-4 transition-all duration-500 ease-in-out hover:shadow-pyramid-medium
                  ${index % 2 === 0 
                    ? 'justify-start text-left' 
                    : 'justify-end text-right col-start-2'}
                `}
              >
                <div className={`
                  absolute top-1/2 transform -translate-y-1/2 
                  w-6 h-6 bg-pyramid-500 rounded-full 
                  ${index % 2 === 0 
                    ? '-left-3' 
                    : '-right-3'}
                `}></div>
                <div className={`
                  flex items-center space-x-4
                  ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
                `}>
                  <div className="flex-shrink-0">
                    {milestoneIcons[milestone.icon]}
                  </div>
                  <div>
                    <div className="text-pyramid-600 font-bold text-xl sm:text-2xl mb-1">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-pyramid-700 mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-sm sm:text-base text-pyramid-500">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}