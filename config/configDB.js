require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.URI)
.then(()=> console.log('mongoDB connect'))
.catch((error)=> console.log('failed to connect to database'+ error))