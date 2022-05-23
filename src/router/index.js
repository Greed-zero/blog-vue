import VueRouter from "vue-router";
import manage from "@/components/manage"
import home from "@/components/home"
import articles from "@/views/front/home/articles"
import manageHome from "@/views/backend/manageHome"
import createBlog from "@/views/backend/createBlog"
import blogTable from "@/views/backend/blogTable"
import updateBlog from "@/views/backend/updateBlog"
import p from "@/views/front/p/p.vue"
import search from "@/views/front/search/search.vue"
import archives from "@/views/front/archives/archives.vue"
import about from "@/views/front/about/about.vue"
const router = new VueRouter({
    routes:[
        {
            path:'/',
            // redirect:'/manage'
            redirect:'/home'
        },
        {
            path:'/home',
            component:home,
            redirect:'/home/articles',
            children:[
                {
                    path:'articles',
                    component:articles
                },
                {
                    path:'p',
                    component:p
                },
                {
                    path:'search',
                    component:search
                },
                {
                    path:'archives',
                    component:archives
                },
                {
                    path:'about',
                    component:about
                }
            ]
        },
        {
            path:'/manage',
            component:manage,
            redirect:'/manage/manageHome',
            children:[
                {
                    path:'managehome',
                    component:manageHome
                },
                {
                    path:'createBlog',
                    component:createBlog
                },
                {
                    path:'blogTable',
                    component:blogTable
                },
                {
                    path:'updateBlog',
                    component:updateBlog
                }
            ]
        },
    ]
})

export default router