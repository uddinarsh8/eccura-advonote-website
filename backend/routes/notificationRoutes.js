const express = require("express");
const router = express.Router();

const {
    getNotifications,
    getRecentNotifications,
    markAsRead,
    deleteNotification
} = require("../controllers/notificationController");

router.get(
    "/recent/:advocateId",
    getRecentNotifications
);

router.get(
    "/:advocateId",
    getNotifications
);

router.put(
    "/read/:id",
    markAsRead
);

router.delete(
    "/:id",
    deleteNotification
);

module.exports = router;