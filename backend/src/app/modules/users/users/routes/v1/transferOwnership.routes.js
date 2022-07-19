
import { createTransferOwnership, getTransferOwnerships, updateTransferOwnership } from "../../controllers/transferOwnershipController";
const checkAuth = require('../../../users/helpers/check-auth');

export const routes = (app, version) => {
    app.post(
        version + '/transfer-ownership',
        checkAuth,
        createTransferOwnership,
    );
    app.put(
        version + '/transfer-ownership/:id',
        checkAuth,
        updateTransferOwnership,
    );
    app.get(
        version + '/transfer-ownership',
        checkAuth,
        getTransferOwnerships,
    );
}