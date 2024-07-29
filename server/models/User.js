const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  money: Number,
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
