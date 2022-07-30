import axios from "axios";
import { BASE_URL } from "@/service_urls";

export const contribution = {
  createContribution: (payload) => {
    return axios.post(`${BASE_URL}/contribution`, payload);
  },
};

