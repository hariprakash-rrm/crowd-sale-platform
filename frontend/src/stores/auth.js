import { defineStore } from "pinia";
import { auth } from "../service/auth";
import router from "@/router";
import { parseJwt, Role, toaster } from "@/helpers/helper.js";

export const useAuthUserStore = defineStore("authUserStore", {
    state: () => ({
        userData: JSON.parse(localStorage.getItem("token")) || {},
        user: {},
        userFullName: "",
        selectedUserData: {}
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
                    let { success } = res["data"];
                    if (success) {
                        localStorage.removeItem("token");
                        localStorage.removeItem("temp_token");
                        const { isUserVerificationRequired, token, data } = res["data"];
                        if (isUserVerificationRequired) {
                            router.push(`/verify-2-step-verification/${data._id}`);
                            localStorage.setItem("temp_token", JSON.stringify({ token }));
                            return res;
                        }
                        localStorage.setItem("token", JSON.stringify({ token }));
                        this.userData = token;
                        const { role } = parseJwt(token);
                        console.log("role",role)
                        if (role == Role.admin) {
                            router.push("/admin");
                        }
                        else {
                            router.push("/dashboard");
                        }
                    } else {
                        toaster.error(res['data'].message);
                    }
                    return res
                })
                .catch((err) => {
                    toaster.error(err.response['data'].message);
                    console.error("error in login", err);
                    return err
                })
        },
        verify2stepVerification(payload) {
            return auth
                .verify2stepVerification(payload)
                .then((res) => {
                    let { success } = res["data"];
                    if (success) {
                        const { token } = JSON.parse(localStorage.getItem("temp_token"));
                        localStorage.removeItem("temp_token");
                        localStorage.setItem("token", JSON.stringify({ token }));
                        this.userData = token;
                        const { role } = parseJwt(token);
                        console.log("role",role)
                        if (role == Role.admin) {
                            router.push("/admin");
                        }
                        else {
                            router.push("/dashboard");
                        }
                    } else {
                        toaster.error("Invalid OTP");
                    }
                }).catch((err) => {
                    toaster.error("Invalid OTP");
                    console.error("error in verify2stuepVerification", err);
                    return err
                })
        },
        logout() {
            localStorage.removeItem("token");
            this.userData = {}
            this.user = {}
            this.userFullName = ""
            setTimeout(() => {
                toaster.success("Logout Successful");
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
                    toaster.success("Registration Successful");
                    router.push(`/enter-otp/${data?._id}`);
                    return res;
                })
                .catch((err) => {
                    toaster.error("Error in registration");
                    console.error("error in registration", err);
                    return err;
                });
        },
        updateUser(payload) {
            return auth.updateUser(payload).then(res => {
                this.fetchUser()
                toaster.success("Profile Updated Successfully");
                return res
            }).catch(err => {
                toaster.error("Error in updating profile");
                console.log("error while updating user details", err)
                return err
            })
        },
        uploadPhoto(file) {
            const document = new FormData();
            console.log(file)
            document.append("profileImage", file);
            return auth.updateUser(document).then(res => {
                this.fetchUser()
                toaster.success("Profile Updated Successfully");
                return res
            }).catch(err => {
                toaster.error("Error in updating profile");
                console.log("error while updating user details", err)
                return err
            })
        },
        updateSocialLink(payload) {
            return auth.updateSocialLink(payload).then(res => {
                this.fetchUser()
                toaster.success("Profile Updated Successfully");
                return res
            }).catch(err => {
                toaster.error("Error in updating profile");
                console.log("error while updating social link", err)
                return err
            })
        },
        updateNotificationSettings(payload) {
            return auth.updateNotificationSettings(payload).then(res => {
                this.fetchUser()
                toaster.success("Profile Updated Successfully");
                return res
            }).catch(err => {
                toaster.error("Error in updating profile");
                console.log("error while updating notification settings", err)
                return err
            })
        },
        otpVerification({ user_id, otp }) {
            return auth.otpVerification(user_id, { otp: otp }).then(res => {
                router.push("/login");
                return res;
            }).catch(err => {
                console.error("error in otpVerification", err);
                return err;
            })
        },
        resetPassword(payload) {
            return auth.resetPassword(payload).then(res => {
                let { success } = res["data"]
                if (success) {
                    toaster.success("Password Reset Successfully");
                    router.push("/login");
                }
                return res;
            }).catch(err => {
                toaster.error("Error in resetting password");
                console.error("error in resetting password", err);
                return err;
            })
        },
        forgotPassword(email) {
            return auth.forgotPassword({ email: email }).then(res => {
                let { success } = res["data"]
                if (success) {
                    toaster.success("Password Reset Successfully");
                    router.push("/login");
                } else {
                    toaster.error("Email not found");
                }
                return res;
            }).catch(err => {
                console.error("error in resetting password", err);
                return err;
            })
        },
        createWalletAddress(walletAddress) {
            return auth.createWalletAddress(walletAddress).then(res => {
                this.fetchUser()
                toaster.success("Wallet Address Created Successfully");
                return res;
            }).catch(err => {
                toaster.error(err.response['data'].message);
                console.error("error in creating wallet address", err);
                return err;
            })
        },
        deleteWalletAddress(walletId) {
            return auth.deleteWalletAddress(walletId).then(res => {
                this.fetchUser()
                toaster.success("Wallet Address Deleted Successfully");
                return res;
            }).catch(err => {
                toaster.error("Error in deleting wallet address");
                console.error("error in deleting wallet address", err);
                return err;
            })
        },
        toggle2StepVerification(is2StepVerificationOn) {
            return auth.toggle2StepVerification(is2StepVerificationOn).then(res => {
                this.fetchUser()
                toaster.success("2 Step Verification Updated Successfully");
                return res;
            }).catch(err => {
                toaster.error("Error in updating 2 Step Verification");
                console.error("error in updating 2 Step Verification", err);
                return err;
            })
        },
        resetPasswordWithToken(payload) {
            return auth.resetPasswordWithToken(payload).then(res => {
                let { success } = res["data"]
                if (success) {
                    toaster.success("Password Reset Successfully");
                    router.push("/login");
                }
                return res;
            }).catch(err => {
                toaster.error("Error in resetting password");
                console.error("error in resetting password", err);
                return err;
            })
        },
        readUserData(payload) {
            return auth.readUserData(payload).then(res => {
                let { success, data } = res["data"]
                if (success) {
                    toaster.success("User Data Read Successfully");
                    this.selectedUserData = data
                } else {
                    toaster.error("Error in reading user data");
                }
                return res;
            }).catch(err => {
                console.error("error in readUserData", err);
                return err;
            })
        },
        updateUserStatus(payload) {
            return auth.updateUserStatus(payload).then(res => {
                let { success } = res["data"]
                if (success) {
                    toaster.success("User Status Updated Successfully");
                }
                else {
                    toaster.error("Error in updating user status");
                }
                return res;
            }).catch(err => {
                toaster.error("Error in updating user status");
                console.error("error in updating user status", err);
                return err;
            })
        },
    },

});
