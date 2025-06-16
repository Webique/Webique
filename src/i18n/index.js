// src/i18n/index.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ar from "./ar.json";

const savedLang = localStorage.getItem("i18nLang") || "en"; // ✅ Retrieve saved language

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar }
  },
  lng: savedLang, // ✅ Use persisted language
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
