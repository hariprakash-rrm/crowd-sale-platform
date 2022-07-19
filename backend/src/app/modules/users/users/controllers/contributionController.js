import Contribution from "./../models/contribution.model";
import Pools from "./../models/pools.model";

const responseModule = require("../../../../../config/response");

export const createContribution = async (req, res) => {
  try {
    let pool = await Pools.findOne({ id: req.body.poolId });
    req.body.source = pool.source;
    req.body.pool = pool._id;
    req.body.createdBy =  req.userData.profileId;
    const pools = new Contribution(req.body);
    pools.save();
    return responseModule.successResponse(res, {
      success: 1,
      message: "Contributed successfully",
      data: pools,
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message || "Something went wrong, Please try again",
      data: {},
    });
  }
};
