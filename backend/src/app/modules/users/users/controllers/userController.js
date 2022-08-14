import User from "../models/user.model";
import WalletAddress from "../models/wallet-address.model";
import NotificationSettings from "../models/notification-settings.model";
import UserProfile from "../models/user-profile.model";
import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";
import bcrypt from "bcrypt";
import { sendMail } from "../helpers/mailer";
import fs from "fs";
import * as ejs from "ejs";
const responseModule = require("../../../../../config/response");
import winston from "../../../../../config/winston";
import Tier from "./../models/tier.model";


/**
 * Function to create a User
 * @param {Object} req
 * @param {Object} res
 */
export const userSignup = async (req, res, next) => {
  const password = bcrypt.hashSync(req.body.password, 10);
  const otp = otpGenerator.generate(5, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  const user = new User({
    email: req.body.email,
    otp: otp,
    password: password,
    role: "User",
  });
  try {
    await user.save(async (error, result) => {
      console.log("error", error);
      if (error) {
        if (error.name == "ValidationError" || "MongoServerError") {
          return res.status(400).json({
            success: 0,
            message:
              error.code === 11000
                ? "Email already exists, try different email"
                : error.message,
            response: 400,
            data: {},
          });
        }
        return responseModule.errorResponse(res, {
          success: 0,
          message: error.message,
          data: {},
        });
      }
      let userProfileObj = {
        name: req.body.name,
        user: result._id,
        userName: req.body.userName,
        bio: req.body.bio || "",
      };
      if (req.file) {
        var profileImage = '/uploads/'+ req.file.path.substring(req.file.path.lastIndexOf('/')+1);
        userProfileObj.profileImage = profileImage;
      }
      let profile = await createuserProfile(userProfileObj);
      let isWalletSaved = await createWallet(req, profile);
      if (!isWalletSaved) {
        await User.find({ _id: result._id }).deleteOne().exec();
        await UserProfile.find({ _id: profile._id }).deleteOne().exec();
        return res.status(400).json({
          success: 0,
          message: "Wallet Address already exists",
          response: 400,
        });
      }
      await sendWelcomeMail(req.body.name, req.body.email, otp);
      return responseModule.successResponse(res, {
        success: 1,
        message: "User created successfully",
        data: { _id: result._id },
      });
    });
  } catch (err) {
    winston.error(err);
    return next(err);
  }
};

/**
 * Function to Login User
 * @param {Object} req
 * @param {Object} res
 */
export const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      status: true,
    }).exec();

    if (user) {
      bcrypt.compare(req.body.password, user.password, async (err, result) => {
        if (err) {
          return responseModule.errorResponse(res, {
            success: 0,
            message: err.message,
            data: {},
          });
        }
        if (result === true) {
          if (user.isBlocked) {
            return responseModule.errorResponse(res, {
              success: 0,
              message: "Your account has been blocked, Contact Admin",
              data: {},
            });
          }

          let userProfile = await UserProfile.findOne({ user: user._id });

          const token = jwt.sign(
            {
              email: user.email,
              userId: user._id,
              profileId: userProfile._id,
              role: user.role,
            },
            config.JWT_KEY,
            {
              expiresIn: "7h",
            }
          );
          user.password = "";
          if (user.is2StepVerificationOn) {
            const otp = otpGenerator.generate(5, {
              upperCaseAlphabets: false,
              specialChars: false,
              lowerCaseAlphabets: false,
            });
            await User.findOneAndUpdate(
              { _id: user._id, },
              { $set: { verificationOtp: otp }, },
              { new: true, }
            )
            await send2StepVerificationMail(
              userProfile.userName,
              user.email,
              otp
            );
          }

          return responseModule.successResponse(res, {
            success: 1,
            message: "User Login successful",
            data: user,
            token: token,
            profile: userProfile,
            isUserVerificationRequired: user.is2StepVerificationOn,
          });
        }
        if (result === false) {
          return res.status(401).json({
            message: "Invalid Password",
          });
        }
      });
    } else {
      return res.status(401).json({
        message: "Email not registered",
        data: {},
        response: 401,
      });
    }
  } catch (err) {
    winston.error(err);
    return next(err);
  }
};

/**
 *
 * @param {Object} req
 * @param {Object} res
 */
export const updateUser = async (req, res, next) => {
  try {
    const updates = {
      userName: req.body.userName,
      name: req.body.name,
      email: req.body.email,
      status: req.body.status,
    };
    if (req.file) {
      var profileImage = '/uploads/'+ req.file.path.substring(req.file.path.lastIndexOf('/')+1);
      updates.profileImage = profileImage;
    }

    if (req.body.password) {
      updates.password = bcrypt.hashSync(req.body.password, 10);
    }
    const user = await User.findOneAndUpdate(
      {
        _id: req.params.Id,
      },
      {
        $set: updates,
      },
      {
        new: true,
      }
    ).exec((error, response) => {
      if (error) {
        if (error.name == "ValidationError" || "MongoServerError") {
          return res.status(400).json({
            success: 0,
            message: error.message,
            response: 400,
            data: {},
          });
        }
        return responseModule.errorResponse(res, {
          success: 0,
          message: "Could not update user details",
        });
      } else {
        return responseModule.successResponse(res, {
          success: 1,
          message: "User Details updated successfully",
          data: response,
        });
      }
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};
export const updateSocialLink = async (req, res, next) => {
  try {
    const updates = {
      socialTelegramUrl: req.body.socialTelegramUrl,
      socialTwitterUrl: req.body.socialTwitterUrl,
    };

    const user = await UserProfile.findOneAndUpdate(
      {
        _id: req.userData.profileId,
      },
      {
        $set: updates,
      },
      {
        new: true,
      }
    ).exec((error, response) => {
      if (error) {
        if (error.name == "ValidationError" || "MongoServerError") {
          return res.status(400).json({
            success: 0,
            message: error.message,
            response: 400,
            data: {},
          });
        }
        return responseModule.errorResponse(res, {
          success: 0,
          message: "Could not update User's social links",
        });
      } else {
        return responseModule.successResponse(res, {
          success: 1,
          message: "User's social links updated successfully",
          data: response,
        });
      }
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

/**
 *
 * @param {Object} req
 * @param {Object} res
 */
export const emailVerification = async (req, res, next) => {
  try {
    const id = req.params.Id;
    const user = await User.findById(id).exec();

    if (user.otp == req.body.otp) {
      const updates = {
        status: true,
      };
      await User.findOneAndUpdate(
        {
          _id: id,
        },
        {
          $set: updates,
        },
        {
          new: true,
        }
      ).exec((error, response) => {
        if (error) {
          if (error.name == "ValidationError" || "MongoServerError") {
            return res.status(400).json({
              success: 0,
              message: error.message,
              response: 400,
              data: {},
            });
          }
          return responseModule.errorResponse(res, {
            success: 0,
            message: "Could not update user details",
          });
        } else {
          return responseModule.successResponse(res, {
            success: 1,
            message: "User Details updated successfully",
            data: response,
          });
        }
      });
    } else {
      return res.status(400).json({
        success: 0,
        message: "Invalid Otp",
        response: 401,
        data: {},
      });
    }
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

/**
 *
 * @param {Object} req
 * @param {Object} res
 */
export const passwordReset = async (req, res, next) => {
  try {
    const otp = otpGenerator.generate(5, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });
    const updates = {
      otp: otp,
    };
    const user = await User.findOne({ _id: req.params.Id }).exec();
    sendMail(user.email, otp);

    await User.findOneAndUpdate(
      {
        _id: req.params.Id,
      },
      {
        $set: updates,
      },
      {
        new: true,
      }
    ).exec((error, response) => {
      if (error) {
        if (error.name == "ValidationError" || "MongoServerError") {
          return res.status(400).json({
            success: 0,
            message: error.message,
            response: 400,
            data: {},
          });
        }
        return responseModule.errorResponse(res, {
          success: 0,
          message: error.message,
          data: {},
        });
      } else {
        return responseModule.successResponse(res, {
          success: 1,
          message: "User Details updated successfully",
          data: response,
        });
      }
    });
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export const createuserProfile = async (data) => {
  try {
    let profile = new UserProfile(data);
    let savProfile = profile.save();
    return savProfile;
  } catch (error) {
    return false;
  }
};

export const createWallet = async (req, user) => {
  return new Promise(async (resolve, reject) => {
    if (req.body.walletAddress) {
      let walletAddress = new WalletAddress({
        profile: user._id,
        walletAddress: req.body.walletAddress,
      });
      await walletAddress.save(async (error, result) => {
        if (error) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    } else {
      resolve(true);
    }
  });
};

export const sendWelcomeMail = async (userName, email, otp) => {
  try {
    const tmpl = fs.readFileSync(
      require.resolve("../../../../../templates/sign-in.ejs"),
      "utf8"
    );
    const html = ejs.render(tmpl, {
      userName: userName,
      otp: otp,
      year: new Date().getFullYear(),
    });

    let subject = "Your account created successfully";
    let send = await sendMail(email, subject, html);
  } catch (error) { }
};

export const updateProfile = async (req, res) => {
  try {
    let updates = {
      name: req.body.name,
      userName: req.body.userName,
      telegramUrl: req.body.telegramUrl,
      bio: req.body.bio,
      //// location: req.body.location,
      //   mobile: req.body.mobile,
    };
    if (req.file) {
      var profileImage = '/uploads/'+ req.file.path.substring(req.file.path.lastIndexOf('/')+1);
      updates.profileImage = profileImage;
    }
    const profile = await UserProfile.findOneAndUpdate(
      {
        _id: req.userData.profileId,
      },
      {
        $set: updates,
      },
      {
        new: true,
      }
    ).exec();
    const user = await User.findOneAndUpdate(
      {
        _id: req.userData.userId,
      },
      {
        $set: { updates },
      },
      {
        new: true,
      }
    ).exec((error, response) => {
      if (error) {
        if (error.name == "ValidationError" || "MongoServerError") {
          return res.status(400).json({
            success: 0,
            message: error.message,
            response: 400,
            data: {},
          });
        }
        return responseModule.errorResponse(res, {
          success: 0,
          message: "Could not update user details",
        });
      } else {
        return responseModule.successResponse(res, {
          success: 1,
          message: "User Details updated successfully",
        });
      }
    });
  } catch (error) {
    return next(err);
  }
};

export const getUserData = async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.userData.userId }).select(
      "-password"
    );
    let profile = await UserProfile.findOne({ _id: req.userData.profileId });
    let walletAddress = await WalletAddress.find({ profile: req.userData.profileId });
    let tier = await Tier.findOne({ _id: profile.tier });
    let notificationSettings = await NotificationSettings.findOne({
      profile: profile._id,
    });

    return responseModule.successResponse(res, {
      success: 1,
      message: "User Details fetched successfully",
      user,
      profile,
      walletAddress,
      tier:tier,
      notificationSettings,
    });
  } catch (error) {
    console.log(err);
    return next(err);
  }
};

export const resetOldPassword = async (req, res) => {
  try {
    const user = await User.findOne({
      _id: req.userData.userId,
    }).exec();

    if (user) {
      bcrypt.compare(
        req.body.oldPassword,
        user.password,
        async (err, result) => {
          console.log("err", err);
          console.log("err", result);
          if (err) {
            return responseModule.errorResponse(res, {
              success: 0,
              message: err.message,
              data: {},
            });
          }
          if (result === true) {
            let updateData = {
              password: bcrypt.hashSync(req.body.newPassword, 10),
            };
            const user = await User.findOneAndUpdate(
              {
                _id: req.userData.userId,
              },
              {
                $set: updateData,
              },
              {
                new: true,
              }
            ).exec((error, response) => {
              if (response) {
                return responseModule.successResponse(res, {
                  success: 1,
                  message: "Password reset successfully",
                  data: {},
                });
              }
            });
          } else {
            console.log();
            return responseModule.errorResponse(res, {
              success: 0,
              message: "Old Password is incorrect",
              data: {},
            });
          }
        }
      );
    }
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message,
      data: {},
    });
  }
};

export const createORupdateNotificationSettings = async (req, res) => {
  try {
    let data = {
      isDeal: req.body.isDeal || false,
      isPledge: req.body.isPledge || false,
      isEvent: req.body.isEvent || false,
      isNewsLetter: req.body.isNewsLetter || false,
      profile: req.userData.profileId,
    };

    let find = await NotificationSettings.findOne({
      profile: req.userData.profileId,
    }).exec();
    if (find) {
      const notificationSettings = await NotificationSettings.findOneAndUpdate(
        {
          profile: req.userData.profileId,
        },
        {
          $set: data,
        },
        {
          new: true,
        }
      ).exec((error, response) => {
        console.log("error -1", error);
        if (response) {
          return responseModule.successResponse(res, {
            success: 1,
            message: "Notification settings updated successfully",
            data: response,
          });
        } else {
          return responseModule.errorResponse(res, {
            success: 0,
            message: "Could not update notification settings",
            data: {},
          });
        }
      });
    } else {
      let notification = new NotificationSettings(data);
      notification.save();
      return responseModule.successResponse(res, {
        success: 1,
        message: "Notification settings updated successfully",
        data: notification,
      });
    }
  } catch (error) {
    console.log("error", error);
    return responseModule.errorResponse(res, {
      success: 0,
      message: "Could not update notification settings",
      data: {},
    });
  }
};

export const update2StepVerification = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      {
        _id: req.userData.userId,
      },
      {
        $set: { is2StepVerificationOn: req.body.is2StepVerificationOn },
      },
      {
        new: true,
      }
    ).exec((error, response) => {
      if (error) {
        if (error.name == "ValidationError" || "MongoServerError") {
          return res.status(400).json({
            success: 0,
            message: error.message,
            response: 400,
            data: {},
          });
        }
        return responseModule.errorResponse(res, {
          success: 0,
          message: "Could not update user details",
        });
      } else {
        return responseModule.successResponse(res, {
          success: 1,
          message: `${req.body.is2StepVerificationOn ? "Enabled" : "Disabled"
            } 2-step verification for your unreal account`,
        });
      }
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: "Could not update user details",
    });
  }
};
export const updateUserStatus = async (req, res) => {
  try {
     
    const profile = await UserProfile.findOneAndUpdate(
      {
        _id: req.body.profileId,
      },
      {
        $set: { tier: req.body.tierId },
      },
      {
        new: true,
      }
    );

    const user = await User.findOneAndUpdate(
      {
        _id: req.body.userId,
      },
      {
        $set: { isBlocked: req.body.isBlocked || false },
      },
      {
        new: true,
      }
    ).exec((error, response) => {
      if (error) {
        if (error.name == "ValidationError" || "MongoServerError") {
          return res.status(400).json({
            success: 0,
            message: error.message,
            response: 400,
            data: {},
          });
        }
        return responseModule.errorResponse(res, {
          success: 0,
          message: "Could not update user details",
        });
      } else {
        return responseModule.successResponse(res, {
          success: 1,
          message: `User account details has been updated successfully`,
        });
      }
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: "Could not update user details",
    });
  }
};

export const send2StepVerificationMail = async (userName, email, otp) => {
  try {
    const tmpl = fs.readFileSync(
      require.resolve("../../../../../templates/two-setp-verification.ejs"),
      "utf8"
    );
    const html = ejs.render(tmpl, {
      userName: userName,
      email: email,
      otp: otp,
      year: new Date().getFullYear(),
    });

    let subject = "2 Step Verification Code - Unreal";
    let send = await sendMail(email, subject, html);
  } catch (error) { }
};

export const otpVerification = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).exec();

    if (user.verificationOtp == req.body.otp) {
      return responseModule.successResponse(res, {
        success: 1,
        message: "Otp verified successfully",
        data: {},
      });
    } else {
      return res.status(400).json({
        success: 0,
        message: "Invalid Otp",
        response: 401,
        data: {},
      });
    }
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export const forgotPassword = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email })
    if (user) {
      let userProfile = UserProfile.findOne({ user: user._id })

      const token = jwt.sign(
        {
          userId: user._id,
        },
        config.JWT_KEY,
        {
          expiresIn: 600,
        }
      );

      let link = `https://159.89.192.6/reset-password?token=${token}`;
      const tmpl = fs.readFileSync(
        require.resolve("../../../../../templates/reset-password.ejs"),
        "utf8"
      );
      const html = ejs.render(tmpl, {
        userName: userProfile.userName,
        email: user.email,
        link: link,
        year: new Date().getFullYear(),
      });

      let subject = "Reset your password - Unreal";
     // user.email ="es6developer@gmail.com";
      let send = await sendMail(user.email, subject, html);
      return responseModule.successResponse(res, {
        success: 1,
        message: "Password reset link sent, Check mail",
        data: {},
      });
    } else {
      return responseModule.errorResponse(res, {
        success: 0,
        message: "Email is not registered",
      });
    }

  } catch (error) {
    console.log("error", error)
    return responseModule.errorResponse(res, {
      success: 0,
      message: "Something went wrong",
    });
  }
};

export const resetNewPassword = async (req, res) => {
  try {
    const decoded = jwt.verify(req.body.token, config.JWT_KEY)

    let updateData = {
      password: bcrypt.hashSync(req.body.newPassword, 10),
    };
    const user = await User.findOneAndUpdate(
      {
        _id: decoded.userId,
      },
      {
        $set: updateData,
      },
      {
        new: true,
      }
    ).exec((error, response) => {
      if (response) {
        return responseModule.successResponse(res, {
          success: 1,
          message: "Password reset successfully",
          data: {},
        });
      }
    });


  } catch (error) {
    console.log("error", error)
    return responseModule.errorResponse(res, {
      success: 0,
      message: "Invalid password reset link or link expired",
    });
  }
}
