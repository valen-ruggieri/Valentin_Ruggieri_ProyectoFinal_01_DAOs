const { userDao } = require("../DAOs/swicht");




const userPermissionAdmin = () => async(req, res, next) => {
  try {
   const user =  await userDao.getAll()
   const permissions = user[0].userType
    if (permissions === 'administrador') {
      next();
    } else {
      return res.redirect("/errorRoute");
    }
  } catch (error) {
    const errorName = "Cant permissions";
    const errorDescription = error;
    return res.render("errorUser.ejs", { errorName, errorDescription });
  }
};


const userPermissionCliente = () => async(req, res, next) => {
  try {
   const user =  await userDao.getAll()
   const permissions = user[0].userType
    if (permissions === 'cliente') {
      next();
    } else {
      return res.redirect("/errorRoute");
    }
  } catch (error) {
    const errorName = "Cant permissions";
    const errorDescription = error;
    return res.render("errorUser.ejs", { errorName, errorDescription });
  }
};

module.exports = {userPermissionAdmin,userPermissionCliente};
