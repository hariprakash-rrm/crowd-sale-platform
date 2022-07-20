import BlockListAccount from "./../models/blocklist-account.model";
const responseModule = require("../../../../../config/response");

export const createBlockListAccount = async (req, res) => {
  try {
    let addressList = req.body.address;
    for (let index = 0; index < addressList.length; index++) {
      const account = addressList[index];
      let find = await BlockListAccount.findOne({ account: account });
      if (find) {
        const update = await BlockListAccount.findOneAndUpdate(
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
        let blockListAccount = new BlockListAccount(data);
        blockListAccount.save();
      }
    }
    return responseModule.successResponse(res, {
      success: 1,
      message: "BlockList Account updated successfully",
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

export const getBlockListAccounts = async (req, res) => {
  try {
    let blockListAccount = await BlockListAccount.find({});
    return responseModule.successResponse(res, {
      success: 1,
      data: blockListAccount,
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message || "Something went wrong!, Please try again",
      data: {},
    });
  }
};
