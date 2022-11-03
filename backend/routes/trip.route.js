const router = require("express").Router();
const Trips = require("../models/trip.model.js");

router.route("/").get((req,res)=>{
    Trips.find()
    .then(trips => res.json(trips))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").post((req,res)=>{
    const tripId = req.body.tripId;
    const driverId = req.body.driverId;
    const vehicleId = req.body.vehicleId;
    const routeId = req.body.routeId;
    const date = req.body.date;
    const time = req.body.time;
    const fare = req.body.fare;
    const status = req.body.status;
    const userID = req.body.userId;

    const newTrip = new Trips({
        tripId,
        driverId,
        vehicleId,
        routeId,
        date,
        time,
        fare,
        status,
        userID
    })

    newTrip.save().then(()=>{
        res.json("Trip Added")
    }).catch((err)=>{
        console.log(err);
    })

});

router.route("/:id").get((req,res)=>{
    Trips.findById(req.params.id)
    .then(trips => res.json(trips))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/:id").delete((req,res)=>{
    Trips.findByIdAndDelete(req.params.id)
    .then(trips => res.json(trips))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/:id").put((req,res)=>{
    Trips.findById(req.params.id)
    .then(trips => {
        trips.tripId = req.body.tripId;
        trips.driverId = req.body.driverId;
        trips.vehicleId = req.body.vehicleId;
        trips.routeId = req.body.routeId;
        trips.date = req.body.date;
        trips.time = req.body.time;
        trips.fare = req.body.fare;
        trips.status = req.body.status;
        trips.userID = req.body.userId;

        trips.save().then(()=>{
            res.json("Trip Updated")
        }).catch((err)=>{
            console.log(err);
        })
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//start a trip

router.route("/start").post(async (req,res)=>{
    const busID = req.body.busID;
    const token = req.body.token;

    //set only the curent date
    const startTime = new Date();

    //set current time
    const endTime = new Date();

    const currTrip = await getTripDetails(token);

    //if current trip has start time update the end time else create a new trip
    if(currTrip == []){

        const newTrip = new Trips({
            endTime,
            startTime,
            token,
            busID
        })
    
        newTrip.save().then(()=>{
            res.json("Trip Added")
        }).catch((err)=>{
            console.log(err);
        })


    }else{

        await Trips.updateOne({_id:currTrip[0]._id},currTrip[0])
        
    
    }


    console.log(getTripDetails(token));


 
});


//create a function to get trip details by token and return the trip details
async function getTripDetails(token){

    let tripDetails;

    await Trips.find({token:token}).sort({"createdAt":-1}).limit(1)
    .then(trips => tripDetails = trips)
    .catch(err => res.status(400).json('Error: ' + err));

    console.log(tripDetails);
    return tripDetails;
}

module.exports = router;
