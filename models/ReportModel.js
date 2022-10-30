import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
   Name : {
         type: String,
            required: true
    },
    Route : {
        type: String,
        required: true
    },
    Date : {
        type: Date,
        required: true
    },
    Cost : {
        type: Number,
        required: true
    },
    FineType : {
        type: String,
        required: true
    },
    FineAmount : {
        type: Number,
        required: true
    },
    FineReason : {
        type: String,
        required: true
    }
});

export default mongoose.model("Report", ReportSchema);