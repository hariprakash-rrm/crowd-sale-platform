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
  }
};

