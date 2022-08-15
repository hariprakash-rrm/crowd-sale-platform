import { defineStore } from "pinia";
import { pool } from "../service/pool";
import { toaster } from "@/helpers/helper.js";


export const usePoolStore = defineStore("poolStore", {
    state: () => ({
        LPTokens: [],
        selectedPoolData: {},
        poolData: []
    }),
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
                    toaster.success("Pool created successfully");
                    return res;
                })
                .catch((err) => {
                    console.error("creating pool", err);
                    return err;
                });
        },
        getPoolsById(payload) {
            return pool
                .getPoolsById(payload)
                .then((res) => {
                    const { data } = res['data'];
                    this.selectedPoolData = data;
                    return res;
                }).catch((err) => {
                    toaster.error("No data found");
                    console.error("get pools by id", err);
                    return err;
                })
        },
        editPool(payload) {
            return pool
                .editPool(payload)
                .then((res) => {
                    toaster.success("Pool updated successfully");
                    return res;
                }).catch((err) => {
                    console.error("error while updating pool", err);
                    return err;
                })
        },
        fetchLPTokens() {
            return pool
                .fetchLPTokens()
                .then((res) => {
                    const { data, success } = res['data'];
                    if (success) {
                        this.LPTokens = data;
                    }
                    return res;
                })
                .catch((err) => console.log(err));
        },
        createLPToken(payload) {
            return pool
                .createLPToken(payload)
                .then((res) => {
                    this.fetchLPTokens();
                    toaster.success("LPToken created successfully");
                    return res;
                }).catch((err) => {
                    console.error("error while creating pool", err);
                    return err;
                });
        },
        deleteLPToken(payload) {
            return pool
                .deleteLPToken(payload)
                .then((res) => {
                    this.fetchLPTokens();
                    toaster.success("LPToken deleted successfully");
                    return res;
                }).catch((err) => {
                    console.error("error while deleting pool", err);
                    return err;
                });
        }

    },
});
