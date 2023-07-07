const PastryModel = require("../models/pastry.models");

exports.getPastries = (req, res, next) => {
  PastryModel.find()
    .then((pastry) => res.status(200).json(pastry))
    .catch((error) => res.status(400).json({ error }));
};

exports.getPastryById = (req, res, next) => {
  PastryModel.findOne({ name: req.params.id })
    .then((pastry) => res.status(200).json(pastry))
    .catch((error) => res.status(400).json({ error }));
};

exports.updatePastry = (req, res, next) => {
  // console.log(req.params);
  // console.log(req.body);

  // console.log(req.body.number);

  PastryModel.findOneAndUpdate(
    { _id: req.params.id },
    { number: req.body.number - 1 }
  )
    .then((pastry) => res.status(200).json(pastry))
    .catch((error) => res.status(400).json({ error }));
};
