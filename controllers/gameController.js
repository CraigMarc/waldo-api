
const Game = require("../models/game");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");


// check coords
exports.check_get = asyncHandler(async (req, res, next) => {

  try {
    let character = await Game.findOne({ 'char_name': req.query.char_name }).exec()
    
   if ((req.query.x > character.max_x && req.query.x < character.min_x) || (req.query.y > character.max_y && req.query.y < character.min_y) ) {
    res.json({message: true})
   }
   else {
    res.json({message: false})
   }
  } catch (error) {
    res.status(500).json({ message: error });
  }
  

});
