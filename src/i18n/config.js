import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ar from './locales/ar.json'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import de from './locales/de.json'
import it from './locales/it.json'
import pt from './locales/pt.json'
import ru from './locales/ru.json'
import ja from './locales/ja.json'
import zh from './locales/zh.json'
import ko from './locales/ko.json'
import tr from './locales/tr.json'
import nl from './locales/nl.json'
import sv from './locales/sv.json'
import pl from './locales/pl.json'
import el from './locales/el.json'

const resources = {
  ar: { translation: ar },
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  de: { translation: de },
  it: { translation: it },
  pt: { translation: pt },
  ru: { translation: ru },
  ja: { translation: ja },
  zh: { translation: zh },
  ko: { translation: ko },
  tr: { translation: tr },
  nl: { translation: nl },
  sv: { translation: sv },
  pl: { translation: pl },
  el: { translation: el },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'ar',
  fallbackLng: 'ar',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
