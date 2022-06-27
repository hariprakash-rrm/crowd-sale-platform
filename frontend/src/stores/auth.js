import { defineStore } from "pinia";
import { auth } from "../service/auth";
import router from "@/router";
import { parseJwt } from "@/helpers/helper.js";

export const useAuthUserStore = defineStore("authUserStore", {
    state: () => ({
        userData: JSON.parse(localStorage.getItem("token")) || {},
        user: []
    }),
    getters: {
        colorScheme(state) {
            if (localStorage.getItem("colorScheme") === null) {
                localStorage.setItem("colorScheme", "default");
            }
            return state.colorSchemeValue;
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
                    const { data, token } = res.response["data"];
                    localStorage.setItem("token", JSON.stringify(token));
                    console.log(state.user)
                    router.push("/dashboard");
                    return res
                })
                .catch((err) => {
                    console.error("error in login", err);
                    // commit("LOGINERROR", err);
                    return err
                })
        },
        logout({ state, dispatch, commit, getters }) {
            localStorage.removeItem("token");
            setTimeout(() => {
                router.push("/login");
            }, 0);
        },
        fetchUser({ }) {
            return auth.fetchUser().then(res => {

            })
        },
        userRegistration(payload) {
            return auth
                .userRegistration(payload)
                .then((res) => {
                    console.log(res)
                    const { data } = res.response["data"];
                    router.push(`/enter-otp/${data.data?._id}`);
                    return res;
                })
                .catch((err) => {
                    console.error("error in registration", err);
                    return err;
                });
        },
        otpVerification({ user_id, otp }) {
            return auth.otpVerification(user_id, { otp: otp }).then(res => {
                const { data, status } = res;
                if (status === 200) {
                    router.push("/dashboard");
                    return res;
                }
                else {
                    return res;
                }
            }).catch(err => {
                console.error("error in otpVerification", err);
                return err;
            })
        }
    },
});
