const express = require("express");
const routerHome = express.Router();
const HomeController = require("../../controllers/homeController");
const homeController = new HomeController();


routerHome.get("/", async (req, res) => {
  // todo|    restoreSession
  homeController.restoreSession(req,res);
});

module.exports = routerHome;
