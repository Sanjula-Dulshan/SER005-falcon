import mongoose from "mongoose";
const Schema = mongoose.Schema;

const walletSchema = new Schema(
  {
    user_id: {
      type: String,
    },
    amount: {
      type: Number,
      default: 0,
    },
    loan_amount: {
      type: Number,
      default: 0,
    }
    },
  {
    timestamps: true,
  }
);

const Wallet = mongoose.model("Wallet", walletSchema);
export default Wallet;
