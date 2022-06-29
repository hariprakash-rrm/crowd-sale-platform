// loadFromContract

import { getPoolsList } from "../../controllers/poolsController";
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
}