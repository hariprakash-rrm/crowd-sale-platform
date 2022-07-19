import { defineStore } from "pinia";

export const useSideMenuAdminStore = defineStore("sideMenuAdmin", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "side-menu-update-profile",
        title: "Profile",
      },
      {
        icon: "HomeIcon",
        pageName: "accordion",
        title: "Accordion",
      },
    ],
  }),
});
