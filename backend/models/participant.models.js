const mongoose = require("mongoose");
const PastryModel = require("./pastry.models").model("Pastry").schema;
const userModel = require("./user.models").model("User").schema;

const ParticipantSchema = mongoose.Schema({
  user: userModel,
  pastry: [PastryModel],
  winner: { type: Boolean, required: true },
  canPlay: { type: Boolean, required: true },
  createdDate: { type: Date, required: true },
});

module.exports = mongoose.model("Participant", ParticipantSchema);
