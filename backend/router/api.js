const api = require("express").Router();
const userController = require("../controller/user");
const adminController = require("../controller/admin");
const upload = require("../middleware/multerMiddleware");
const auth = require("../middleware/auth");

api.get("/homepage", auth, userController.homePage);
api.post("/regdata", userController.RegData);
api.post("/sigindata", userController.LoginData);
api.post(
  "/adminproductdata",
  upload.single("image"),
  adminController.adminproducts
);
api.get("/adminallproducts", adminController.adminAllProducts);
api.delete("/adminproductdelete/:abc", adminController.adminProductDelete);
api.get("/adminsingleproductupdate/:abc", adminController.adminSingleProduct);
api.put("/adminnewproductupdate/:abc", adminController.adminNewProductUpdate);
api.get("/frotendproducts", auth, userController.FrontendProducts);
api.post("/querydata", userController.QueryData);
api.get("/queryadmindata", adminController.QueryAdminData);
api.delete("/querydelete/:abc", adminController.queryDelete);
api.get("/userquerydata/:abc", adminController.userQueryData);
api.post("/usermailreply/:abc", adminController.usermailReply);
api.get("/singleuserproduct/:abc", userController.SingleUserProduct);
api.get("/latestcollection", userController.latestCollection);
api.get("/bestsellerdata", userController.bestsellerData);
api.post("/create-order", userController.OrderController);
api.post("/verify", userController.VerifyController);

module.exports = api;
