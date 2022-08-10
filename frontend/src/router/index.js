import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/LoginPage.vue";
import Register from "../pages/RegisterPage.vue";
import ForgotPassword from "../pages/ForgotPassword.vue";
import EnterOtp from "../pages/OTPVerification.vue";
import UpdateProfile from "../pages/UpdateProfile.vue";
import Admin from "../pages/AccordionPage.vue"
import ResetPassword from "../pages/ResetPassword.vue";
import Verify2StepVerification from "../pages/Verify2Step.vue"
import ErrorPage from "../views/error-page/Main.vue";
import DashboardOverview1 from "../views/dashboard-overview-1/Main.vue";
import SideMenu from "../layouts/side-menu/Main.vue";
import UserLayout from "../views/users-layout-1/Main.vue";
import SingleDeal from "../views/profile-overview-2/Main.vue";
import Notification from "../views/profile-overview-2/Main.vue"
import ReadContract from "../views/read-contract/Main.vue";
import WriteContract from "../views/write-contract/Main.vue";
import ReadUserData from "../views/read-userdata/Main.vue";
import WriteUserData from "../views/write-userdata/Main.vue";
import EditPools from "../views/edit-pools/Main.vue";
import Portfolio from "../views/portfolio/Main.vue";

import { Role, getScope } from "@/helpers/helper.js";
import Calendar from "../views/calendar/Main.vue";

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
        path: "/verify-2-step-verification/:id",
        name: "verify-2-step-verification",
        component: Verify2StepVerification,
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
                meta: {
                    authorize: [
                        Role.user,
                    ],
                },
            },
            {
                path: "calendar",
                name: "side-menu-calendar",
                component: Calendar,
                meta: {
                    authorize: [
                        Role.user,
                    ],
                },
            },
            {
                path: "portfolio",
                name: "portfolio",
                component: Portfolio,
                meta: {
                    authorize: [
                        Role.user,
                    ],
                },
            },
            {
                path: "/admin",
                name: "accordion",
                component: Admin,
                meta: {
                    authorize: [
                        Role.admin,
                    ],
                },
            },
            {
                path: "/read-contract",
                name: "read-contract",
                component: ReadContract,
                meta: {
                    authorize: [
                        Role.admin,
                    ],
                },
            },
            {
                path: "/write-contract",
                name: "write-contract",
                component: WriteContract,
                meta: {
                    authorize: [
                        Role.admin,
                    ],
                },
            },
            {
                path: "/read-userdata",
                name: "read-userdata",
                component: ReadUserData,
                meta: {
                    authorize: [
                        Role.admin,
                    ],
                },
            },
            {
                path: "/write-userdata",
                name: "write-userdata",
                component: WriteUserData,
                meta: {
                    authorize: [
                        Role.admin,
                    ],
                },
            },
            {
                path: "/edit-pools",
                name: "edit-pools",
                component: EditPools,
                meta: {
                    authorize: [
                        Role.admin,
                    ],
                },
            },
            {
                path: "/profile",
                name: "side-menu-update-profile",
                component: UpdateProfile,
                meta: {
                    authorize: [
                        Role.user,
                        Role.admin
                    ],
                }
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
            {
                path: "/notification",
                name: "profile-overview-1",
                component: Notification,
            },
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { left: 0, top: 0 };
    },
});

router.beforeEach((to, from, next) => {
    const { authorize } = to.meta;
    if (authorize && authorize.length) {
        const currentUserRole = getScope();
        if (!authorize.includes(currentUserRole)) {
            return next("/login");
        } else {
            return next();
        }
    }
    if (to.path == "" || to.path == "/") {
        next("/login");
    } else {
        next();
    }
});

export default router;
