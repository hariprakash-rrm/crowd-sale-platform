import TransferOwnership from "./../models/transfer-ownership.model";
const responseModule = require("../../../../../config/response");


export const createTransferOwnership = async(req, res)=>{
    try {
        req.body.profile =   req.userData.profileId;
        let transferOwnership = new TransferOwnership(req.body);
        transferOwnership.save();
        return responseModule.successResponse(res, {
            success: 1,
            message: "Transfer Ownership created successfully",
            data: transferOwnership,
          });
    } catch (error) {
        return responseModule.errorResponse(res, {
            success: 0,
            message: error.message || 'Something went wrong!, Please try again',
            data: {},
          });
    }
}

export const updateTransferOwnership = async(req, res)=>{
    try {
        const transferOwnership = await TransferOwnership.findOneAndUpdate(
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
            message: "Transfer Ownership updated successfully",
            data: transferOwnership,
          });
    } catch (error) {
        return responseModule.errorResponse(res, {
            success: 0,
            message: error.message || 'Something went wrong!, Please try again',
            data: {},
          });
    }
}

export const getTransferOwnerships = async(req, res)=>{
    try {
        let transferOwnership = await TransferOwnership.find({});
        return responseModule.successResponse(res, {
            success: 1,
            data: transferOwnership,
          });
    } catch (error) {
        return responseModule.errorResponse(res, {
            success: 0,
            message: error.message || 'Something went wrong!, Please try again',
            data: {},
          });
    }
}