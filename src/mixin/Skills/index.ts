import { FRONT, BACK, OTHER } from '@/utils/skillsData/index'

// front 
// basic
export const FRONT_TYPE_BASIC = FRONT.filter(item => item.type == "BASIC" && item.showAsMain)
// vue
export const FRONT_TYPE_VUE = FRONT.filter(item => item.type == "VUE" && item.showAsMain)
// react
export const FRONT_TYPE_REACT = FRONT.filter(item => item.type == "REACT" && item.showAsMain)

// back
// lang
export const BACK_TYPE_LANG = BACK.filter(item => item.type == "LANG" && item.showAsMain)
// server
export const BACK_TYPE_SERVER = BACK.filter(item => item.type == "SERVER" && item.showAsMain)
// db
export const BACK_TYPE_DB = BACK.filter(item => item.type == "DB" && item.showAsMain)


// other
// dev tool
export const OTHER_TYPE_DEVTOOL = OTHER.filter(item => item.type == "DEVTOOL" && item.showAsMain)
// api query
export const OTHER_TYPE_APIQUERY = OTHER.filter(item => item.type == "APIQUERY" && item.showAsMain)
// app
export const OTHER_TYPE_APP = OTHER.filter(item => item.type == "APP" && item.showAsMain)


export const mixin_skills = {
    data(): unknown {
        return {
            tabs: ["Front", "Back", "Others"],
            tabItems: [
                {
                    name: "Front Skills",
                    content: [
                        FRONT_TYPE_BASIC,
                        FRONT_TYPE_VUE,
                        FRONT_TYPE_REACT
                    ],
                },
                {
                    name: "Back Skills",
                    content: [
                        BACK_TYPE_LANG,
                        BACK_TYPE_SERVER,
                        BACK_TYPE_DB
                    ],
                },
                {
                    name: "Other Skills",
                    content: [
                        OTHER_TYPE_DEVTOOL,
                        OTHER_TYPE_APIQUERY,
                        OTHER_TYPE_APP
                    ],
                },
            ],
        }
    },
}