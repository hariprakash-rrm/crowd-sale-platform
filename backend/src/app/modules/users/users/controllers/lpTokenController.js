import LpToken from "./../models/wallet-address.model";
const responseModule = require("../../../../../config/response");

export const createLpToken = async (req, res) => {
  try {
    let lpToken = new LpToken(req.body);
    lpToken.save();
    return responseModule.successResponse(res, {
      success: 1,
      message: "LpToken created successfully",
      data: lpToken,
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message || "Something went wrong!, Please try again",
      data: {},
    });
  }
};

export const updateLpToken = async (req, res) => {
  try {
    const lpToken = await LpToken.findOneAndUpdate(
      {
        id: req.params.id,
      },
      {
        $set: req.body,
      },
      {
        new: true,
      }
    ).exec();
    return responseModule.successResponse(res, {
      success: 1,
      message: "LpToken updated successfully",
      data: lpToken,
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message || "Something went wrong!, Please try again",
      data: {},
    });
  }
};

export const getLpTokens = async (req, res) => {
  try {
    let lpToken = await LpToken.find({});
    return responseModule.successResponse(res, {
      success: 1,
      data: lpToken,
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message || "Something went wrong!, Please try again",
      data: {},
    });
  }
};

export const removeLpToken = async (req, res) => {
  try {
    let lpToken = LpToken.find({ _id: req.query.lpTokenId })
      .remove()
      .exec();
    return responseModule.successResponse(res, {
      success: 1,
      data: {},
      message: "Lp Token removed successfully",
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message || "Something went wrong!, Please try again",
      data: {},
    });
  }
};
