import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.js';
import nl from './locales/nl.js';
import fr from './locales/fr.js';
import de from './locales/de.js';
import es from './locales/es.js';

const resources = {
  en,
  nl,
  fr,
  de,
  es,
};

const storedLanguage = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: storedLanguage || 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18next;
