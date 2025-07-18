const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  year: Number,
  genre: String,
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Book', bookSchema);
