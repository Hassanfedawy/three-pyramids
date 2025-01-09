"use client"
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    message: '',
    type: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        message: 'Message sent successfully!',
        type: 'success'
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        message: 'Failed to send message. Please try again.',
        type: 'error'
      });
      console.error('Email send error:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h1 className="text-4xl font-bold text-pyramid-700 mb-6">
            {t('contact.title')}
          </h1>
          
          <div className="space-y-4 text-pyramid-600">           
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>{t('contact.address')}</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              {t('contact.phones', { returnObjects: true }).map((phone, index) => (
                <p key={index}>{phone}</p>
              ))}
            </div>
            <div>
              <h3 className="font-semibold">Fax</h3>
              <p>{t('contact.fax')}</p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              {t('contact.emails', { returnObjects: true }).map((email, index) => (
                <p key={index}>{email}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-white p-8 rounded-pyramid shadow-pyramid-soft"
        >
          {status.message && (
            <div 
              className={`mb-4 p-4 rounded ${
                status.type === 'success' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {status.message}
            </div>
          )}

          <div className="mb-4">
            <label 
              htmlFor="name" 
              className="block text-pyramid-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-pyramid-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label 
              htmlFor="email" 
              className="block text-pyramid-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-pyramid-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-6">
            <label 
              htmlFor="message" 
              className="block text-pyramid-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-pyramid-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-pyramid-500 text-white px-6 py-2 rounded-pyramid hover:bg-pyramid-600 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}