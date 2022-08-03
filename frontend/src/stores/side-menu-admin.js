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
      {
        icon: "UsersIcon",
        pageName: "side-menu-users",
        title: "Users",
        subMenu: [
          {
            icon: "",
            pageName: "read-contract",
            title: "Read Contract",
          },
          // {
          //   icon: "",
          //   pageName: "side-menu-users-layout-2",
          //   title: "Layout 2",
          // },
          // {
          //   icon: "",
          //   pageName: "side-menu-users-layout-3",
          //   title: "Layout 3",
          // },
        ],
      },
    ],
  }),
});
