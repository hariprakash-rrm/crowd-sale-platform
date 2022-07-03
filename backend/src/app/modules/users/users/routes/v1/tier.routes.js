// loadFromContract

import { createTier, getTiers, updateTier } from "../../controllers/tierController";
import { loadFromContract } from "../../helpers/wallet";


export const routes = (app, version) => {
    app.post(
        version + '/tier',
        createTier,
    );

    app.get(
        version + '/tier',
        getTiers,
    );
    app.put(
        version + '/tier/:id',
        updateTier,
    );
}