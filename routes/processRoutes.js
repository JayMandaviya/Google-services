const express = require("express");
const { processTask } = require("../controllers/processController");

const router = express.Router();

router.get("/", processTask);

module.exports = router;
