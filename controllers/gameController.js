
const Game = require("../models/game");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");


// get all published posts
exports.check_get = asyncHandler(async (req, res, next) => {
/*
  try {
    let allPosts = await Posts.find({ 'published': true }).exec()
    res.status(200).json(allPosts)
  } catch (error) {
    res.status(500).json({ message: error });
  }*/
  res.send('respond with a resource');

});
