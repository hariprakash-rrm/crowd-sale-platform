
import { createPoolStacking, getPoolStackings, updatePoolStacking } from "../../controllers/poolStackingController";
const checkAuth = require('../../../users/helpers/check-auth');

export const routes = (app, version) => {
    app.post(
        version + '/pools-stacking',
        checkAuth,
        createPoolStacking,
    );
    app.put(
        version + '/pools-stacking/:id',
        checkAuth,
        updatePoolStacking,
    );
    app.get(
        version + '/pools-stacking',
        checkAuth,
        getPoolStackings,
    );
}