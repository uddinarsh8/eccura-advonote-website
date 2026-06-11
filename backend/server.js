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
const advocateRoutes =
  require("./routes/advocateRoutes");
const caseRoutes =
  require("./routes/caseRoutes");
const clientRoutes =
  require("./routes/clientRoutes");
const todoRoutes =
  require("./routes/todoRoutes");
const notificationRoutes =
  require("./routes/notificationRoutes");

app.use(
  "/api/cases",
  caseRoutes
);
app.use(
  "/api/clients",
  clientRoutes
);
app.use("/api", contactRoutes);
app.use("/api", demoRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/admin", adminRoutes);
app.use(
  "/api/advocates",
  advocateRoutes
);
app.use(
  "/api/todos", todoRoutes);
app.use(
  "/api/notifications",
  notificationRoutes
);
app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});