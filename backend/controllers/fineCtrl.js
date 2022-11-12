import fine from "../models/fineModel.js";

//add fine function
export const addFine = async (req, res) => {
  try {
    const { name, typeOfFine, reason, price } = req.body;
    console.log("req.body: ", req.body);
    const newFine = new fine({
      userName: name,
      typeOfFine,
      reason,
      price,
    });
    await newFine.save().then((fine) => {
      console.log("fine: ", fine);
      res.json({ msg: "Fine added successfully" });
    });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json(error);
  }
};
