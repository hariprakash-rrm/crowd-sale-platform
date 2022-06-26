import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

/**
 * walletAddressSchema Schema
 */
const walletAddressSchema = Schema({
    profile: {
        type: ObjectId, ref: 'UserProfile' 
    },
    walletAddress: {
        type: String,
        uppercase: true,
        lowercase: true,
        unique: true,
        sparse: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('WalletAddress', walletAddressSchema);