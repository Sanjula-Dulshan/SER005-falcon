import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RouteSchema = new Schema({
    routeID: {
        type: String,
        required : true
    },

    startPoint: {
        type: String,
        required : true
    },

    startTime: {
        type: String,
        required : true
    },

    duration : {
        type: Number,
        required : true
    },

    endPoint: {
        type: String,
        required : true
    },

    endTime: {
        type: String,
        required : true
    },

    //array of bus stops
    busStops: {
        type: [
            {
              time: { type: String, required: true },
              stop: { type: Number, required: true },
            },
          ],
    },

}, {timestamps: true});

const Route = mongoose.model("route",RouteSchema);
export default Route;

/*
//sample json data

{
    "routeID": "R001",
    "startPoint": "Kandy",
    "startTime": "8.00",
    "duration": "2",
    "endPoint": "Colombo",
    "endTime": "10.00",
    "busStops": [
        {
            "time": "8.30",
            "stop": "1"
        },
        {
            "time": "9.00",
            "stop": "2"
        },
        {
            "time": "9.30",
            "stop": "3"
        },
        {
            "time": "10.00",
            "stop": "4"
        }

    ]
}

*/