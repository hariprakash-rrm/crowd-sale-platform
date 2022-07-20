import { createBlockListAccount, getBlockListAccounts } from '../../controllers/blacklistController';

const checkAuth = require('../../../users/helpers/check-auth');

export const routes = (app, version) => {
    app.post(
        version + '/blacklist-account',
        checkAuth,
        createBlockListAccount,
    );
  
    app.get(
        version + '/blacklist-account',
        checkAuth,
        getBlockListAccounts,
    );
}