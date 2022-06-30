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
      const pools = new Pools(data);
      pools.save().exec();
      return true;
    }
  } catch (error) {}
};

export const getPoolsList = async(req, res)=>{
  try {
    
    let pools = await Pools.find({}).sort([['createdAt', -1]]).select()
    return responseModule.successResponse(res, {
      success: 1,
      message: "Pools fetched successfully",
      data: pools,
    });

  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message,
      data: {},
    });
  }
}
export const updatePools =async(req, res) =>{
try {
  let data = {
    roadMap:req.body?.roadMap,
    team:req.body?.team,
    vcs:req.body?.vcs,
    fackBookUrl:req.body?.fackBookUrl,
    instagramUrl:req.body?.instagramUrl,
    linkedInUrl:req.body?.linkedInUrl,
    image:req.body?.image,
    poolsStatus:req.body?.poolsStatus,
  }
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

} catch (error) {
  
}
}