import axios from "axios";
import { BASE_URL } from "@/service_urls";

export const pool = {
    addAirDropToken(payload) {
        return axios.post(`${BASE_URL}/airdrop-token`, payload);
    },
    createPool: (payload) => {
        return axios.post(`${BASE_URL}/pools`, payload);
    },
    fetchLPTokens: () => {
        return axios.get(`${BASE_URL}/lp-token`);
    }
};
