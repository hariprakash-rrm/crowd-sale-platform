import axios from "axios";
import { BASE_URL } from "@/service_urls";

export const auth = {
  logInToken: (payload) => {
    return axios.post(`${BASE_URL}/login-user`, payload);
  },
  userRegistration: (payload) => {
    return axios.post(`${BASE_URL}/signup-user`, payload);
  },
  otpVerification: (user_id, payload) => {
    return axios.post(`${BASE_URL}/active-user/${user_id}`, payload);
  },
  fetchUser: () => {
    return axios.get(`${BASE_URL}/user-profile`);
  },
  updateUser: (payload) => {
    return axios.put(`${BASE_URL}/user-update`, payload);
  },
  updateSocialLink: (payload) => {
    return axios.put(`${BASE_URL}/update-social-link`, payload);
  },
  updateNotificationSettings: (payload) => {
    return axios.put(`${BASE_URL}/update-notification-settings`, payload);
  },
  resetPassword: (payload) => {
    return axios.put(`${BASE_URL}/password-reset`, payload)
  },
  forgotPassword: (payload) => {
    return axios.post(`${BASE_URL}/forgot-password`, payload)
  },
  createWalletAddress: (walletAddress) => {
    return axios.post(`${BASE_URL}/wallet-address`, walletAddress)
  },
  deleteWalletAddress: (walletId) => {
    return axios.delete(`${BASE_URL}/wallet-address`, walletId)
  },
  toggle2StepVerification: (is2StepVerificationOn) => {
    return axios.put(`${BASE_URL}/user-2-step-verification`, is2StepVerificationOn)
  },
  resetPasswordWithToken: (payload) => {
    return axios.post(`${BASE_URL}/reset-new-password`, payload)
  },
  verify2stepVerification: ({ id, otp }) => {
    return axios.post(`${BASE_URL}/2-step-verification/${id}`, { otp })
  },
  readUserData: (payload) => {
    return axios.post(`${BASE_URL}/read-user-data`, payload)
  }
};

