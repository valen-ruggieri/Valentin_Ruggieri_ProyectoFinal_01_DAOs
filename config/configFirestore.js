const { initializeApp, applicationDefault } = require("firebase-admin/app");

const { getFirestore } = require("firebase-admin/firestore");

const app = initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore(app)
if(db){console.log("firestore connect")}

module.exports = db;