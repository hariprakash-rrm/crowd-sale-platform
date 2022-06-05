import { defineStore } from "pinia";
import AuthModule from "./auth";


export default defineStore("index", {
  state: {},
  getters: {},
  actions: {},
  modules: { AuthModule }
});
