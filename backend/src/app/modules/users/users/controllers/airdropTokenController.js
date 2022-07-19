import AirdropToken from "./../models/airdrop-token.model";
const responseModule = require("../../../../../config/response");


export const createAirdropToken = async(req, res)=>{
    try {
        req.body.profile =   req.userData.profileId;
        let airdropToken = new AirdropToken(req.body);
        airdropToken.save();
        return responseModule.successResponse(res, {
            success: 1,
            message: "Airdrop Token created successfully",
            data: airdropToken,
          });
    } catch (error) {
        return responseModule.errorResponse(res, {
            success: 0,
            message: error.message || 'Something went wrong!, Please try again',
            data: {},
          });
    }
}

export const updateAirdropToken = async(req, res)=>{
    try {
        const airdropToken = await AirdropToken.findOneAndUpdate(
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
            message: "Airdrop Token updated successfully",
            data: airdropToken,
          });
    } catch (error) {
        return responseModule.errorResponse(res, {
            success: 0,
            message: error.message || 'Something went wrong!, Please try again',
            data: {},
          });
    }
}

export const getAirdropTokens = async(req, res)=>{
    try {
        let airdropToken = await AirdropToken.find({});
        return responseModule.successResponse(res, {
            success: 1,
            data: airdropToken,
          });
    } catch (error) {
        return responseModule.errorResponse(res, {
            success: 0,
            message: error.message || 'Something went wrong!, Please try again',
            data: {},
          });
    }
}