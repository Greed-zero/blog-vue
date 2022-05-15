import VueRouter from "vue-router";
import manage from "@/components/manage"
import home from "@/components/home"
import articles from "@/views/front/home/articles"
import manageHome from "@/views/backend/manageHome"
import createBlog from "@/views/backend/createBlog"
import blogTable from "@/views/backend/blogTable"
import updateBlog from "@/views/backend/updateBlog"
const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/manage'
            // redirect:'/home'
        },
        {
            path:'/home',
            component:home,
            redirect:'/home/articles',
            children:[
                {
                    path:'articles',
                    component:articles
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