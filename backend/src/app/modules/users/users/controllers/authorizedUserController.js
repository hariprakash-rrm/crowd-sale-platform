import AuthorizedAccount from "../models/authorized-user.model";
const responseModule = require("../../../../../config/response");

export const createAuthorizedAccount = async (req, res) => {
  try {
    let addressList = req.body.address;
    for (let index = 0; index < addressList.length; index++) {
      const account = addressList[index];
      let find = await AuthorizedAccount.findOne({ account: account });
      if (find) {
        const update = await AuthorizedAccount.findOneAndUpdate(
          {
            account: account,
          },
          {
            $set: { isIncluded: req.body.isIncluded },
          },
          {
            new: true,
          }
        ).exec();
      } else {
        let data = {
          account: account,
          profile: req.userData.profileId,
          isIncluded: req.body.isIncluded,
        };
        let authorizedAccount = new AuthorizedAccount(data);
        authorizedAccount.save();
      }
    }
    return responseModule.successResponse(res, {
      success: 1,
      message: "Authorized Account updated successfully",
      data: {},
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message || "Something went wrong!, Please try again",
      data: {},
    });
  }
};

export const getAuthorizedAccounts = async (req, res) => {
  try {
    let authorizedAccount = await AuthorizedAccount.find({});
    return responseModule.successResponse(res, {
      success: 1,
      data: authorizedAccount,
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message || "Something went wrong!, Please try again",
      data: {},
    });
  }
};
