"use client"
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useState } from 'react';

export default function ServicesPage() {
  const { t } = useTranslation('common');
  const [activeImageIndex, setActiveImageIndex] = useState({});

  const handleImageChange = (serviceIndex, direction) => {
    setActiveImageIndex(prev => {
      const currentService = prev[serviceIndex] || 0;
      const images = serviceDetails[serviceIndex].images;
      
      let newIndex = currentService + direction;
      if (newIndex < 0) newIndex = images.length - 1;
      if (newIndex >= images.length) newIndex = 0;
      
      return {
        ...prev,
        [serviceIndex]: newIndex
      };
    });
  };

  const serviceDetails = [
    {
      title: t('services.servicesList.0.title'),
      description: t('services.servicesList.0.description'),
      details: [
        t('services.servicesList.0.details.0'),
        t('services.servicesList.0.details.1'),
        t('services.servicesList.0.details.2'),
        t('services.servicesList.0.details.3'),
      ],
      images: [
        "/Images/Hafar.jpg",
        "/Images/hafar cat.jpg",
      ],
      fullDescription: t('services.servicesList.0.fullDescription')
    },
    {
      title: t('services.servicesList.1.title'),
      description: t('services.servicesList.1.description'),
      details: [
        t('services.servicesList.1.details.0'),
        t('services.servicesList.1.details.1'),
        t('services.servicesList.1.details.2'),
        t('services.servicesList.1.details.3'),
      ],
      images: [
        "/Images/Range rover.jpg",
        "/Images/Hyundai.jpg"
      ],
      fullDescription: t('services.servicesList.1.fullDescription')
    },
    {
      title: t('services.servicesList.2.title'),
      description: t('services.servicesList.2.description'),
      details: [
        t('services.servicesList.2.details.0'),
        t('services.servicesList.2.details.1'),
        t('services.servicesList.2.details.2'),
        t('services.servicesList.2.details.3'),
      ],
      images: [
        "/Images/Mitsubishi.jpg",
        "/Images/Hyundai.jpg"
      ],
      fullDescription: t('services.servicesList.2.fullDescription')
    }
  ];

  const additionalServices = [
    {
      title: t('services.additionalServices.0.title'),
      description: t('services.additionalServices.0.description'),
      icon: "🛠️"
    },
    {
      title: t('services.additionalServices.1.title'),
      description: t('services.additionalServices.1.description'),
      icon: "📋"
    },
    {
      title: t('services.additionalServices.2.title'),
      description: t('services.additionalServices.2.description'),
      icon: "🎓"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 space-y-12 sm:space-y-16">
      {/* Services Hero */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pyramid-700 mb-4 sm:mb-6">
          {t('services.mainTitle')}
        </h1>
        <p className="text-lg sm:text-xl text-pyramid-500 max-w-3xl mx-auto">
          {t('services.mainDescription')}
        </p>
      </section>

      {/* Main Services Grid */}
      <section className="grid grid-cols-1 gap-12 sm:gap-16">
        {serviceDetails.map((service, index) => (
          <div 
            key={index} 
            className="bg-white rounded-pyramid shadow-pyramid-soft p-6 sm:p-8 hover:shadow-pyramid-medium transition-all"
          >
            {/* Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {service.images.map((image, imgIndex) => (
                <div key={imgIndex} className="overflow-hidden rounded-pyramid">
                  <img 
                    src={image} 
                    alt={`${service.title} - Image ${imgIndex + 1}`} 
                    className="w-full h-48 sm:h-64 object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>

            {/* Service Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-pyramid-700 mb-3 sm:mb-4">
                  {service.title}
                </h2>
                <p className="text-base sm:text-lg text-pyramid-500 mb-4 sm:mb-6">
                  {service.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Key Services */}
                <div className="bg-pyramid-50 p-4 sm:p-6 rounded-pyramid">
                  <h3 className="text-xl sm:text-2xl font-semibold text-pyramid-600 mb-3 sm:mb-4">
                    {t('services.keyServices')}
                  </h3>
                  <ul className="list-disc list-inside text-base sm:text-lg text-pyramid-500 space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>

                {/* Service Scope */}
                <div className="bg-pyramid-100 p-4 sm:p-6 rounded-pyramid">
                  <h3 className="text-xl sm:text-2xl font-semibold text-pyramid-700 mb-3 sm:mb-4">
                    {t('services.serviceScope')}
                  </h3>
                  <p className="text-base sm:text-lg text-pyramid-600">
                    {service.fullDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Equipment and Fleet Section */}
      <section className="bg-pyramid-50 p-8 sm:p-12 md:p-16 rounded-pyramid mt-12 sm:mt-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-pyramid-700">
            Our Equipment and Fleet
          </h2>
          <p className="text-lg sm:text-xl text-pyramid-500 mt-3 sm:mt-4">
            A comprehensive look at our state-of-the-art vehicles and equipment
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { 
              name: t('services.equipmentAndFleet.0.name'), 
              image: "/Images/Hafar.jpg",
              description: t('services.equipmentAndFleet.0.description')
            },
            { 
              name: t('services.equipmentAndFleet.1.name'), 
              image: "/Images/Range rover.jpg",
              description: t('services.equipmentAndFleet.1.description')
            },
            { 
              name: t('services.equipmentAndFleet.2.name'), 
              image: "/Images/na2l.jpg",
              description: t('services.equipmentAndFleet.2.description')
            }
          ].map((equipment, index) => (
            <div 
              key={index} 
              className="bg-white p-6 sm:p-8 rounded-pyramid shadow-pyramid-soft"
            >
              <div className="mb-4 sm:mb-6">
                <img 
                  src={equipment.image} 
                  alt={equipment.name} 
                  className="w-full h-48 object-cover rounded-pyramid"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-pyramid-700 mb-3">
                {equipment.name}
              </h3>
              <p className="text-base text-pyramid-500">
                {equipment.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-pyramid-50 p-8 sm:p-12 rounded-pyramid">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-pyramid-700">
            {t('services.additionalServicesTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-pyramid-500 mt-3 sm:mt-4">
            {t('services.additionalServicesDescription')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {additionalServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 sm:p-8 rounded-pyramid shadow-pyramid-soft text-center"
            >
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-pyramid-700 mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-pyramid-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="bg-pyramid-600 text-white p-8 sm:p-12 md:p-16 rounded-pyramid">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            {t('services.clientTestimonialsTitle')}
          </h2>
          <p className="text-lg sm:text-xl">
            {t('services.clientTestimonialsDescription')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              name: t('services.clientTestimonials.0.name'),
              quote: t('services.clientTestimonials.0.quote'),
              logo: "/images/ge-logo.png"
            },
            {
              name: t('services.clientTestimonials.1.name'),
              quote: t('services.clientTestimonials.1.quote'),
              logo: "/images/novabeni-logo.png"
            },
            {
              name: t('services.clientTestimonials.2.name'),
              quote: t('services.clientTestimonials.2.quote'),
              logo: "/images/lng-logo.png"
            }
          ].map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 p-4 sm:p-6 rounded-pyramid"
            >
              <p className="italic text-base sm:text-lg mb-3 sm:mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <span className="font-bold text-white">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-pyramid-700 text-white p-8 sm:p-12 md:p-16 rounded-pyramid">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
          {t('services.callToActionTitle')}
        </h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8">
          {t('services.callToActionDescription')}
        </p>
        <div className="flex justify-center">
          <Link 
            href="/contact"
            className="inline-block bg-white text-pyramid-700 hover:bg-pyramid-100 
                       text-nowrap mx-auto px-5 sm:px-10 py-3 sm:py-4 
                       rounded-full font-bold text-lg sm:text-xl 
                       transition-colors shadow-pyramid-soft hover:shadow-pyramid-medium"
          >
            {t('services.callToActionButton')}
          </Link>
        </div>
      </section>
    </div>
  );
}