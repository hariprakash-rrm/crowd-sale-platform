import axios from "axios";
import { BASE_URL } from "@/service_urls";

export const web3Deals = {
  fetchPoolsDetails: () => {
    return axios.get(`${BASE_URL}/web3`);
  },
};
