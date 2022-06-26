import mongoose from 'mongoose'

/**
 * User Schema
 */
const userSchema = mongoose.Schema({
  
    email: {
        type: String,
        unique: true,
        validate: {
          validator: function (v) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
          },
          message: "Please enter a valid email"
        },
        required: [true, "User Email must not be empty"]
      },
    password: {
        type: String,
        required: true
    },
    otp:{
        type: Number,
    },
    status: {
        type : Boolean,
        default: false
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);