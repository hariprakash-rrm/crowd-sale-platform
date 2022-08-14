import WalletAddress from "./../models/wallet-address.model";
const responseModule = require("../../../../../config/response");

export const createWalletAddress = async (req, res) => {
  try {
    if(req.body._id){
      const walletAddressUpdate = await WalletAddress.findOneAndUpdate(
        {
          id: req.body._id,
        },
        {
          $set: req.body,
        },
        {
          new: true,
        }
      ).exec();
    }else{
      req.body.profile = req.userData.profileId;
      let walletAddress = new WalletAddress(req.body);
      // walletAddress.save();
      await walletAddress.save(async (error, result) => {
        console.log("error", error);
        if (error) {
          if (error.name == "ValidationError" || "MongoServerError") {
            return res.status(400).json({
              success: 0,
              message:
                error.code === 11000
                  ? "Wallet Address already exists"
                  : error.message,
              response: 400,
              data: {},
            });
          }else{
            return responseModule.errorResponse(res, {
              success: 0,
              message: error.message,
              data: {},
            });
          }
        
    }else{
      return responseModule.successResponse(res, {
        success: 1,
        message: "WalletAddress saved successfully",
        data: walletAddress,
      });
    }
  })
}
    
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message || "Something went wrong!, Please try again",
      data: {},
    });
  }
};

export const updateWalletAddress = async (req, res) => {
  try {
    const walletAddress = await WalletAddress.findOneAndUpdate(
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
      message: "WalletAddress updated successfully",
      data: walletAddress,
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message || "Something went wrong!, Please try again",
      data: {},
    });
  }
};

export const getWalletAddress = async (req, res) => {
  try {
    let walletAddress = await WalletAddress.find({profile: req.userData.profileId});
    return responseModule.successResponse(res, {
      success: 1,
      data: walletAddress,
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message || "Something went wrong!, Please try again",
      data: {},
    });
  }
};

export const removeWalletAddress = async (req, res) => {
  try {
    let walletAddress = WalletAddress.find({ _id: req.query.walletId })
      .remove()
      .exec();
    return responseModule.successResponse(res, {
      success: 1,
      data: {},
      message: "Wallet address removed successfully",
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message || "Something went wrong!, Please try again",
      data: {},
    });
  }
};
