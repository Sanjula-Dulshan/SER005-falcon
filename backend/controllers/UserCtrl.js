import User from "../models/userModel.js";
import { customAlphabet } from "nanoid";
import bcrypt from "bcrypt";
import sendMail from "./sendMail.js";
const nanoid = customAlphabet("1234567890", 4);

const userCtrl = {
  //send the OTP and verify the email and register the user
  registerUser: async (req, res) => {
    console.log(req.body);
    try {
      const { email, name, username, password, mobile } = req.body;

      //Generate random OTP with 8 characters
      const otp = nanoid();
      console.log("OTP: ", otp);

      //Check if email already exists
      const user = await User.findOne({ email });
      console.log("20: ", user);
      if (user) {
        return res.status(400).json({
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
};

export default userCtrl;
