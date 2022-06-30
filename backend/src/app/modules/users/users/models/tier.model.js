import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

/**
 * tierSchema Schema
 */
const tierSchema = Schema({
    tierName: {
        type: String,
    },
    tierValue: {
        type: Number,
    },
    tierStatus: {
        type : Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Tier', tierSchema);