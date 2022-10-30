import User from "../models/userModel.js";
import bcrypt from "bcrypt";

//register user route
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role, username, mobile, status } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "The email already exists." });
    }

    //encrypt password
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: passwordHash,
      role,
      username,
      mobile,
      status,
    });
    await newUser.save();
    res.json({ msg: "Register Success!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});
