import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fa from "./locales/fa.json";
import { LANG } from "core/utils/constants/storage";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(
    {
      resources: {
        "en-US": {
          translation: en,
        },
        "fa-IR": {
          translation: fa,
        },
      },

      fallbackLng: localStorage.getItem(LANG) || "fa-IR",
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    },
    (err) => {
      if (err) return console.log("something went wrong loading i18n", err);
    }
  );

export default i18n;
