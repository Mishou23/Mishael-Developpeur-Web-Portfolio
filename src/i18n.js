// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import EN from "./locales/en/translation.json";
import FR from "./locales/fr/translation.json";

const resources = {
  en: { translation: EN },
  fr: { translation: FR },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
