
import { createTermsAndConditions, getTermsAndConditionss, removeTermsAndConditions, updateTermsAndConditions } from "../../controllers/TermsAndConditionsController";
const checkAuth = require('../../../users/helpers/check-auth');

export const routes = (app, version) => {
    app.post(
        version + '/terms-and-conditions',
        checkAuth,
        createTermsAndConditions,
    );
    app.put(
        version + '/terms-and-conditions/:id',
        checkAuth,
        updateTermsAndConditions,
    );
    app.get(
        version + '/terms-and-conditions',
        checkAuth,
        getTermsAndConditionss,
    );
    app.delete(
        version + '/terms-and-conditions',
        checkAuth,
        removeTermsAndConditions,
    );
}