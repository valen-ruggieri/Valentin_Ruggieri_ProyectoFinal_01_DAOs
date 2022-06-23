const mongoose = require("mongoose");
const { Schema } = mongoose;
const usersSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  userType: { type: String, required: true },
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
