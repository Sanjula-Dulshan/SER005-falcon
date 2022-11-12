import User from "../models/userModel.js";
import { customAlphabet } from "nanoid";
import bcrypt from "bcrypt";
import sendMail from "./sendMail.js";
import proofRequestMail from "./proofRequestMail.js";
import resetMail from "./resetMail.js";
import Mongoose from "mongoose";
const nanoid = customAlphabet("1234567890", 4);

const userCtrl = {
  //send the OTP and verify the email and register the user
  registerUser: async (req, res) => {
    try {
      const { email, name, username, password, mobile, role } = req.body;

      //Generate random OTP
      const otp = nanoid();

      //Check if email already exists
      const user = await User.findOne({ username });
      if (user) {
        return res.json({
          msg: "User already exists",
        });
      }

      //Hash password
      const passwordHash = await bcrypt.hash(password, 12);
      const otpHash = await bcrypt.hash(otp, 12);

      //Create new user
      const newUser = {
        email,
        name,
        username,
        password: passwordHash,
        mobile,
        otpHash,
        role,
      };

      try {
        await User.create(newUser).then((user) => {
          res.status(200).json(user);

          sendMail(email, username, otp);
          res.json({
            msg: "Register Success! Please activate your email to start.",
          });
        });
      } catch (err) {
        res.status(400).json(err);
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  },
  //verify the OTP and activate the user
  verifyUser: async (req, res) => {
    try {
      const { otp, username } = req.body;
      const user = await User.findOne({ username });
      let isMatch;

      if (!user) {
        return res.json({
          msg: "User does not exist",
        });
      }

      isMatch = await bcrypt.compare(otp, user.otpHash);

      if (!isMatch) {
        return res.json({
          msg: "Incorrect OTP",
        });
      }

      await User.findOneAndUpdate(
        { username },
        {
          isVerify: true,
        }
      );

      res.json({
        msg: "Account has been activated!",
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  },
  //login the verified user
  loginUser: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      let isMatch;

      if (!user) {
        return res.json({
          msg: "User does not exist",
        });
      }

      isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.json({
          msg: "Incorrect password",
        });
      }

      if (!user.isVerify) {
        return res.json({
          msg: "Email not verified",
        });
      }

      res.json({
        msg: "Login Success!",
        user,
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  },

  //send user to password reset otp
  sendPasswordResetOtp: async (req, res) => {
    try {
      const { username } = req.body;

      const user = await User.findOne({ username });

      //Generate random OTP
      const otp = nanoid();

      //Hash otp
      const otpHash = await bcrypt.hash(otp, 12);

      await User.findOneAndUpdate({ username }, { otpHash });

      resetMail(user.email, user.name, otp);
      res.json({
        msg: "Password reset OTP sent!",
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  },

  //verify the OTP and reset the password
  resetPassword: async (req, res) => {
    try {
      const { code, username, password } = req.body;
      console.log("req.body: ", req.body);
      const user = await User.findOne({ username });
      let isMatch;
      console.log("user: ", user);
      isMatch = await bcrypt.compare(code, user.otpHash);

      if (!isMatch) {
        return res.json({
          msg: "Incorrect OTP",
        });
      }

      //Hash password
      const passwordHash = await bcrypt.hash(password, 12);

      await User.findOneAndUpdate(
        { username },
        {
          password: passwordHash,
        }
      ).then(() => {
        res.json({
          msg: "Password reset success!",
        });
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  },

  //get all users without admin and password with approved
  getUsers: async (req, res) => {
    try {
      const users = await User.find({
        role: { $ne: "Admin" },
        approval: false,
      }).select("-password");
      res.json(users);
    } catch (err) {
      console.log("Error: ", err);
    }
  },
  //approve or reject the user
  approveUser: async (req, res) => {
    try {
      const { _id, approvalStatus } = req.body;

      if (approvalStatus === "Approve") {
        try {
          await User.findOneAndUpdate(
            { _id },
            {
              approval: true,
            }
          ).then((user) => {
            res.json({
              msg: "User Approved",
              user,
            });
          });
        } catch (err) {
          res.status(400).json(err);
        }
      } else {
        try {
          await User.findOneAndDelete({ _id });
          return res.json({
            msg: "User rejected",
          });
        } catch (err) {
          res.status(400).json(err);
        }
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  },

  //send mail to the user requesting proof documents
  requestProof: async (req, res) => {
    try {
      const { _id } = req.body;

      //convert id to object id
      const id = Mongoose.Types.ObjectId(_id);

      //pipe line to get the user email and name using _id
      const user = await User.aggregate([
        {
          $match: {
            _id: id,
          },
        },
        {
          $project: {
            email: 1,
            name: 1,
          },
        },
      ]).then((user) => {
        res.json(user);
        //send mail to the user
        console.log("User: ", user);
        console.log(user[0].email, user[0].name);
        proofRequestMail(user[0].email, user[0].name);
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  },
};

export default userCtrl;
