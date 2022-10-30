import BanUser from "../models/BanUserModel.js";

//ban user function
export const banUser = async (req, res) => {
    try {
        const {BanID, ConfirmMsg, Remark} = req.body;
        const newBanUser = new BanUser({
            BanID,
            ConfirmMsg,
            Remark
        });
        await newBanUser.save();
        res.status(200).json(newBanUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

//get all ban user function
export const getAllBanUser = async (req, res) => {
    try {
        const banUser = await BanUser.find();
        res.status(200).json(banUser);
    } catch (error) {
        res.status(500).json(error);
    }
};
