import User from "../models/userModel.js";
import { customAlphabet } from "nanoid";
import bcrypt from "bcrypt";
import sendMail from "./sendMail.js";
const nanoid = customAlphabet("1234567890", 4);

const userCtrl = {
  //send the OTP and verify the email and register the user
  registerUser: async (req, res) => {
    try {
      const { email, name, username, password, mobile, role } = req.body;

      //Generate random OTP
      const otp = nanoid();

      //Check if email already exists
      const user = await User.findOne({ email });
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
        await User.findOneAndDelete({ _id: id });
        return res.json({
          msg: "User rejected",
        });
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  },
};

export default userCtrl;
