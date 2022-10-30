const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({

    tripID: {
        type: String,
        //required : true
    },

    token: {
        type: String,
        //required : true
    },

    busID: {
        type: String,
        required : true
    },

    conductorID: {
        type: String,
        //required : true
    },

    routeID: {
        type: String,
        //required : true
    },

    startTime: {
        type: Date,
       // required : true
    },

    endTime: {

        type: Date,
       // required : true
    },

    distance: {
        type: String,
       // required : true
    },

    startPoint: {
        type: String,
       // required : true
    },

    endPoint: {
        type: String,
       // required : true
    },

    passengerCount : {
        type: String,
       // required : true
    },

}, {timestamps: true});

const Trip = mongoose.model("trip",TripSchema);
module.exports = Trip;
