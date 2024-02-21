// booking.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const BookingSchema = new mongoose.Schema({
  BookingID: Number,
  RoomNumber: Number,
  RoomType: String,
  TotalPrice: Number,
});

const Booking = mongoose.model('Booking', BookingSchema);

const newBooking = new Booking({
  BookingID: 1,
  RoomNumber: 101,
  RoomType: 'Standard',
  TotalPrice: 500,
});

newBooking
  .save()
  .then(() => {
    console.log('Saved Booking to MongoDB');
  })
  .catch((error) => {
    console.error(error);
  });

app.post('/booking', async (request, response) => {
  const booking = new Booking(request.body);
  try {
    await booking.save();
    response.send(booking);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get('/bookings', async (request, response) => {
  const bookings = await Booking.find({});
  try {
    response.send(bookings);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
