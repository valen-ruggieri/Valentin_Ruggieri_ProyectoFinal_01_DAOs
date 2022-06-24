const mongoose = require("mongoose");
const { Schema } = mongoose;


const chatSchema = new Schema({
  autor: { type: String, unique: false ,required: true },
  date: { type: String, unique: false , required: true },
  text: { type: String, unique: false ,required: true },
});



module.exports = chatSchema;
