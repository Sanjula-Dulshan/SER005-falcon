import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cardRouter from "./routes/cardRouter.js";
import userRouter from "./routes/userRouter.js";
import busRouter from "./routes/bus.router.js";
import routeRouter from "./routes/routes.route.js";
import WalletRouter from "./routes/walletRouter.js";
import ticketRouter from "./routes/ticket.route.js";

dotenv.config();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

//Routes
app.use("/card", cardRouter);
app.use("/user", userRouter);
app.use("/bus", busRouter);
app.use("/route", routeRouter);
app.use("/wallet", WalletRouter);
app.use("/ticket", ticketRouter);

// Connect to MongoDB
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.log("MongoDB connection Failed...", err.message);
    process.exit();
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
