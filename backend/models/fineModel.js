import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FineSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    typeOfFine: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Fine = mongoose.model("Fine", FineSchema);
export default Fine;
