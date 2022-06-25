import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

/**
 * walletAddressSchema Schema
 */
const walletAddressSchema = Schema({
    user: {
        type: ObjectId, ref: 'user' 
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