import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

/**
 * transferOwnershipSchema Schema
 */
const transferOwnershipSchema = Schema({
    profile: {
        type: ObjectId, ref: 'UserProfile' 
    },
    address: {
        type: String,
        uppercase: true,
        lowercase: true,
        unique: true,
        sparse: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('transferOwnership', transferOwnershipSchema);