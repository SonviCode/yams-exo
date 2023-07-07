const express = require("express");
const {
  getParticipants,
  getParticipantByUser,
  addParticipant,
} = require("../controllers/participant.controllers");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/", auth, getParticipants);
router.get("/:user", auth, getParticipantByUser);
router.post("/", auth, addParticipant);

module.exports = router;
