const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  actor1: {
    type: String,
    default: "Not specified",
  },

  actor2: {
    type: String,
    default: "Not specified",
  },

  director: {
    type: String,
    default: "Not specified",
  },
  created: {
    type: Date,
    default: Date.now
}
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;