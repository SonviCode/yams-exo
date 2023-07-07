const express = require("express");
const {
  signup,
  login,
  getUserById,
} = require("../controllers/user.controllers");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/user/:id", auth, getUserById);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
