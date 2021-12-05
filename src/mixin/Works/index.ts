import { PC, MOBILE } from '@/utils/worksData/index'

export const mixin_works = {
    data(): unknown {
        return {
            tabs: ["PC", "Mobile"],
            tabItems: [
                {
                    name: "PC Works",
                    content: [PC],
                },
                {
                    name: "Mobile Works",
                    content: [MOBILE],
                },
            ]
        }
    }
}
