import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BusSchema = new Schema({

    busName: {
        type: String,
        required : true
    },


    mobile: {
        type: String,
        required : true
    },

    busNumber: {
        type: String,
        required : true
    },


    availableSeats: {
        type: Number,
        required : true
    },

    passengerCount: {
        type: Number,
    },

}, {timestamps: true});

const Bus = mongoose.model("bus",BusSchema);
export default Bus;
