const express = require("express");
const router = express.Router();

const {
    registerAdvocate,
    sendOTP,
    verifyOTP
} = require("../controllers/advocateController");

router.post(
    "/register",
    registerAdvocate
);
router.post(
    "/send-otp",
    sendOTP
);
router.post(
    "/verify-otp",
    verifyOTP
);
module.exports = router;