// reviews.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const Review = mongoose.model('Review', {
  username: String,
  comment: String,
});

app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/reviews', async (req, res) => {
  const { username, comment } = req.body;

  try {
    const newReview = new Review({ username, comment });
    await newReview.save();
    res.json({ success: true, message: 'Review added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;
