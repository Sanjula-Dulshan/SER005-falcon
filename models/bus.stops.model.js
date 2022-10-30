const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusStopSchema = new Schema({

    name: {
        type: String,
        required : true
    },

    location: {
        type : { type: String },
        coordinates: [Number]
    },

}, {timestamps: true});

BusStopSchema.index({ location: "2dsphere" }); //2dsphere is a special index in MongoDB that allows you to store and query geo-spatial data

const BusStop = mongoose.model("busStop",BusStopSchema);
module.exports = BusStop;

/*
//sample json data

{
    "name": "Kandy",
    "location": {
        "type": "Point",
        "coordinates": [80.6333, 7.2833]
    }
}

//sample json data

{
    "name": "Colombo",
    "location": {
        "type": "Point",
        "coordinates": [79.8612, 6.9271]
    }
}

//sample json data

{
    "name": "Galle",
    "location": {
        "type": "Point",
        "coordinates": [80.2167, 6.0333]
    }
}

//sample json data

{
    "name": "Jaffna",
    "location": {
        "type": "Point",
        "coordinates": [79.8728, 9.6647]
    }
}

//sample json data

{
    "name": "Kurunegala",
    "location": {
        "type": "Point",
        "coordinates": [80.3833, 7.4833]
    }
}

//sample json data

{
    "name": "Matara",
    "location": {
        "type": "Point",
        "coordinates": [80.5833, 5.9481]
    }
}

//sample json data

{
    "name": "Ratnapura",
    "location": {
        "type": "Point",
        "coordinates": [80.3833, 6.6833]
    }
}

//sample json data

{
    "name": "Trincomalee",
    "location": {
        "type": "Point",
        "coordinates": [81.2333, 8.5667]
    }
}

//sample json data

{
    "name": "Vavuniya",
    "location": {
        "type": "Point",
        "coordinates": [79.8833, 8.75]
    }
}

//sample json data

{
    "name": "Anuradhapura",
    "location": {
        "type": "Point",
        "coordinates": [80.35, 8.3167]
    }
}

//sample json data

{
    "name": "Badulla",
    "location": {
        "type": "Point",
        "coordinates": [81.05, 6.9833]
    }
}

//sample json data

{
    "name": "Batticaloa",
    "location": {
        "type": "Point",
        "coordinates": [81.7167, 7.7167]
    }
}

*/



        
