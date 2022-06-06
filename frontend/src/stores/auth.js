import { defineStore } from "pinia";
import { auth } from "../service/auth";
import router from "@/router";

export const useAuthUserStore = defineStore("authUserStore", {
    state: () => ({
        userData: {}
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
            payload.append("username", email);
            payload.append("password", password);
            return auth
                .logInToken(payload)
                .then((res) => {
                    const { data } = res;
                    localStorage.setItem("token", JSON.stringify(data));
                    // commit("LOGIN_SUCCESS", data);
                    router.push("/dashboard");
                    return res;
                })
                .catch((err) => {
                    console.error("error in login", err);
                    // commit("LOGINERROR", err);
                    return err;
                });
        },
        userRegistration(payload) {
            let data = new FormData();
            data.append("userName", payload.userName);
            data.append("password", payload.password);
            data.append("email", payload.email);
            data.append("name", payload.name);
            return auth
                .userRegistration(data)
                .then((res) => {
                    const { data, status } = res;
                    if (status === 200) {
                        router.push(`/enter-otp/${data.data?._id}`);
                        return res;
                    }
                    else {
                        return res;
                    }
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
