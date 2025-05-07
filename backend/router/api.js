const api = require("express").Router();
const userController = require("../controller/user");
const adminController = require("../controller/admin");

api.get("/", userController.homePage);
api.post("/regdata", userController.RegData);
api.post("/sigindata", userController.LoginData);
api.post("/adminproductdata", adminController.adminproducts);
api.get("/adminallproducts", adminController.adminAllProducts);

module.exports = api;
