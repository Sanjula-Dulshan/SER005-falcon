import express from "express";
const router = express.Router();

import WalletCtrl from "../controllers/WalletCtrl.js";

router.post("/new", WalletCtrl.createWallet);
router.patch("/update/:user_id", WalletCtrl.updateWallet);
router.get("/details/:user_id", WalletCtrl.viewWallet);
export default router;