const ParticipantModel = require("../models/participant.models");

exports.getParticipants = (req, res, next) => {
  ParticipantModel.find()
    .then((participant) => res.status(200).json(participant))
    .catch((error) => res.status(400).json({ error }));
};

exports.getParticipantByUser = (req, res, next) => {
  ParticipantModel.findOne({ user: JSON.parse(req.params.user) })
    .then((participant) => {
      if (!participant) {
        return res.status(200).json(new ParticipantModel({ canPlay: true }));
      }

      res.status(200).json(participant);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.addParticipant = (req, res, next) => {
  const participant = new ParticipantModel({
    ...req.body,
    canPlay: false,
    createdDate: Date.now(),
  });
  participant
    .save()
    .then(() => res.status(201).json(participant))
    .catch((error) => res.status(400).json({ error }));
};
