import { defineStore } from "pinia";
import { web3Deals } from "../service/web3Deals";

export const useWeb3DealsStore = defineStore("web3DealsStore", {
  state: () => ({
    dealsData: [],
  }),
  getters: {
    getDealsData: (state) => state.dealsData || {},
  },
  actions: {
    fetchDeals() {
      return web3Deals
        .fetchPoolsDetails()
        .then((res) => {
          const { data } = res;
          this.dealsData = data;
        })
        .catch((err) => console.log(err));
    },
  },
});
