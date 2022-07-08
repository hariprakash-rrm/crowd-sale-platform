import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

/**
 * notificationSettingsSchema Schema
 */
const notificationSettingsSchema = Schema({
    profile: {
        type: ObjectId, ref: 'UserProfile' 
    },
    isDeal: {
        type: Boolean
    },
    isPledge: {
        type: Boolean
    },
    isEvent: {
        type: Boolean
    },
    isNewsLetter: {
        type: Boolean
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('notificationSettings', notificationSettingsSchema);