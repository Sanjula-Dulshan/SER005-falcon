import express from "express";
import { addFine } from "../controllers/fineCtrl.js";

const router = express.Router();

router.post("/addFine", addFine);

export default router;
