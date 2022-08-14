import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

/**
 * contributionSchema Schema
 */
const contributionSchema = Schema({
    createdBy: {
        type: ObjectId, ref: 'UserProfile' 
    },
    pool: {
        type: ObjectId, ref: 'Pools' 
    },
    poolId: {
        type: String,
    },
    poolName: {
        type: String,
    },
    symbol: {
        type: String,
    },
    amount: {
        type: Number,
    },
    transactionHash: {
        type: String,
    },
    blockNumber: {
        type: String,
    },
    contractAddress: {
        type: String,
        uppercase: true,
        lowercase: true,
        sparse: true
    },
    fee: {
        type: String,
    },
    source: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('contribution', contributionSchema);