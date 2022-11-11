import express from "express";
import Card  from "../models/CardsModel.js";
import md5 from "md5";

const cardRouter = express.Router();

//Add a new card
cardRouter.route("/add").post((req, res) => {
  const uid = req.body.user_id;
  const cardNumber = md5(`${req.body.cardNumber}`);
  const cardType = req.body.cardType;
  const cardSecurityCode = md5(`${req.body.cardSecurityCode}`);
  const ExDate = req.body.expirationDate;
  const bCardNumber = req.body.cardNumber;
  const lastFourDigits =
    `${bCardNumber.substr(0, 1)}` + `***********` + `${bCardNumber.substr(-4)}`;
  const newCard = new Card({
    uid,
    cardNumber,
    cardType,
    lastFourDigits,
    cardSecurityCode,
    ExDate,
  });

  try {
    newCard.save();
    return res.status(200).json("Card Saved Successfully!");
  } catch (err) {
    return res.status(500).json(err);
  }
});

//Get all cards
cardRouter.route("/").get((res) => {
  Card.find()
    .then((cards) => {
      res.json(cards);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Get a card by id
cardRouter.get("/getMyCard/:id", (req, res) => {
  let crdid = req.params.id;
  Card.find({ uid: crdid })
    .then((cards) => {
      res.json(cards);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Delete a card
cardRouter.route("/delete/:id").delete(async (req, res) => {
  let cardid = req.params.id;

  await Card.findByIdAndDelete(cardid)
    .then(() => {
      res.status(200).send({ status: "Card Removed Successfully!" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error removing card " });
    });
});

export default cardRouter;