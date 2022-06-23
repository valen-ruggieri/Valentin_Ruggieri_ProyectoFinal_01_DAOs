const express = require("express");
const routerCarrito = express.Router();
const path = require("path");
const CartController = require("../../controllers/cartsController");
const { userPermissionCliente } = require("../../Validations/userPermission");
const cartController = new CartController();

routerCarrito.use(express.static(path.join(__dirname + "/public")));

// >| getCart

routerCarrito.get("/carrito/productos", userPermissionCliente(),async (req, res) => {
  await cartController.getCart(req, res);
});

//>| addProductToCart

routerCarrito.get("/carrito/add/:IDproducto",userPermissionCliente(), async (req, res) => {
  await cartController.addProductToCart(req, res);
});

//>| deleteCart

routerCarrito.get("/carrito/delete", userPermissionCliente(),async (req, res) => {
  await cartController.deleteCart(req, res);
});

//>| deleteProductToCart

routerCarrito.get("/carrito/delete/:id",userPermissionCliente(), async (req, res) => {
  await cartController.deleteProductToCart(req, res);
});

module.exports = routerCarrito;
