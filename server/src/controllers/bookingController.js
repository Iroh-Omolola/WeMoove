import Booking from '../models/bookingModel.js'
import Car from "../models/carModel.js";
import { v4 as uuidv4 } from "uuid";
import stripe from "stripe"
import dotenv from 'dotenv';
dotenv.config();

const stripeAcc= stripe(
  process.env.STRIPE
);

export const BookCar= async (req, res) => {
  const { token } = req.body;
  try {
    const customer = await stripeAcc.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripeAcc.charges.create(
      {
        amount: req.body.totalAmount * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email
      },
      {
        idempotencyKey: uuidv4(),
        
      }
    );

    if (payment) {
      req.body.transactionId = payment.source.id;
      const newbooking = new Booking(req.body);
      await newbooking.save();
      const car = await Car.findOne({ _id: req.body.car });
      console.log(req.body.car);
      car.bookedTimeSlots.push(req.body.bookedTimeSlots);

      await car.save();
      res.send("Your booking is successfull");
    } else {
      return res.status(400).json(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};


// router.get("/getallbookings",
export const GetBookings= async(req, res) => {

    try {
        const bookings = await Booking.find().populate('car')
        res.send(bookings)
        
    } catch (error) {
        return res.status(400).json(error);
    }
  
};

