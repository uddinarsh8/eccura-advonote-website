const express = require("express");
const router = express.Router();

const {
  createDemo
} = require("../controllers/demoController");

router.post("/demo", createDemo);

module.exports = router;