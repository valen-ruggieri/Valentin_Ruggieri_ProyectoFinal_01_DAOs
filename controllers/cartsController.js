const { cartDao, productsDao } = require("../DAOs/swicht");

const UserController = require("./usersController");
const userController = new UserController();

class CartController {
  // //>|    closeCart
   async closeCart() {
  try {
        await cartDao.deleteAll();
     } catch (error) {
    console.log(error);
      return res.redirect("/errorRoute");
  }
  }

  // >| getCart
  async getCart(req, res) {
    try {
      const uID = await userController.dataUser();
      const productosCarrito = await cartDao.getAll();
      const productsCount = await productsDao.countAll()
      const cartCount = await cartDao.countAll()
      res.render("carrito.ejs", { productosCarrito, uID,productsCount,cartCount });
    } catch (error) {
      console.log(error);
      return res.redirect("/errorRoute");
    }
  }

  // >| addProductToCart
  async addProductToCart(req, res) {
    try {
      const id = req.params.IDproducto;
      const product = await productsDao.getById(id);
      await cartDao.create(product);
      res.redirect("/api/productos/tienda");
    } catch (error) {
      console.log(error);
      return res.redirect("/errorRoute");
    }
  }

  // >| deleteCart
  async deleteCart(req, res) {
    try {
      await cartDao.deleteAll();
      res.redirect("/api/carrito/productos");
    } catch (error) {
      console.log(error);
      return res.redirect("/errorRoute");
    }
  }

  // >| deleteProductToCart
  async deleteProductToCart(req, res) {
    try {
      const id = req.params.id;
      await cartDao.deleteById(id);
      res.redirect("/api/carrito/productos");
    } catch (error) {
      console.log(error);
      return res.redirect("/errorRoute");
    }
  }
}

module.exports = CartController;
