const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: { type: String, required: true, minLength: 2 },
  score: { type: String, required: true },
  
  
});



// Export model
module.exports = mongoose.model("User", UserSchema);