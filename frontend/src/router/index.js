import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login/Main.vue";
import Register from "../views/register/Main.vue";
import ForgotPassword from "../views/forgot-password/Main.vue";
import EnterOtp from "../views/enter-otp/Main.vue";
import ResetPassword from "../views/reset-password/Main.vue";
import ErrorPage from "../views/error-page/Main.vue";
import DashboardOverview1 from "../views/dashboard-overview-1/Main.vue";
import SideMenu from "../layouts/side-menu/Main.vue";
import UpdateProfile from "../views/update-profile/Main.vue";
import UserLayout from "../views/users-layout-1/Main.vue";
import SingleDeal from "../views/profile-overview-2/Main.vue"

const routes = [
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/forgot-password",
        name: "forgot-password",
        component: ForgotPassword,
    },
    {
        path: "/enter-otp/:user_id",
        name: "enter-otp",
        component: EnterOtp,
    },
    {
        path: "/reset-password",
        name: "reset-password",
        component: ResetPassword,
    },
    {
        path: "/error-page",
        name: "error-page",
        component: ErrorPage,
    },
    {
        path: "/:pathMatch(.*)*",
        component: ErrorPage,
    },
  
    {
        path: "/",
        component: SideMenu,
        children: [
            {
                path: "dashboard",
                name: "side-menu-dashboard-overview-1",
                component: DashboardOverview1,
            },
            {
                path: "/profile",
                name: "side-menu-update-profile",
                component: UpdateProfile,
            },
            {
                path: "/notification",
                name: "side-menu-users-layout-1",
                component: UserLayout,
            },
            {
                path: "/single-deal",
                name: "side-menu-profile-overview-2",
                component: SingleDeal,
            },
            
        ]
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { left: 0, top: 0 };
    },
});

router.beforeEach((to, from, next) => {
    // if (!localStorage.getItem("token")) {
    //     if (to.path.includes("/login")) {
    //         next();
    //     } else {
    //         next("/login");
    //     }
    // } else {
    //     next();
    // }
    if (to.path == "" || to.path == "/") {
        next("/login");
    } else {
        next();
    }
});

export default router;
