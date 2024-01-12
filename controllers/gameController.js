
const Game = require("../models/game");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");


// check coords
exports.check_get = asyncHandler(async (req, res, next) => {

  try {
    let character = await Game.findOne({ 'char_name': req.query.char_name }).exec()

    let xCheck = req.query.x > character.max_x && req.query.x < character.min_x
    let yCheck = req.query.y > character.max_y && req.query.y < character.min_y
    console.log(xCheck)
    console.log(yCheck)
   if (xCheck == true && yCheck == true) {
    res.json({message: true})
   }
   else {
    res.json({message: false})
   }
  } catch (error) {
    res.status(500).json({ message: error });
  }
  

});
