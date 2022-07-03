// loadFromContract

import { createPool, getPoolsList, updatePools } from "../../controllers/poolsController";
import { loadFromContract } from "../../helpers/wallet";


export const routes = (app, version) => {
    app.get(
        version + '/web3',
        loadFromContract,
    );

    app.get(
        version + '/pools',
        getPoolsList,
    );
    app.post(
        version + '/pools',
        createPool,
    );
    app.put(
        version + '/pools/:id',
        updatePools,
    );
}