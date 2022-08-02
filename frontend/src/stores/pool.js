import { defineStore } from "pinia";
import { pool } from "../service/pool";
import { toaster } from "@/helpers/helper.js";


export const usePoolStore = defineStore("poolStore", {
    state: () => ({}),
    getters: {},
    actions: {
        createPool(payload) {
            return pool
                .createPool(payload)
                .then((res) => {
                    // const { data } = res["data"];
                    toaster.success("Pool created successfully");
                    return res;
                })
                .catch((err) => {
                    console.error("creating contribution");
                    console.error("creating pool", err);
                    return err;
                });
        },
    },
});
