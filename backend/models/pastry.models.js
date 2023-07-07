const mongoose = require("mongoose");

const pastrySchema = mongoose.Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  order: { type: Number, required: true },
});

module.exports = mongoose.model("Pastry", pastrySchema);
