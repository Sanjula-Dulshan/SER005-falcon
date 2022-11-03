import express from "express";
const router = express.Router();
import Bus from "../models/bus.model.js";

router.get("/",(req,res)=>{
    Bus.find()
    .then(buses => res.json(buses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/",(req,res)=>{
    const busName = req.body.busName;
    const busNumber = req.body.busNumber;
    const mobile = req.body.mobile;
    const availableSeats = req.body.availableSeats;
    const passengerCount = req.body.passengerCount;
    const routeID = req.body.routeID;

    const newBus = new Bus({
        busName,
        busNumber,
        mobile,
        availableSeats,
        passengerCount,
        routeID
        
    })

    newBus.save().then(()=>{
        res.json("Bus Added")
    }).catch((err)=>{
        console.log(err);
    })

});

router.get("/:id",(req,res)=>{

    Bus.findById(req.params.id)
    .then(buses => res.json(buses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete("/:id",(req,res)=>{
    Bus.findByIdAndDelete(req.params.id)
    .then(buses => res.json(buses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/:id",(req,res)=>{
    Bus.findById(req.params.id)
    .then(buses => {
        buses.busId = req.body.busId;
        buses.busNumber = req.body.busNumber;
        buses.busType = req.body.busType;
        buses.busCapacity = req.body.busCapacity;
        buses.conductorID = req.body.conductorID;
        buses.routeID = req.body.routeID;

        buses.save().then(()=>{
            res.json("Bus Updated")
        }).catch((err)=>{
            console.log(err);
        })
    })
    .catch(err => res.status(400).json('Error: ' + err));
});




export default router;