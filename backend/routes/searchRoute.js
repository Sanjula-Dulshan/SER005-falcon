import express from "express";
const router = express.Router();

import searchCtrl from "../controllers/SearchCtrl.js";

router.post("/createSearchRoute", searchCtrl.createSearchRoute);

export default router;
