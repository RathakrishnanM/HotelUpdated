// database.js
const mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    const password = 'Deepha@123';
    const encodedPassword = encodeURIComponent(password);
    const atlasConnectionString = `mongodb+srv://Deephadharshini:${encodedPassword}@cluster0.rcv9acl.mongodb.net/Bookings?retryWrites=true&w=majority`;

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

module.exports = new Database();
