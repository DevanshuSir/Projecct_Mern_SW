const api = require("express").Router();
const userController = require("../controller/user");

api.get("/", userController.homePage);
api.post("/regdata", userController.RegData);
api.post("/sigindata", userController.LoginData);

module.exports = api;
