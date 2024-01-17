const express = require('express');
const router = express.Router();
const game_controller = require("../controllers/gameController");


/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/


/// User ROUTES ///


// GET all posts.
router.get("/", game_controller.check_get);

// get start time

router.get("/start", game_controller.start_time);

// end time

router.get("/end", game_controller.end_time);

// new high score

router.get("/score", game_controller.new_high_score);

module.exports = router;
