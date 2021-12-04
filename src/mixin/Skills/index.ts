import { FRONT, BACK, OTHER } from '@/utils/skillsData/index'

// front 
// basic
export const FRONT_TYPE_BASIC = FRONT.filter(item => item.type == "BASIC")
// vue
export const FRONT_TYPE_VUE = FRONT.filter(item => item.type == "VUE")
// react
export const FRONT_TYPE_REACT = FRONT.filter(item => item.type == "REACT")

// back
// lang
export const BACK_TYPE_LANG = BACK.filter(item => item.type == "LANG")
// server
export const BACK_TYPE_SERVER = BACK.filter(item => item.type == "SERVER")
// db
export const BACK_TYPE_DB = BACK.filter(item => item.type == "DB")


// other
// dev tool
export const OTHER_TYPE_DEVTOOL = OTHER.filter(item => item.type == "DEVTOOL")
// api query
export const OTHER_TYPE_APIQUERY = OTHER.filter(item => item.type == "APIQUERY")
// app
export const OTHER_TYPE_APP = OTHER.filter(item => item.type == "APP")


export const mixin_skills = {
    data() {
        return {
            list: {
                FRONT_TYPE_BASIC,
                FRONT_TYPE_VUE,
                FRONT_TYPE_REACT,
                BACK_TYPE_LANG,
                BACK_TYPE_SERVER,
                BACK_TYPE_DB,
                OTHER_TYPE_DEVTOOL,
                OTHER_TYPE_APIQUERY,
                OTHER_TYPE_APP,
            }
        }
    },
}