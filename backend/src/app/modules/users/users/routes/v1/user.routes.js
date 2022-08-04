import { userSignup,loginUser ,updateUser, emailVerification,getUserData,updateProfile, resetOldPassword, updateSocialLink, createORupdateNotificationSettings, update2StepVerification, otpVerification, updateUserStatus, forgotPassword, resetNewPassword} from "../../controllers/userController";
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
        version + '/2-step-verification/:id',
        otpVerification,
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
    app.put(
        version + '/update-social-link',
        checkAuth,
        updateSocialLink,
    );
    app.put(
        version + '/update-notification-settings',
        checkAuth,
        createORupdateNotificationSettings,
    );
    app.put(
        version + '/user-2-step-verification',
        checkAuth,
        update2StepVerification,
    );
    app.put(
        version + '/update-user-status',
        checkAuth,
        updateUserStatus,
    );
    app.post(
        version + '/forgot-password',
        forgotPassword,
    );
    app.post(
        version + '/reset-new-password',
        resetNewPassword,
    );
};