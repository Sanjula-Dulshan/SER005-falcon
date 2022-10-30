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

//implement login with jwt token and cookie session
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect password." });
    }

    //if login success, create access token and refresh token
    const refresh_token = createRefreshToken({ id: user._id });
    res.cookie("refreshtoken", refresh_token, {
      httpOnly: true,
      path: "/user/refresh_token",
      maxAge: 7 * 24 * 60 * 60 * 1000, //7d
    });
    res.json({ msg: "Login Success!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

//create refresh token route
router.post("/refresh_token", (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;
    if (!rf_token) {
      return res.status(400).json({ msg: "Please Login or Register" });
    }
    jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(400).json({ msg: "Please Login or Register" });
      }
      const access_token = createAccessToken({ id: user.id });
      res.json({ access_token });
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

//create refresh token
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

//create access token
const createAccessToken = (user) => {
  try {
    const rf_token = req.cookies.refreshtoken;
    if (!rf_token) return res.status(400).json({ msg: "Please login now!" });

    jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).json({ msg: "Please login now!" });

      const access_token = createAccessToken({ id: user.id });
      res.json({ access_token });
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

//logout route
router.get("/logout", async (req, res) => {
  try {
    res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
    return res.json({ msg: "Logged out" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

export default router;
