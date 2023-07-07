const express = require("express");
const {
  getPastries,
  getPastryById,
  updatePastry,
} = require("../controllers/pastry.controllers");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/", auth, getPastries);
router.get("/:id", auth, getPastryById);
router.put("/:id", auth, updatePastry);

module.exports = router;
