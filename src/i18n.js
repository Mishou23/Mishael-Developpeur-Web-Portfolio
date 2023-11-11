// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import NavEN from './locales/en/nav/translation.json';
import NavFR from './locales/fr/nav/translation.json';

const resources = {
  en: { translation: NavEN },
  fr: { translation: NavFR }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
