import PoolStacking from "./../models/pool-stacking.model";
import Pools from "./../models/pools.model";
const responseModule = require("../../../../../config/response");

export const createPoolStacking = async(req, res)=>{
    try {
        req.body.profile =   req.userData.profileId;
        let pool = await Pools.findOne({ id: req.body.poolId });
        req.body.pool = pool._id;
        let poolStacking = new PoolStacking(req.body);
        poolStacking.save();
        return responseModule.successResponse(res, {
            success: 1,
            message: "Pool Stacking created successfully",
            data: poolStacking,
          });
    } catch (error) {
        return responseModule.errorResponse(res, {
            success: 0,
            message: error.message || 'Something went wrong!, Please try again',
            data: {},
          });
    }
}

export const updatePoolStacking = async(req, res)=>{
    try {
        const poolStacking = await PoolStacking.findOneAndUpdate(
            {
              _id: req.params.id,
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
            message: "Pool Stacking updated successfully",
            data: poolStacking,
          });
    } catch (error) {
        return responseModule.errorResponse(res, {
            success: 0,
            message: error.message || 'Something went wrong!, Please try again',
            data: {},
          });
    }
}

export const getPoolStackings = async(req, res)=>{
    try {
        let poolStacking = await PoolStacking.find({});
        return responseModule.successResponse(res, {
            success: 1,
            data: poolStacking,
          });
    } catch (error) {
        return responseModule.errorResponse(res, {
            success: 0,
            message: error.message || 'Something went wrong!, Please try again',
            data: {},
          });
    }
}