import { defineStore } from "pinia";

export const useSideMenuAdminStore = defineStore("sideMenuAdmin", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "side-menu-dashboard-overview-1",
        title: "Deals",
      },
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
