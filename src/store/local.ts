import { defineStore } from "pinia";
// element plus 翻译文本对象
import zh from "element-plus/lib/locale/lang/zh-cn";
import ja from "element-plus/lib/locale/lang/ja";
import en from "element-plus/lib/locale/lang/en";

export const useLocalStore = defineStore("localStore", {
    state: () => {
        return {
            language: localStorage.getItem('lang') || "zh",
            theme: "light",
            isDarkTheme: false
        };
    },

    getters: {
        // elemebt plus 
        elementPlusConfigProviderLocal(state) {
            switch (state.language) {
                case "zh": return zh
                case "en": return en
                case "ja": return ja
                default: return zh
            }
        }
    },
    actions: {
        changLanguage(lang: string) {
            this.language = lang
            localStorage.setItem("lang", this.language);
        },
        toggleTheme() {
            if (this.isDarkTheme) {
                this.theme = "dark"
            } else {
                this.theme = "light"
            }
            this.isDarkTheme = !this.isDarkTheme
        }
    },
});