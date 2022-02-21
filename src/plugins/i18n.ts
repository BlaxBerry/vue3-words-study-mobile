import { createI18n } from 'vue-i18n'
import messages from '../lang/index'

const setLanguage = () => {
    // step1. localstorage存入的当前语言
    const localStorageLanguage = localStorage.getItem('lang')
    if (localStorageLanguage) {
        return localStorageLanguage
    }
    // step2. 获取浏览器系统语言
    // 若message里面有系统语言则返回
    const browserlanguage = navigator.language.toLowerCase()
    for (const l of Object.keys(messages)) {
        if (browserlanguage.indexOf(l) > -1) {
            return l
        }
    }
    // step3. 默认语言中文
    return 'zh'
}

const i18n = createI18n({
    // fallbackLocale: "zh",
    // globalInjection: true,
    // legacy: false, // you must specify 'legacy: false' option
    locale: setLanguage(),
    messages,
});

export default i18n