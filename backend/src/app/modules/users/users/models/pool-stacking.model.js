import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

/**
 * poolStackingSchema Schema
 */
const poolStackingSchema = Schema({
    profile: {
        type: ObjectId, ref: 'UserProfile' 
    },
    pool: {
        type: ObjectId, ref: 'UserProfile' 
    },
    poolId: {
        type: Number,
    },
    timestamp: {
        type: Number,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('poolStacking', poolStackingSchema);