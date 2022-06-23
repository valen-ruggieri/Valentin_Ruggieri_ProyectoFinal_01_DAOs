const Carts = require("../models/carts");
const Products = require("../models/products");
const UserController = require("./usersController");
const userController = new UserController();

class CartController {
  //>|    closeCart
  async closeCart() {
    try {
      await Carts.deleteMany();
    } catch (error) {
      console.log(error);
      return res.redirect("/errorRoute");
    }
  }

  // >| getCart
  async getCart(req, res) {
    try {
      const uID = await userController.dataUser();
      const productosCarrito = await Carts.find().lean();
      res.render("carrito.ejs", { productosCarrito, uID });
    } catch (error) {
      console.log(error);
      return res.redirect("/errorRoute");
    }
  }

  // >| addProductToCart
  async addProductToCart(req, res) {
    try {
      const id = req.params.IDproducto;
      const product = await Products.findById(id).lean();
      const cart = new Carts(product);
      await cart.save();
      res.redirect("/api/productos/tienda");
    } catch (error) {
      console.log(error);
      return res.redirect("/errorRoute");
    }
  }

  // >| deleteCart
  async deleteCart(req, res) {
    try {
      await Carts.deleteMany();
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
      await Carts.findByIdAndDelete(id);
      res.redirect("/api/carrito/productos");
    } catch (error) {
      console.log(error);
      return res.redirect("/errorRoute");
    }
  }
}

module.exports = CartController;
