import express from "express";
import userCtrl from "../controllers/userCtrl.js";
const router = express.Router();

router.post("/register", userCtrl.registerUser);

export default router;
