import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../views/Login.vue"
import SecureComponent from "../views/Home.vue"
import RegisterComponent from "../views/Register"
import QuizList from "../views/quizList"
import Home from "@/views/Home";
import quizSubtract from "@/views/quizSubtract";
import quizDivision from "@/views/quizDivision";
import quizMultiply from "@/views/quizMultiply";
import quizAddition from "@/views/quizAddition";
import teacherOverview from "@/views/teacherOverview";
import teacherLogin from "@/views/teacherLogin";
import achievements from "@/views/achievements";

Vue.use(VueRouter)

const routes = [

    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/quiz',
        name: 'quiz',
        component: QuizList
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
    },
    {
        path: "/add",
        name: "addition",
        component: quizAddition
    },
    {
        path: "/multiply",
        name: "multiply",
        component: quizMultiply
    }
    ,
    {
        path: "/division",
        name: "division",
        component: quizDivision
    },
    {
        path: "/subtract",
        name: "subtract",
        component: quizSubtract
    },
    {
        path: "/teacher",
        name: "teacherLogin",
        component: teacherLogin
    },
    {
        path: "/teacherOverview",
        name: "teacherOverview",
        component: teacherOverview
    },
    {
        path: "/achievements",
        name: "achievements",
        component: achievements
    }

]

const router = new VueRouter({
    routes
})

export default router
