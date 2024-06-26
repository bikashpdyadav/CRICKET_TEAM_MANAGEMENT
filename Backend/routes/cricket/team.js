var express = require("express");
var router = express.Router();
const team = require("../../src/teamController");

router.get("/teamDetails", team.getTeamDetails);
module.exports = router;
