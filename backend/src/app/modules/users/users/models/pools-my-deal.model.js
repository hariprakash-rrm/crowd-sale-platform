import mongoose from "mongoose";
/**
 * Pools Schema
 */
const poolsMyDealSchema = mongoose.Schema(
  {
    otp: {
      type: Number,
    },
    lpToken: {
      type: String,
    },
    name: {
      type: String,
    },
    symbol: {
      type: String,
    },
    startTime: {
      type: String,
    },
    endTime: {
      type: String,
    },
    poolStakableAmount: {
      type: Number,
    },
    minimumContributeAmount: {
      type: String,
    },
    id: {
      type: String,
    },
    humanEndTime: {
      type: String,
    },
    currentlyStaked: {
      type: Number,
    },
    currentPercentage: {
      type: Number,
    },
    source: {
      type: String,
    },
    poolsStatus: {
      type: String,
    },
    roadMap: {
      type: String,
    },
    team: {
      type: String,
    },
    vcs: {
      type: String,
    },
    faceBookUrl: {
      type: String,
    },
    instagramUrl: {
      type: String,
    },
    linkedInUrl: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PoolsMyDeal", poolsMyDealSchema);
