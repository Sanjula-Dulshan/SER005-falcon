import mongoose from "mongoose";
const Schema = mongoose.Schema;


const SearchRouteSchema = new Schema({
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

export default mongoose.model("SearchRoute", SearchRouteSchema);


