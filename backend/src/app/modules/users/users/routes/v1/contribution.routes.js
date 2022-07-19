
import { createContribution } from "../../controllers/contributionController";
const checkAuth = require('../../../users/helpers/check-auth');

export const routes = (app, version) => {
    app.post(
        version + '/contribution',
        checkAuth,
        createContribution,
    );
}