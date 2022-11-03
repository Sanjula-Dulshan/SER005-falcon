import express from "express";
const router = express.Router();
import Route from "../models/routes.model.js";
import Bus from "../models/bus.model.js";

let Routes = [];

function setRoutes(value) {
    Routes = value;
}

function getRoutes() {
    return Routes;
}

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


//function to get all routes contains busStops given in order
async function getRoutesByBusStops(busStopsArray,res){

      await Route.find({"busStops.stop": {$all: busStopsArray}})
        .then(routes => setRoutes(routes))
        .catch(err => console.log(err)); 
    return Routes;    
    
}


//function to get all busses matches any routeID in array
function getBussesByRouteID(routeIDArray){
    return new Promise((resolve,reject)=>{
        Bus.find({routeID:{$in:routeIDArray}}).then((busses)=>{
            resolve(busses);
        }).catch((err)=>{
            reject(err);
        })
    })
}


//function to get all routes contains busStops in order and get busses matches any routeID in array
router.post("/getBussesByBusStops",async (req,res)=>{
    let busStopsArray = req.body.busStops;
    let routesArray = await getRoutesByBusStops(busStopsArray,res);


    let routeIDArray = [];

    setTimeout(()=>{


    //while loop to get all routeID in array
    let i = 0;
    while(i<routesArray?.length){
        routeIDArray.push(routesArray[i].routeID);
        i++;
    }

    getBussesByRouteID(routeIDArray).then((busses)=>{
        console.log(busses);
        res.json(busses);
    }).catch((err)=>{
        res.status(400).json('Error: ' + err);
    })

    },1000);
});

export default router;