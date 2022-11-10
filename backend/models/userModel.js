import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
    },
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    mobile: {
      type: String,
      required: [true, "Please enter your mobile number"],
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Please enter a password"],
    },
    role: {
      type: String,
      required: [true, "Please enter your role"],
    },
    username: {
      type: String,
      required: [true, "Please enter your username"],
      trim: true,
    },
    status: {
      type: String,
      default: "active",
    },
    otpHash: {
      type: String,
      required: true,
    },
    isVerify: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", userSchema);
export default Users;
