const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RouteSchema = new Schema({
    routeID: {
        type: String,
        required : true
    },

    routeName: {
        type: String,
        required : true
    },

    startPoint: {
        type: String,
        required : true
    },

    distance : {
        type: String,
        required : true
    },

    endPoint: {
        type: String,
        required : true
    },

    //array of bus stops
    busStops: {
        type: Array,
        required : true
    },

}, {timestamps: true});

const Route = mongoose.model("route",RouteSchema);
module.exports = Route;

/*
//sample json data

{
    "routeID": "R001",
    "routeName": "Kandy",
    "startPoint": "Kandy",
    "endPoint": "Colombo",
    "distance": "100",
    "busStops": ["Kandy","Matale","Badulla","Colombo"]
}

//sample json data

{
    "routeID": "R002",
    "routeName": "Kandy",
    "startPoint": "Kandy",
    "endPoint": "Colombo",
    "distance": "100",
    "busStops": ["Kandy","Matale","Badulla","Colombo"]
}

//sample json data

{
    "routeID": "R003",
    "routeName": "Kandy",
    "startPoint": "Kandy",
    "endPoint": "Colombo",
    "distance": "100",
    "busStops": ["Kandy","Matale","Badulla","Colombo"]
}

//sample json data

{
    "routeID": "R004",
    "routeName": "Kandy",
    "startPoint": "Kandy",
    "endPoint": "Colombo",
    "distance": "100",
    "busStops": ["Kandy","Matale","Badulla","Colombo"]
}

//sample json data

{
    "routeID": "R005",
    "routeName": "Kandy",
    "startPoint": "Kandy",
    "endPoint": "Colombo",
    "distance": "100",
    "busStops": ["Kandy","Matale","Badulla","Colombo"]
}

//sample json data

{
    "routeID": "R006",
    "routeName": "Kandy",
    "startPoint": "Kandy",
    "endPoint": "Colombo",
    "distance": "100",
    "busStops": ["Kandy","Matale","Badulla","Colombo"]
}

//sample json data

{
    "routeID": "R007",
    "routeName": "Kandy",
    "startPoint": "Kandy",
    "endPoint": "Colombo",
    "distance": "100",
    "busStops": ["Kandy","Matale","Badulla","Colombo"]
}
*/