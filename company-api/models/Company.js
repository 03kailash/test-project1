const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  country: String,
});

module.exports = mongoose.model('Company', companySchema);
