
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();

// app.use(cors());
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
//   // ImageUrl:String
// });

// const Booking = mongoose.model('Booking', BookingSchema);

// const newBooking = new Booking({
//   BookingID: 1,
//   RoomNumber: 101,
//   RoomType: 'Standard',
//   TotalPrice: 500,
//   // ImageUrl:"https://www.pexels.com/photo/five-posters-mounted-on-wall-462235/"
// });

// newBooking
//   .save()
//   .then(() => {
//     console.log('Save Booking at MongoDB');
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// app.post('/booking', async (request, response) => {
//   const booking = new Booking(request.body);
//   try {
//     await booking.save();
//     response.send(booking);
//   } catch (error) {
//     response.status(500).send(error);
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


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
const port = 5000;

app.get('/', (req, res) => {
  res.send('MongoDB Express Tutorial');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


// const atlasConnectionString = 'mongodb+srv://Deephadharshini:Deepha@123@cluster0.rcv9acl.mongodb.net/Bookings?retryWrites=true&w=majority';
const password = 'Deepha@123';
const encodedPassword = encodeURIComponent(password);
const atlasConnectionString = `mongodb+srv://Deephadharshini:${encodedPassword}@cluster0.rcv9acl.mongodb.net/Bookings?retryWrites=true&w=majority`;




class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(atlasConnectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
      })
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection failed', err);
      });
  }
}

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
app.use(express.json());

const Review = mongoose.model('Review', {
  username: String,
  comment: String,
});

app.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/reviews', async (req, res) => {
  const { username, comment } = req.body;

  try {
    const newReview = new Review({ username, comment });
    await newReview.save();
    res.json({ success: true, message: 'Review added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = new Database();




// server.js
