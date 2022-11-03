import SearchRoute from '../models/SearchRouteModel.js';

//create search route function
export const createSearchRoute = async (req, res) => {
    try {
        const {Route, Date, Time, Cost} = req.body;
        const newSearchRoute = new SearchRoute({
            Route,
            Date,
            Time,
            Cost
        });
        await newSearchRoute.save();
        res.status(200).json(newSearchRoute);
    } catch (error) {
        res.status(500).json(error);
    }
};

