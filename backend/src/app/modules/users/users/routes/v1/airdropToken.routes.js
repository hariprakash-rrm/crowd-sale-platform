
import { createAirdropToken, getAirdropTokens, updateAirdropToken } from "../../controllers/airdropTokenController";
const checkAuth = require('../../../users/helpers/check-auth');

export const routes = (app, version) => {
    app.post(
        version + '/airdrop-token',
        checkAuth,
        createAirdropToken,
    );
    app.put(
        version + '/airdrop-token/:id',
        checkAuth,
        updateAirdropToken,
    );
    app.get(
        version + '/airdrop-token',
        checkAuth,
        getAirdropTokens,
    );
}