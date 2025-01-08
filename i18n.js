import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import enCommon from './public/locales/en/common.json';
import arCommon from './public/locales/ar/common.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon },
      ar: { common: arCommon }
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    ns: ['common'],
    defaultNS: 'common',
    supportedLngs: ['en', 'ar'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage']
    }
  });

export default i18n;