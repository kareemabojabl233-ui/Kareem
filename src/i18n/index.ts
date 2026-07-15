import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enTranslations from './locales/en.json'
import arTranslations from './locales/ar.json'
import frTranslations from './locales/fr.json'
import deTranslations from './locales/de.json'
import esTranslations from './locales/es.json'
import itTranslations from './locales/it.json'
import ptTranslations from './locales/pt.json'
import ruTranslations from './locales/ru.json'
import jaTranslations from './locales/ja.json'
import zhTranslations from './locales/zh.json'
import koTranslations from './locales/ko.json'
import trTranslations from './locales/tr.json'
import nlTranslations from './locales/nl.json'
import svTranslations from './locales/sv.json'
import plTranslations from './locales/pl.json'
import elTranslations from './locales/el.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: enTranslations },
      ar: { translation: arTranslations },
      fr: { translation: frTranslations },
      de: { translation: deTranslations },
      es: { translation: esTranslations },
      it: { translation: itTranslations },
      pt: { translation: ptTranslations },
      ru: { translation: ruTranslations },
      ja: { translation: jaTranslations },
      zh: { translation: zhTranslations },
      ko: { translation: koTranslations },
      tr: { translation: trTranslations },
      nl: { translation: nlTranslations },
      sv: { translation: svTranslations },
      pl: { translation: plTranslations },
      el: { translation: elTranslations },
    },
  })

export default i18n
