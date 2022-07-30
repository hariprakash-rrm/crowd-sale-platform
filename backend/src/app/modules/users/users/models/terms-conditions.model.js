import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

/**
 * TermsAndConditionsSchema Schema
 */
const TermsAndConditionsSchema = Schema({
    termsText: {
        type: String,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('TermsAndConditions', TermsAndConditionsSchema);