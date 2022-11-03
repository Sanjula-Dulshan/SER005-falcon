import Report from "../models/ReportModel.js";

//create fine function
export const createFine = async (req, res) => {
    try {
        const {Name, Route, Date, Cost, FineType, FineAmount, FineReason} = req.body;
        const newReport = new Report({
            Name,
            Route,
            Date,
            Cost,
            FineType,
            FineAmount,
            FineReason
        });
        await newReport.save();
        res.status(200).json(newReport);
    } catch (error) {
        res.status(500).json(error);
    }
};

//get all fine function
export const getAllFine = async (req, res) => {
    try {
        const report = await Report.find();
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json(error);
    }
};

