import express from 'express';
import mongoose from 'mongoose';
import { bookingRequestSchema } from '../schemas/bookingSchema.js';
const router = express.Router();
const bookingRequest = mongoose.model('bookingrequest', bookingRequestSchema);

router.post('/', (req, res) => {
  const newBookingRequest = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
    startDate: new Date(req.body.startDate),
    endDate: new Date(req.body.endDate),
  };

  bookingRequest.collection.insertOne(newBookingRequest, (error, result) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(result);
    }
  });
});

export default router;
