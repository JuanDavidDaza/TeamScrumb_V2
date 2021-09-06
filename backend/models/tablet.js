const mongoose = require("mongoose");

const tabletSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  name: String,
  description: String,
  date: { type: Date, default: Date.now },
});

const tablet = mongoose.model("tablet", tabletSchema);
module.exports = tablet;
