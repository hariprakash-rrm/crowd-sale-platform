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
        icon: "EditIcon",
        title: "Edit Pool Details",
        subMenu: [
          {
            icon: "",
            pageName: "read-contract",
            title: "Read Contract",
          },
          {
            icon: "",
            pageName: "write-contract",
            title: "Write Contract",
          },
          {
            icon: "",
            pageName: "read-userdata",
            title: "Read User Data",
          },
          {
            icon: "",
            pageName: "write-userdata",
            title: "Write User Data",
          },
          {
            icon: "",
            pageName: "edit-pools",
            title: "Edit Pools",
          },
        ],
      },
    ],
  }),
});
