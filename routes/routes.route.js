const router = require("express").Router();
const Route = require("../models/routes.model.js");

router.route("/").get((req,res)=>{
    Route.find()
    .then(routes => res.json(routes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").post((req,res)=>{
    const routeID = req.body.routeID;
    const routeName = req.body.routeName;
    const startPoint = req.body.startPoint;
    const endPoint = req.body.endPoint;
    const distance = req.body.distance;
    const busStops = req.body.busStops;


    const newRoute = new Route({
        routeID,
        routeName,
        startPoint,
        endPoint,
        distance,
        busStops

    })

    newRoute.save().then(()=>{
        res.json("Route Added")
    }).catch((err)=>{
        console.log(err);
    })

});

router.route("/:id").get((req,res)=>{
    Route.findById(req.params.id)
    .then(routes => res.json(routes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/:id").delete((req,res)=>{
    Route.findByIdAndDelete(req.params.id)
    .then(routes => res.json(routes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/:id").put((req,res)=>{
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

module.exports = router;