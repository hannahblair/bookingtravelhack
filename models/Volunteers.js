const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: String,
  bio: String
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);
module.exports = Volunteer;
