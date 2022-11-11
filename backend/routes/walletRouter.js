import express from "express";
const router = express.Router();

import WalletCtrl from "../controllers/WalletCtrl.js";

router.post("/new", WalletCtrl.createWallet);
router.patch("/update", WalletCtrl.updateWallet);
router.get("/details", WalletCtrl.viewWallet);
export default router;