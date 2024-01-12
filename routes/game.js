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

module.exports = router;
