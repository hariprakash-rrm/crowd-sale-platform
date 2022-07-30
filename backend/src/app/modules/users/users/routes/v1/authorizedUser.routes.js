import { createAuthorizedAccount, getAuthorizedAccounts } from '../../controllers/authorizedUserController';
const checkAuth = require('../../../users/helpers/check-auth');

export const routes = (app, version) => {
    app.post(
        version + '/authorized-account',
        checkAuth,
        createAuthorizedAccount,
    );
  
    app.get(
        version + '/authorized-account',
        checkAuth,
        getAuthorizedAccounts,
    );
}