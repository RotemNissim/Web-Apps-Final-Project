const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

const reviewSchema = new mongoose.Schema({
  dish: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dish',
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

reviewSchema.virtual('writerUsername',{
  ref: 'User',
  localField: 'writer',
  foreignField: '_id',
  justOne: true,
  autopopulate: true,
});

reviewSchema.plugin(autopopulate);

const Review = mongoose.model('Review', reviewSchema, "Reviews");

module.exports = Review;
