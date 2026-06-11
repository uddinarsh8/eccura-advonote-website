const express = require("express");
const router = express.Router();

const {
    addClient,
    getClients,
    getClientCount
} = require(
    "../controllers/clientController"
);
console.log("getClientCount:", getClientCount);
console.log("getClients:", getClients);

router.post("/", addClient);



router.get(
    "/:advocateId",
    getClients
);
router.get(
    "/count/:advocateId",
    getClientCount
);
module.exports = router;