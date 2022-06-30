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
 
};
export const fetchPools={
  fetchPoolsDetails: () => {
    return axios.get(`${BASE_URL}/pools`);
  },
}