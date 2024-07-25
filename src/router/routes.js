// 组件懒加载
import { lazy } from 'react'
// 引入首页组件，不懒加载
import Home from '../views/Home'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: '知乎日报-WebApp'
        }
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: lazy(() => import('../views/Detail.jsx')),
        meta: {
            title: '新闻详情-知乎日报'
        }
    },
    {
        path: '/personal',
        name: 'personal',
        component: lazy(() => import('../views/Personal.jsx')),
        meta: {
            title: '个人中心-知乎日报'
        }
    },{
        path: '/update',
        name: 'update',
        component: lazy(() => import('../views/Update.jsx')),
        meta: {
            title: '修改个人信息-知乎日报'
        }
    }, {
        path: '/login',
        name: 'login',
        component: lazy(() => import('../views/Login.jsx')),
        meta: {
            title: '登录/注测-知乎日报'
        }
    }, {
        path: '*',
        name: '404',
        component: lazy(() => import('../views/Page404.jsx')),
        meta: {
            title: "404页面-知乎日报"
        }
    }
]
export default routes;
