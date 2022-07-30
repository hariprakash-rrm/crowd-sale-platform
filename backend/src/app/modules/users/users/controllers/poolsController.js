import Pools from "./../models/pools.model";
const responseModule = require("../../../../../config/response");

/**
 * Function to create a Pools
 * @param {Object} req
 * @param {Object} res
 */
export const createOrUpdatePools = async (data) => {
  try {
    let pool = await Pools.findOne({ id: data.id });
    if (pool) {
      const pools = await Pools.findOneAndUpdate(
        {
          id: data.id,
        },
        {
          $set: data,
        },
        {
          new: true,
        }
      ).exec();
      return true;
    } else {
      data["roadMap"] = "";
      data["team"] = "";
      data["vcs"] = "";
      data["fackBookUrl"] = "";
      data["instagramUrl"] = "";
      data["linkedInUrl"] = "";
      data["image"] = "";
      const pools = new Pools(data);
      pools.save();
      return true;
    }
  } catch (error) {}
};

export const createPool = async (req, res) => {
  try {
    const pools = new Pools(req.body);
    pools.save();
    return responseModule.successResponse(res, {
      success: 1,
      message: "Pools created successfully",
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

export const getPoolsList = async (req, res) => {
  try {
    let poolsCompleted = await Pools.find({
      poolsStatus: "completed",
    })
      .sort([["createdAt", -1]])
      .select();
    let poolsUpcoming = await Pools.find({
      poolsStatus: "upcoming",
    })
      .sort([["createdAt", -1]])
      .select();
    let poolsOngoing = await Pools.find({
      poolsStatus: "ongoing",
    })
      .sort([["createdAt", -1]])
      .select();
    let poolsMyDeal = await Pools.find({
      poolsStatus: "poolsMyDeal",
    })
      .sort([["createdAt", -1]])
      .select();
    let response = {
      poolsMyDeal,
      poolsOngoing,
      poolsUpcoming,
      poolsCompleted,
    };

    return responseModule.successResponse(res, {
      success: 1,
      message: "Pools fetched successfully",
      data: response,
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message,
      data: {},
    });
  }
};

export const getPoolsById = async (req, res) => {
  try {
    let pool = await Pools.findOne({ id: req.params.id }).select();
    return responseModule.successResponse(res, {
      success: 1,
      message: "Pool fetched successfully",
      data: pool,
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message,
      data: {},
    });
  }
};
export const updatePools = async (req, res) => {
  try {
    let data = {
      roadMap: req.body?.roadMap,
      team: req.body?.team,
      vcs: req.body?.vcs,
      fackBookUrl: req.body?.fackBookUrl,
      instagramUrl: req.body?.instagramUrl,
      linkedInUrl: req.body?.linkedInUrl,
      image: req.body?.image,
      poolsStatus: req.body?.poolsStatus,
    };
    const pools = await Pools.findOneAndUpdate(
      {
        id: req.params.id,
      },
      {
        $set: data,
      },
      {
        new: true,
      }
    ).exec();
    return responseModule.successResponse(res, {
      success: 1,
      message: "Pool updated successfully",
      data: pools,
    });
  } catch (error) {}
};
