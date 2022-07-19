import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

/**
 * airdropTokenSchema Schema
 */
const airdropTokenSchema = Schema(
  {
    profile: {
      type: ObjectId,
      ref: "UserProfile",
    },
    rewardToken: {
      type: String,
    },
    recipient: [
      {
        type: String,
        uppercase: true,
        lowercase: true,
        sparse: true
      },
    ],
    amount: [
      {
        type: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("airdropToken", airdropTokenSchema);
