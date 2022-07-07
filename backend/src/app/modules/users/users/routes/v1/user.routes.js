import { userSignup,loginUser ,updateUser, emailVerification,getUserData,updateProfile, resetOldPassword} from "../../controllers/userController";
import { upload } from "../../helpers/multer"; 
const checkAuth = require('../../../users/helpers/check-auth');



//User Routes
export const routes = (app, version) => {
    app.post(
        version + '/signup-user',upload.single('profileImage'),
        userSignup,
    );
    app.patch(
        version + '/update-user/:Id',upload.single('profileImage'),
        updateUser,
    );
    app.post(
        version + '/active-user/:Id',
        emailVerification,
    );

    app.post(
        version + '/login-user',
        loginUser,
    );
    app.get(
        version + '/user-profile',
        checkAuth,
        getUserData,
    );
    app.put(
        version + '/user-update',
        checkAuth,
        upload.single('profileImage'),
        updateProfile,
    );
    app.put(
        version + '/password-reset',
        checkAuth,
        resetOldPassword,
    );
};