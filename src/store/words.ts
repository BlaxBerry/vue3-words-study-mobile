import { defineStore } from "pinia";

export const useWordsStore = defineStore("wordsStore", {
    state: () => {
        return {
            WordsList: {
                length: 0
            }
        };
    },

    getters: {},
    actions: {
        updateWordsListLength(length: number) {
            this.WordsList.length = length
        },
    },
});