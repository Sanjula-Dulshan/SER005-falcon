const router = require("express").Router();
const BusStop = require("../models/bus.stops.model.js");

router.route("/").get((req,res)=>{
    BusStop.find()
    .then(busStops => res.json(busStops))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").post((req,res)=>{
    const name = req.body.name;
    const location = req.body.location;

    const newBusStop = new BusStop({
        name,
        location,
    })

    newBusStop.save().then(()=>{
        res.json("Bus Stop Added")
    }).catch((err)=>{
        console.log(err);
    })

});

//get nearest bus stop using cordination

router.route("/nearest").post((req,res)=>{
    const busStopLocation = req.body.coordinates;

    BusStop.find(
        { location: { $near: {$geometry: {
            type: "Point" ,
            coordinates: busStopLocation
         }, } } }

    )
    .then(busStops => res.json(busStops[0]))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;

//sample json data to find nearest bus stop

// {
//     "coordinates": [80.6333, 7.2833]
// }