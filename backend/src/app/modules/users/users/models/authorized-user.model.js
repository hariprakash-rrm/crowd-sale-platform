import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

/**
 * authorizedAccountSchema Schema
 */
const authorizedAccountSchema = Schema({
    profile: {
        type: ObjectId, ref: 'UserProfile' 
    },
    account: {
        type: String,
        uppercase: true,
        lowercase: true,
        unique: true,
        sparse: true
    },
    isIncluded: {
        type: Boolean,
        default:false
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('authorizedAccount', authorizedAccountSchema);