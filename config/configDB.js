require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.URI)
.then(()=> console.log('mongoDB connect'))
.catch((e)=> console.log('Fallo la conexion'+ e))