
import { createWalletAddress, getWalletAddress, removeWalletAddress, updateWalletAddress } from "../../controllers/walletAddressController";
const checkAuth = require('../../../users/helpers/check-auth');

export const routes = (app, version) => {
    app.post(
        version + '/wallet-address',
        checkAuth,
        createWalletAddress,
    );
    app.put(
        version + '/wallet-address/:id',
        checkAuth,
        updateWalletAddress,
    );
    app.get(
        version + '/wallet-address',
        checkAuth,
        getWalletAddress,
    );
    app.delete(
        version + '/wallet-address',
        checkAuth,
        removeWalletAddress,
    );
}