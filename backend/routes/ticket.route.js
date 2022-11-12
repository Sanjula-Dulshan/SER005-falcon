import express from "express";
const router = express.Router();

import Ticket from "../models/ticket.model.js";

router.get("/", (req, res) => {
  Ticket.find()
    .then((tickets) => res.json(tickets))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/", (req, res) => {
  const bus_id = req.body.bus_id;
  const startPoint = req.body.startPoint;
  const endPoint = req.body.endPoint;
  const fee = req.body.fee;
  const date = req.body.date;
  const user = req.body.user;
  const ticket_count = req.body.ticket_count;

  const newTicket = new Ticket({
    bus_id,
    startPoint,
    endPoint,
    fee,
    date,
    user,
    ticket_count,
  });

  newTicket
    .save()
    .then(() => {
      res.json("Ticket Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  Ticket.findById(req.params.id)
    .then((tickets) => res.json(tickets))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req, res) => {
  Ticket.findByIdAndDelete(req.params.id)
    .then((tickets) => res.json(tickets))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/:id", (req, res) => {
  Ticket.findById(req.params.id).then((tickets) => {
    tickets.bus_id = req.body.bus_id;
    tickets.startPoint = req.body.startPoint;
    tickets.endPoint = req.body.endPoint;
    tickets.fee = req.body.fee;
    tickets.date = req.body.date;
    tickets.user = req.body.user;
    tickets.ticket_count = req.body.ticket_count;

    tickets
      .save()
      .then(() => {
        res.json("Ticket Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

export default router;
