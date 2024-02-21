
// import React, { useState, useEffect } from 'react';
// import './BookingsBackend.css'; // Import a CSS file for styling

// function App() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     // Fetch bookings from your Express server
//     fetch('http://localhost:5000/bookings')
//       .then((response) => response.json())
//       .then((data) => setBookings(data))
//       .catch((error) => console.error('Error fetching bookings:', error));
//   }, []);

//   return (
//     <div className="container2">
//       <h1 className="c"><span class="highlight">Book </span>your room</h1>
      
//       <div className="bookings-container">
//         {bookings.map((booking) => (
//           <div key={booking._id} className="booking-box">
//             <p className="booking-info">
//               <strong>Booking ID:</strong> {booking.BookingID}
//             </p>
//             <p className="booking-info">
//               <strong>Room Number:</strong> {booking.RoomNumber}
//             </p>
//             <p className="booking-info">
//               <strong>Room Type:</strong> {booking.RoomType}
//             </p>
//             <p className="booking-info">
//               <strong>INR</strong> {booking.TotalPrice}
//             </p>
//             <p className="booking-info">
//       <div className='iconsc'>
//         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
//           <i className='fas fa-info-circle'></i>
//               <p>{booking.Description}</p>
//        </div>
//      </p>

//             <p className="booking-info">
//             <div className='iconsc'>
//             <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
//                 <i class='fas fa-thin fas fa-mug-hot'></i> <p>        {booking.Description2} </p>
//               </div>
               
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();

// app.use(cors());
// app.use(express.json()); // Enable JSON parsing for incoming requests
// const port = 5000;

// app.get('/', (req, res) => {
//   res.send('MongoDB Express Tutorial');
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// const server = '127.0.0.1:27017';
// const database = 'Bookings';

// class Database {
//   constructor() {
//     this._connect();
//   }

//   _connect() {
//     mongoose
//       .connect(`mongodb://${server}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
//       .then(() => {
//         console.log('Database connection successful');
//       })
//       .catch((err) => {
//         console.error('Database connection failed', err);
//       });
//   }
// }

// const BookingSchema = new mongoose.Schema({
//   BookingID: Number,
//   RoomNumber: Number,
//   RoomType: String,
//   TotalPrice: Number,
// });

// const Booking = mongoose.model('Booking', BookingSchema);

// // Initial booking
// const newBooking = new Booking({
//   BookingID: 1,
//   RoomNumber: 101,
//   RoomType: 'Standard',
//   TotalPrice: 500,
// });

// newBooking
//   .save()
//   .then(() => {
//     console.log('Initial Booking saved at MongoDB');
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// app.post('/details', async (request, response) => {
//   // Create a new booking instance from the form data
//   const newBookingFromForm = new Booking(request.body);

//   try {
//     // Save the new booking to MongoDB
//     await newBookingFromForm.save();

//     // Respond with the details of the newly added booking
//     response.json({
//       BookingID: newBookingFromForm.BookingID,
//       RoomNumber: newBookingFromForm.RoomNumber,
//       RoomType: newBookingFromForm.RoomType,
//       TotalPrice: newBookingFromForm.TotalPrice,
//     });
//   } catch (error) {
//     response.status(500).json({ error: 'Failed to save booking details' });
//   }
// });

// app.get('/bookings', async (request, response) => {
//   const bookings = await Booking.find({});
//   try {
//     response.send(bookings);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// module.exports = new Database();

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; 
import './BookingsBackend.css'; // Import a CSS file for styling

function App() {
  const [bookings, setBookings] = useState([]);
  const history = useHistory(); 
  useEffect(() => {
    // Fetch bookings from your Express server
    fetch('http://localhost:5000/bookings')
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error('Error fetching bookings:', error));
  }, []);

  const handleButtonClick = (bookingID) => {
    // Add your button click logic here
    console.log(`Button clicked for Booking ID: ${bookingID}`);
    history.push('/pay');
  };

  return (
    <div className="container2">
      <h1 className="c"><span className="highlight">Book </span>your room</h1>
      
      <div className="bookings-container">
        {bookings.map((booking) => (
          <div key={booking._id} className="booking-box">
            <p className="booking-info">
              <strong>Booking ID:</strong> {booking.BookingID}
            </p>
            <p className="booking-info">
              <strong>Room Number:</strong> {booking.RoomNumber}
            </p>
            <p className="booking-info">
              <strong>Room Type:</strong> {booking.RoomType}
            </p>
            <p className="booking-info">
              <strong>INR</strong> {booking.TotalPrice}
            </p>
            <p className="booking-info">
              <div className='iconsc'>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <i className='fas fa-info-circle'></i>
                <p>{booking.Description}</p>
              </div>
            </p>

            <p className="booking-info">
              <div className='iconsc'>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <i class='fas fa-thin fas fa-mug-hot'></i> <p>{booking.Description2}</p>
              </div>
            </p>

            <button onClick={() => handleButtonClick(booking.BookingID)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
