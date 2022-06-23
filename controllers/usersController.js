const Users = require("../models/users");

class UserController {
  // //>|  deleteUser
  async deleteUser() {
    try {
      await Users.deleteMany();
    } catch (error) {
      console.log(error);
      return res.redirect("/errorRoute");
    }
  }
  //>| dataUser
  async dataUser() {
    try {
      const user = await Users.find().lean();
      const uID = user[0];
      return uID;
    } catch (error) {
      console.log(error);
      return res.redirect("/errorRoute");
    }
  }
  // >|  addUser
  async addUser(req, res) {
    try {
      const { email, password, userName, userType } = req.body;
      const user = new Users({ email, password, userName, userType });
      await user.save();

      console.log("Sesion de " + userType + " Iniciada - User:" + userName);
      if (userType === "cliente") {
        return res.redirect("/api/productos/tienda");
      } else {
        return res.redirect("/api/productos/all");
      }
    } catch (error) {
      const errorName = "Failed create table users";
      const errorDescription = error;
      return res.render("errorUser.ejs", { errorName, errorDescription });
    }
  }
}

module.exports = UserController;
