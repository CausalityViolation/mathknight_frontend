import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../views/Login.vue"
import SecureComponent from "../views/Home.vue"
import RegisterComponent from "../views/Register"

Vue.use(VueRouter)

const routes = [

    {
        path: '/home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/quiz',
        name: 'quiz',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Quiz.vue')
    },
    {
        path: "/login",
        name: "login",
        component: LoginComponent
    },
    {
        path: "/home",
        name: "secure",
        component: SecureComponent
    },
    {
        path: "/register",
        name: "register",
        component: RegisterComponent
    }
]

const router = new VueRouter({
    routes
})

export default router
