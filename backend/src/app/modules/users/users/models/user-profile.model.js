import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
/**
 * userProfileSchema Schema
 */
const userProfileSchema = Schema({
    user: {
        type: ObjectId, ref: 'user' 
    },
    userName: {
        type: String,
    },
    name: {
        type: String,
        required: [true, 'Name must not be empty'],
    },
    telegramUrl: {
        type: String,
    },
    mobile: {
        type: String,
    },
    bio: {
        type: String,
    },
    location: {
        type: String,
    },
    profileImage: {
        type: String,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('UserProfile', userProfileSchema);