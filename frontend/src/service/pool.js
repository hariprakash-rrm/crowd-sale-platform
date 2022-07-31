import axios from "axios";
import { BASE_URL } from "@/service_urls";

export const pool = {
    createPool: (payload) => {
        return axios.post(`${BASE_URL}/pools`, payload);
    },
};
