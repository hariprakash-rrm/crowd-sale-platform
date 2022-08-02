import { defineStore } from "pinia";

export const useSideMenuAdminStore = defineStore("sideMenuAdmin", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "accordion",
        title: "Dashboard",
      },
      {
        icon: "HomeIcon",
        pageName: "side-menu-update-profile",
        title: "Profile",
      },
    ],
  }),
});
