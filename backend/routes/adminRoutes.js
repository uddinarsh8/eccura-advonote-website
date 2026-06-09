const express = require("express");
const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  getDashboard,
  getLeads,
  searchLeads,
  updateLeadStatus,
  getAnalytics
} = require("../controllers/adminController");

router.get(
  "/dashboard",
  getDashboard
);

router.get(
  "/leads",
  getLeads
);
router.get(
  "/search",
  searchLeads
);
router.put(
  "/lead/:id",
  updateLeadStatus
);
router.get(
  "/analytics",
  getAnalytics
);

module.exports = router;