import { defineStore } from "pinia";
import { contribution } from "../service/contribution";
import router from "@/router";

export const useContributionStore = defineStore("contributionStore", {
    state: () => ({}),
    getters: {},
    actions: {
        createContribution(payload) {
            return contribution
                .createContribution(payload)
                .then((res) => {
                    const { data } = res["data"];
                    return res;
                })
                .catch((err) => {
                    console.error("creating contribution", err);
                    return err;
                });
        },
    },
});