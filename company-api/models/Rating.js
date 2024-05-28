const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  name: String,
  subject: String,
  review: String,
  rating: String,
});

module.exports = mongoose.model('Company', ratingSchema);
