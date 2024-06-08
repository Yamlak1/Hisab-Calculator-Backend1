const express = require("express");
const router = express.Router();
const { addBreadType } = require("../controllers/breadController");
const { getBreadType } = require("../controllers/breadController");

router.post("/addBreadType", addBreadType);
router.get("/getBreadType", getBreadType);

module.exports = router;
