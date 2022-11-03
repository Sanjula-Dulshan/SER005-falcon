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

    routeID: {
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
        default: 0
    },

}, {timestamps: true});

const Bus = mongoose.model("bus",BusSchema);
export default Bus;


//sample json data
// {
//     "busName": "Kandy",
//     "mobile": "0771234567",
//     "routeID": "R001",
//     "busNumber": "B001",
//     "availableSeats": "30",
//     "passengerCount": "0"
// }