import { defineStore } from "pinia";
import { auth } from "../service/auth";
import router from "@/router";
import { parseJwt, Role } from "@/helpers/helper.js";

export const useAuthUserStore = defineStore("authUserStore", {
    state: () => ({
        userData: JSON.parse(localStorage.getItem("token")) || {},
        user: {},
        userFullName: "",
    }),
    getters: {
        colorScheme(state) {
            if (localStorage.getItem("colorScheme") === null) {
                localStorage.setItem("colorScheme", "default");
            }
            return state.colorSchemeValue;
        },
        getUserData: (state) => state.userData || {},
        getUserDetails: (state, getters, rootState) => {
            let { getUserData } = getters;
            if (getUserData && getUserData.token) {
                return parseJwt(getUserData.token);
            } else {
                return {};
            }
        },
    },
    actions: {
        login({ email, password }) {
            localStorage.removeItem("token");
            const payload = new URLSearchParams();
            payload.append("email", email);
            payload.append("password", password);
            return auth
                .logInToken(payload)
                .then((res) => {
                    const { token } = res["data"];
                    localStorage.setItem("token", JSON.stringify({ token }));
                    this.userData = token;
                    const { role } = parseJwt(token);
                    if (role == Role.user) {
                        router.push("/dashboard");
                    }
                    this.fetchUser()
                    return res
                })
                .catch((err) => {
                    console.error("error in login", err);
                    return err
                })
        },
        logout() {
            localStorage.removeItem("token");
            this.userData = {}
            this.user = {}
            this.userFullName = ""
            setTimeout(() => {
                router.push("/login");
            }, 0);
        },
        fetchUser() {
            return auth.fetchUser().then(res => {
                this.user = res.data;
                this.userFullName = res.data['profile'].name;
            })
        },
        userRegistration(payload) {
            return auth
                .userRegistration(payload)
                .then((res) => {
                    const { data } = res["data"];
                    router.push(`/enter-otp/${data?._id}`);
                    return res;
                })
                .catch((err) => {
                    console.error("error in registration", err);
                    return err;
                });
        },
        otpVerification({ user_id, otp }) {
            return auth.otpVerification(user_id, { otp: otp }).then(res => {
                router.push("/login");
                return res;
            }).catch(err => {
                console.error("error in otpVerification", err);
                return err;
            })
        }
    },
    
});
