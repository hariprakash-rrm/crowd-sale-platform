import axios from "axios";
import { BASE_URL } from "@/service_urls";

export const pool = {
    addAirDropToken(payload) {
        return axios.post(`${BASE_URL}/airdrop-token`, payload);
    },
    createPool: (payload) => {
        return axios.post(`${BASE_URL}/pools`, payload);
    },
    getPoolsById: (payload) => {
        return axios.get(`${BASE_URL}/pools/${payload}`);
    },
    editPool: (payload) => {
        return axios.put(`${BASE_URL}/pools/${payload.id}`, payload);
    },
    fetchLPTokens: () => {
        return axios.get(`${BASE_URL}/lp-token`);
    },
    createLPToken: (payload) => {
        return axios.post(`${BASE_URL}/lp-token`, payload);
    },
    deleteLPToken: (payload) => {
        return axios.delete(`${BASE_URL}/lp-token/?lpTokenId=${payload.lpTokenId}`);
    }
};
