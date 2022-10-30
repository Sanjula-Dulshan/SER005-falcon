import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BanUserSchema = new Schema({
    BanID : {
        type: String,
        required: true
    },
    ConfirmMsg : {
        type: String,
        required: true
    },
    Remark : {
        type: String,
        required: true

    }
});

export default mongoose.model("BanUser", BanUserSchema);
