require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

/* CORS Configuration */

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://eccura-advonote-website.vercel.app"
        ],
        credentials: true
    })
);

/* Middleware */

app.use(express.json());

/* Health Check */

app.get("/", (req, res) => {

    res.send("Advonote API Running");

});

/* Routes */

const contactRoutes =
    require("./routes/contactRoutes");

const demoRoutes =
    require("./routes/demoRoutes");

const authRoutes =
    require("./routes/authRoutes");

const adminRoutes =
    require("./routes/adminRoutes");

/* Route Registration */

app.use(
    "/api",
    contactRoutes
);

app.use(
    "/api",
    demoRoutes
);

app.use(
    "/api/auth",
    authRoutes
);

app.use(
    "/api/admin",
    adminRoutes
);

/* Start Server */

const PORT =
    process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(
        `Server Running on Port ${PORT}`
    );

});