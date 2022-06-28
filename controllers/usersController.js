const { userDao } = require("../DAOs/swicht");


class UserController {
  
  // //>|  deleteUser
  async deleteUser() {
    try {
      await userDao.deleteAll()
    } catch (error) {
      console.log(error);
      return res.redirect("/errorRoute");
    }
  }
  //>| dataUser
  async dataUser() {
    try {
      const user = await userDao.getAll()
      const uID = user[0];
      return uID;
    } catch (error) {
      console.log(error+'acasaa');
      return res.redirect("/errorRoute");
    }
  }
  // >|  addUser
  async addUser(req, res) {
    try {
      const { email, password, userName, userType } = req.body;
     await userDao.create({ email, password, userName, userType });
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
