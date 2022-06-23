const Products = require("../models/products");
const UserController = require("./usersController");
const userController = new UserController();

class ProductsController {
  //>|  getProductsClient
  async getProductsClient(req, res) {
    try {
      const uID = await userController.dataUser();
      const productos = await Products.find().lean();
      res.render("productosClientes.ejs", { productos, uID });
    } catch (error) {
      return res.redirect("/errorRoute");
    }
  }
  // >| getProductsAdmin
  async getProductsAdmin(req, res) {
    try {
      const uID = await userController.dataUser();
      const productos = await Products.find().lean();
      res.render("productosAdmin.ejs", { productos, uID });
    } catch (error) {
      return res.redirect("/errorRoute");
    }
  }
  //>|  getProductId
  async getProductId(req, res) {
    try {
      const uID = await userController.dataUser();
      const producto = await Products.findById(req.params.id).lean();
      res.render("productoId.ejs", { producto, uID });
    } catch (error) {
      console.log(error);
      return res.redirect("/errorRoute");
    }
  }

  // >|  deleteProduct
  async deleteProduct(req, res) {
    try {
      const id = req.params.id;
      await Products.findByIdAndDelete(id);
      res.redirect("/api/productos/all");
    } catch (error) {
      return res.redirect("/errorRoute");
    }
  }

  // >| postProduct
  async postProduct(req, res) {
    try {
      const { titulo, precio, descripcion, codigo } = req.body;
      const img = req.file.filename;
      const precioFormat = Number(precio);
      const date = new Date();
      const timestamp = ` ${date.getDay()}/ ${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`;
      const product = new Products({
        titulo,
        precio: precioFormat,
        descripcion,
        codigo,
        img,
        timestamp,
      });
      await product.save();
      res.redirect("/api/productos/all");
    } catch (error) {
      console.log(error);
      return res.redirect("/errorRoute");
    }
  }

  // >| updateProduct
  async updateProduct(req, res) {
    try {
      const { titulo, precio, descripcion, codigo } = req.body;
      const img = req.file.filename;
      const precioFormat = Number(precio);
      const date = new Date();
      const timestamp = ` ${date.getDay()}/ ${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`;
      const id = req.params.id;
      await Products.findByIdAndUpdate(id, {
        titulo,
        precio: precioFormat,
        descripcion,
        codigo,
        img,
        timestamp,
      });
      res.redirect("/api/productos/all");
    } catch (error) {
      return res.redirect("/errorRoute");
    }
  }
}

module.exports = ProductsController;
