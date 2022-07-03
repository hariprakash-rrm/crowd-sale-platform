import Tier from "./../models/tier.model";
const responseModule = require("../../../../../config/response");


export const createTier = async(req, res)=>{
    try {
        let tier = new Tier(req.body);
        tier.save();
        return responseModule.successResponse(res, {
            success: 1,
            message: "Tier created successfully",
            data: tier,
          });
    } catch (error) {
        return responseModule.errorResponse(res, {
            success: 0,
            message: error.message || 'Something went wrong!, Please try again',
            data: {},
          });
    }
}

export const updateTier = async(req, res)=>{
    try {
        const tier = await Tier.findOneAndUpdate(
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
            message: "Tier updated successfully",
            data: tier,
          });
    } catch (error) {
        return responseModule.errorResponse(res, {
            success: 0,
            message: error.message || 'Something went wrong!, Please try again',
            data: {},
          });
    }
}

export const getTiers = async(req, res)=>{
    try {
        let tier = await Tier.find({});
        return responseModule.successResponse(res, {
            success: 1,
            data: tier,
          });
    } catch (error) {
        return responseModule.errorResponse(res, {
            success: 0,
            message: error.message || 'Something went wrong!, Please try again',
            data: {},
          });
    }
}