import mongoose from "mongoose";
/**
 * Pools Schema
 */
const poolsSchema = mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pools", poolsSchema);
