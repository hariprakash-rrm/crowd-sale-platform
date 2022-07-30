import { readAllUserData } from "../../controllers/adminController";
const checkAuth = require("../../../users/helpers/check-auth");

export const routes = (app, version) => {
  app.post(version + "/read-user-data", readAllUserData);
};
