const api = require("express").Router();
const userController = require("../controller/user");
const adminController = require("../controller/admin");

api.get("/", userController.homePage);
api.post("/regdata", userController.RegData);
api.post("/sigindata", userController.LoginData);
api.post("/adminproductdata", adminController.adminproducts);
api.get("/adminallproducts", adminController.adminAllProducts);
api.delete("/adminproductdelete/:abc", adminController.adminProductDelete);
api.get("/adminsingleproductupdate/:abc", adminController.adminSingleProduct);
api.put("/adminnewproductupdate/:abc", adminController.adminNewProductUpdate);
api.get("/frotendproducts", userController.FrontendProducts);
api.post("/querydata", userController.QueryData);
api.get("/queryadmindata", adminController.QueryAdminData);
api.delete("/querydelete/:abc", adminController.queryDelete);

module.exports = api;
