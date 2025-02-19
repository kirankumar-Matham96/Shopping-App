import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import languages from "./locales/languages.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: Object.keys(languages).reduce((acc, lang) => {
      acc[lang] = {
        translation: languages[lang],
      };
      return acc;
    }, {}),
    lng: localStorage.getItem("language") || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
