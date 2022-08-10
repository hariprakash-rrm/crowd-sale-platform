import { PoolImage } from "../../../../../config/poolImage";
import Pools from "./../models/pools.model";
import PoolsMyDeal from "./../models/pools-my-deal.model";
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
      data["image"] = PoolImage[data["source"]];
      console.log("data", data);
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
      data["faceBookUrl"] = "";
      data["instagramUrl"] = "";
      data["linkedInUrl"] = "";
      data["image"] = PoolImage[data["source"]];
      const pools = new Pools(data);
      pools.save();
      return true;
    }
  } catch (error) {}
};
export const createOrUpdatePoolsMyDeal = async (data) => {
  try {
    data['status']='poolsMyDeal'
    let pool = await PoolsMyDeal.findOne({ id: data.id });
    if (pool) {
      data["image"] = PoolImage[data["source"]];
      console.log("data", data);
      const pools = await PoolsMyDeal.findOneAndUpdate(
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
      data["faceBookUrl"] = "";
      data["instagramUrl"] = "";
      data["linkedInUrl"] = "";
      data["image"] = PoolImage[data["source"]];
      const pools = new PoolsMyDeal(data);
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
    let filter = {};
    if (req.query.search) {
      let search = req.query.search;
      filter = {
        $or: [
          { name: { $regex: search, $options: "i" } },
          { id: { $regex: search, $options: "i" } },
        ],
      };
    }

    let poolsCompleted = await Pools.find({
      $and: [{ poolsStatus: "completed" }, filter],
    })
      .sort([["endTime", -1]])
      .select();

    let poolsUpcoming = await Pools.find({
      $and: [{ poolsStatus: "upcoming" }, filter],
    })
      .sort([["startTime", 1]])
      .select();
    let poolsOngoing = await Pools.find({
      $and: [{ poolsStatus: "ongoing" }, filter],
    })
      .sort([["endTime", 1]])
      .select();
    let poolsMyDeal = await PoolsMyDeal.find({
      $and: [{ poolsStatus: "poolsMyDeal" }, filter],
    })
      .sort([["createdAt", -1]])
      .select();
    let response = {
      poolsCompleted,
      poolsMyDeal,
      poolsOngoing,
      poolsUpcoming,
    };
    if (req.query.isDefault == true) {
      return response;
    }
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
      faceBookUrl: req.body?.faceBookUrl,
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
