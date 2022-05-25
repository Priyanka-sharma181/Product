const express = require("express");
const router = express.Router();

const jewleryData = require("../Controllers/jewlery")

router.get("/api/v1/jewelry", jewleryData.keyword)

module.exports = router