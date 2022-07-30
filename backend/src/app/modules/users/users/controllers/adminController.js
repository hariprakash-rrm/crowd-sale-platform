import User from "../models/user.model";
import WalletAddress from "../models/wallet-address.model";
import Pools from "./../models/pools.model";
import UserProfile from "../models/user-profile.model";
const responseModule = require("../../../../../config/response");
import Contribution from "./../models/contribution.model";

export const readAllUserData = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).select(
      "-password"
    );
    let userProfile = await UserProfile.findOne({ user: user._id });
    let allContribution = await Contribution.find({
      createdBy: userProfile._id,
    });
    let walletAddress = await WalletAddress.find({
        profile: userProfile._id,
      });

    let sumOfAmount = await Contribution.aggregate([
      { $match: { createdBy: userProfile._id } },
      {
        $group: {
          _id: { id: "$createdBy" },
          totalValue: { $sum: "$amount" },
          count: { $sum: 1 },
        },
      },
    ]);

    let response = {
      user,
      profile: userProfile,
      contributions: allContribution,
      bscTotal: sumOfAmount.length!=0?sumOfAmount[0]:sumOfAmount,
      walletAddress
    };

    return responseModule.successResponse(res, {
      success: 1,
      message: "User Details fetched successfully",
      data: response,
    });
  } catch (error) {
    console.log("error", error);
    return responseModule.successResponse(res, {
      success: 0,
      message: "Something went wrong for fetch user data",
      data: {},
    });
  }
};
