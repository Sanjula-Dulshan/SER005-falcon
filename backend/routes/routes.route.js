import express from "express";
const router = express.Router();
import Route from "../models/routes.model.js";

router.route("/").get((req,res)=>{
    Route.find()
    .then(routes => res.json(routes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/",(req,res)=>{
    
    const routeID = req.body.routeID;
    const startPoint = req.body.startPoint;
    const endPoint = req.body.endPoint;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const duration = req.body.duration;
    const busStops = req.body.busStops;


    const newRoute = new Route({
        routeID,
        startPoint,
        endPoint,
        startTime,
        endTime,
        duration,
        busStops

    })

    newRoute.save().then(()=>{
        res.json("Route Added")
    }).catch((err)=>{
        console.log(err);
    })

});

router.get("/",(req,res)=>{
    Route.findById(req.params.id)
    .then(routes => res.json(routes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete("/:id",(req,res)=>{
    Route.findByIdAndDelete(req.params.id)
    .then(routes => res.json(routes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.put("/:id",(req,res)=>{
    Route.findById(req.params.id)
    .then(routes => {
        routes.routeID = req.body.routeID;
        routes.routeName = req.body.routeName;
        routes.startPoint = req.body.startPoint;
        routes.endPoint = req.body.endPoint;
        routes.distance = req.body.distance;
        routes.busStops = req.body.busStops;

        routes.save().then(()=>{
            res.json("Route Updated")
        }).catch((err)=>{
            console.log(err);
        })
    })
});

export default router;