const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusSchema = new Schema({
    busID: {
        type: String,
        required : true
    },

    busName: {
        type: String,
        required : true
    },


    conductorID: {
        type: String,
        required : true
    },

    busNumber: {
        type: String,
        required : true
    },
}, {timestamps: true});

const Bus = mongoose.model("bus",BusSchema);
module.exports = Bus;

/*
//sample json data

{
    "busID": "B001",
    "busName": "Kandy",
    "conductorID": "C001",
    "busNumber": "B001"
}

//sample json data

{
    "busID": "B002",
    "busName": "Kandy",
    "conductorID": "C002",
    "busNumber": "B002"
}

//sample json data

{
    "busID": "B003",
    "busName": "Kandy",
    "conductorID": "C003",
    "busNumber": "B003"
}

//sample json data

{
    "busID": "B004",
    "busName": "Kandy",
    "conductorID": "C004",
    "busNumber": "B004"
}

//sample json data

{
    "busID": "B005",
    "busName": "Kandy",
    "conductorID": "C005",
    "busNumber": "B005"
}

//sample json data

{
    "busID": "B006",
    "busName": "Kandy",
    "conductorID": "C006",
    "busNumber": "B006"
}

//sample json data

{
    "busID": "B007",
    "busName": "Kandy",
    "conductorID": "C007",
    "busNumber": "B007"
}

//sample json data

{
    "busID": "B008",
    "busName": "Kandy",
    "conductorID": "C008",
    "busNumber": "B008"
}

//sample json data

{
    "busID": "B009",
    "busName": "Kandy",
    "conductorID": "C009",
    "busNumber": "B009"
}

//sample json data

{
    "busID": "B010",
    "busName": "Kandy",
    "conductorID": "C010",
    "busNumber": "B010"
}

//sample json data

{
    "busID": "B011",
    "busName": "Kandy",
    "conductorID": "C011",
    "busNumber": "B011"
}

*/