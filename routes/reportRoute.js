import express from "express";
const router = express.Router();

import reportCtrl from "../controllers/ReportCtrl.js";

router.post("/createFine", reportCtrl.createFine);
router.get("/getAllFine", reportCtrl.getAllFine);

export default router;