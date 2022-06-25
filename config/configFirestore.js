const { initializeApp, applicationDefault } = require("firebase-admin/app");

const { getFirestore } = require("firebase-admin/firestore");

const app = initializeApp({
  credential: applicationDefault(),
});

const databaseFR = getFirestore(app)
// if(databaseFR){console.log("firestore connect")}
// else{console.log('no hay db fr')}

module.exports = databaseFR;