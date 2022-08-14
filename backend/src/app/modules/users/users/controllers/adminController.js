import User from "../models/user.model";
import WalletAddress from "../models/wallet-address.model";
import Pools from "./../models/pools.model";
import UserProfile from "../models/user-profile.model";
const responseModule = require("../../../../../config/response");
import Contribution from "./../models/contribution.model";

export const readAllUserData = async (req, res) => {
  try {
    let filter = {};
    if (req.body.search) {
      let search = req.body.search;
      filter = {
        $or: [
          { poolName: { $regex: search, $options: "i" } },
          { poolId: { $regex: search, $options: "i" } },
          { source: { $regex: search, $options: "i" } },
        ],
      };
    }
    let user = await User.findOne({ email: req.body.email }).select(
      "-password"
    );
    let userProfile = await UserProfile.findOne({ user: user._id });
    let allContribution = await Contribution.find({
      $and: [{ createdBy: userProfile._id  }, filter],
    })
      .sort([["createdAt", -1]])
      .select();
    console.log(JSON.stringify({
      $and: [{ createdBy: userProfile._id }, filter],
    }))
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
      contributions: allContribution,
      user,
      profile: userProfile,
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
