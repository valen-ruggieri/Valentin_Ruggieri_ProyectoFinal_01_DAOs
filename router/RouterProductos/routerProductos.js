const express = require("express");
const routerProducts = express.Router();
const path = require("path");
const multer = require("multer");
const ProductsController = require("../../controllers/productsController");
const productController = new ProductsController();
const productSchema = require("../../Validations/productValidation");
const validationProduct = require("../../utils/Middlewares/validationProduct");
const {
  userPermissionCliente,
  userPermissionAdmin,
} = require("../../Validations/userPermission");

const storageContent = multer.diskStorage({
  destination: path.join(__dirname + "/public/images"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

routerProducts.use(express.static(path.join(__dirname + "/public")));
routerProducts.use(express.static("public"));
routerProducts.use(express.static("views"));
routerProducts.use(express.static("partials"));

//>|  multer config

routerProducts.use(
  multer({
    storage: storageContent,
    limits: { fileSize: 1000000 },
    dest: path.join(__dirname + "/public/images"),
  }).single("image")
);

// $                   CLIENTE

// >| getProducts
routerProducts.get(
  "/productos/tienda",
  userPermissionCliente(),
  async (req, res) => {
    await productController.getProductsClient(req, res);
  }
);

//>|  getProductId

routerProducts.get(
  "/productos/producto/:id",
  userPermissionCliente(),
  async (req, res) => {
    await productController.getProductId(req, res);
  }
);

//%                   ADMINISTRADOR

//>| getProducts
routerProducts.get(
  "/productos/all",
  userPermissionAdmin(),
  async (req, res) => {
    await productController.getProductsAdmin(req, res);
  }
);

// >| deleteProduct

routerProducts.get(
  "/productos/delete/:id",
  userPermissionAdmin(),
  async (req, res) => {
    await productController.deleteProduct(req, res);
  }
);

// >|  postProduct

routerProducts.post(
  "/productos/form",
  validationProduct(productSchema),
  async (req, res) => {
    await productController.postProduct(req, res);
  }
);

routerProducts.get("/productos/form", userPermissionAdmin(), (req, res) => {
  res.render("formAdd.ejs");
});

// >|  updateProduct

routerProducts.post(
  "/productos/update/:id",
  validationProduct(productSchema),
  async (req, res) => {
    await productController.updateProduct(req, res);
  }
);

routerProducts.get(
  "/productos/update/:id",
  userPermissionAdmin(),
  (req, res) => {
    res.render("formUpdate.ejs");
  }
);

module.exports = routerProducts;
