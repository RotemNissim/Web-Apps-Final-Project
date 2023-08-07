const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  dateOfBirth: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
