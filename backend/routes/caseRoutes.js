const express = require("express");
const router = express.Router();

const {
    addCase,
    getTodayCases,
    getCases,
    updateCase,
    deleteCase,
    getCalendarCases,
    getCaseById
} = require("../controllers/caseController");

/* Calendar */
router.get(
    "/calendar/:advocateId",
    getCalendarCases
);

/* Today's Cases */
router.get(
    "/today/:advocateId",
    getTodayCases
);

/* Get Single Case */
router.get(
    "/details/:id",
    getCaseById
);

/* Get All Cases */
router.get(
    "/:advocateId",
    getCases
);

/* Add Case */
router.post(
    "/",
    addCase
);

/* Update Case */
router.put(
    "/:id",
    updateCase
);

/* Delete Case */
router.delete(
    "/:id",
    deleteCase
);

module.exports = router;