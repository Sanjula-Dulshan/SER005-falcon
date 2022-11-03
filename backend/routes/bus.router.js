import express from "express";
const router = express.Router();
import Bus from "../models/bus.model.js";

router.get("/",(req,res)=>{
    Bus.find()
    .then(buses => res.json(buses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/",(req,res)=>{
    const busID = req.body.busID;
    const busNumber = req.body.busNumber;
    const busName = req.body.busName;
    const busType = req.body.busType;
    const busCapacity = req.body.busCapacity;
    const conductorID   = req.body.conductorID;

    const newBus = new Bus({
        busID,
        busNumber,
        busType,
        busName,
        conductorID,
        busCapacity
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

        buses.save().then(()=>{
            res.json("Bus Updated")
        }).catch((err)=>{
            console.log(err);
        })
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router;