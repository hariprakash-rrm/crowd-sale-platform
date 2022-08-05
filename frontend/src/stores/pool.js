import { defineStore } from "pinia";
import { pool } from "../service/pool";
import { toaster } from "@/helpers/helper.js";


export const usePoolStore = defineStore("poolStore", {
    state: () => ({}),
    getters: {},
    actions: {
        addAirDropToken(payload) {
            return pool.addAirDropToken(payload).then(res => {
                if (res.data.success) {
                    toaster.success("Airdrop Token created successfully");
                }
                else {
                    toaster.error(res.data.message);
                }
                return res;
            }
            ).catch(err => {
                toaster.error(err.message);
                return err;
            });
        },
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
