import express from "express";
const router = express.Router();

import banUserCtrl from "../controllers/BanUserCtrl.js";

router.post("/banUser", banUserCtrl.banUser);
router.get("/getAllBanUser", banUserCtrl.getAllBanUser);

export default router;