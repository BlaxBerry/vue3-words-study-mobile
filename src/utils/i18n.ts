import { createI18n } from 'vue-i18n'
import messages from '../lang/index'

const language = localStorage.getItem('lang') || navigator.language || "zh"

const i18n = createI18n({
    // fallbackLocale: "zh",
    // globalInjection: true,
    // legacy: false, // you must specify 'legacy: false' option
    locale: language,
    messages,
});

export default i18n