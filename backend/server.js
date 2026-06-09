require("dotenv").config();


const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Advonote API Running");
});

const contactRoutes =
  require("./routes/contactRoutes");

const demoRoutes =
  require("./routes/demoRoutes");

const authRoutes =
  require("./routes/authRoutes");

const adminRoutes =
  require("./routes/adminRoutes");

app.use("/api", contactRoutes);
app.use("/api", demoRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/admin", adminRoutes);

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});