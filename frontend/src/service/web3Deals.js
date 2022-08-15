import axios from "axios";
import { BASE_URL } from "@/service_urls";

export const web3Deals = {
  fetchPoolsDetails: (searchText = "") => {
    let address = localStorage.getItem("address") !="ConnectWallet" ? localStorage.getItem("address") : "";
    return axios.get(`${BASE_URL}/web3?search=${searchText}&fromAddress=${address}`);
  },
  createPoolsDetails: () => {
    return axios.post(`${BASE_URL}/pools/1`);
  },
  createPool: (payload) => {
    return axios.post(`${BASE_URL}/pools`, payload);
  }
};
