
import { createLpToken, getLpTokens, removeLpToken, updateLpToken } from "../../controllers/lpTokenController";
const checkAuth = require('../../../users/helpers/check-auth');

export const routes = (app, version) => {
    app.post(
        version + '/lp-token',
        checkAuth,
        createLpToken,
    );
    app.put(
        version + '/lp-token/:id',
        checkAuth,
        updateLpToken,
    );
    app.get(
        version + '/lp-token',
        checkAuth,
        getLpTokens,
    );
    app.delete(
        version + '/lp-token',
        checkAuth,
        removeLpToken,
    );
}