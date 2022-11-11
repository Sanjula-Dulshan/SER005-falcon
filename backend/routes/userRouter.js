import express from "express";
import userCtrl from "../controllers/userCtrl.js";
const router = express.Router();

router.post("/register", userCtrl.registerUser);
router.put("/verify", userCtrl.verifyUser);
router.post("/login", userCtrl.loginUser);
router.get("/new", userCtrl.getUsers);
router.put("/approve", userCtrl.approveUser);
export default router;
