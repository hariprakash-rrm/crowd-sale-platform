import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

/**
 * lpTokenSchema Schema
 */
const lpTokenSchema = Schema({
    lpToken: {
        type: String,
        uppercase: true,
        lowercase: true,
        unique: true,
        sparse: true
    },
    source: {
        type: String
        },
}, {
    timestamps: true
});

module.exports = mongoose.model('lpToken', lpTokenSchema);