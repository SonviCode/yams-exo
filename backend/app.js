const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// --router--
const userRoutes = require("./routes/user.routes");
const pastryRoutes = require("./routes/pastry.routes");
const participantRoutes = require("./routes/participant.routes");

dotenv.config();

const app = express();

// --connection db--
connectDB();

// --authorisation cors--
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// --app use--
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// --router--
app.use("/api/auth", userRoutes);
app.use("/api/pastry", pastryRoutes);
app.use("/api/participant", participantRoutes);

module.exports = app;
