import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TicketSchema = new Schema({

    bus_id: {
        type: String,
        required : true
    },

    startPoint: {
        type: String,
        required : true
    },

    endPoint: {
        type: String,
        required : true
    },

    fee: {
        type: Number,
        required : true
    },

    date: {
        type: String,
        //required : true
    },

    user: {
        type: String,
        required : true
    },

    ticket_count: {
        type: Number,
        default: 1
    },

}, {timestamps: true});

const Ticket = mongoose.model("ticket",TicketSchema);
export default Ticket;


/* sample json data
{
    "bus_id": "B001",
    "startPoint": "Kandy",
    "endPoint": "Colombo",
    "fee": "100",
    "date": "2021-05-01",
    "user": "U001",
    "ticket_count": "1"
}

*/








