const RegCollection = require("../models/RegData");
const AdminProductCollections = require("../models/AdminProduct");
const QueryCollections = require("../models/Query");

const homePage = (req, res) => {
  res.send("Hello Project Class");
};

const RegData = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const record = new RegCollection({
      FirstName: firstName,
      LastName: lastName,
      EmailAddress: email,
      Password: password,
    });

    await record.save();
    res.status(200).json({ message: "Successfully Signup 😍" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

const LoginData = async (req, res) => {
  try {
    const { email, pass } = req.body;

    let userCheck = await RegCollection.findOne({ EmailAddress: email });

    // console.log(userCheck);

    if (userCheck != null) {
      if (userCheck.Password == pass) {
        res
          .status(200)
          .json({ data: userCheck, message: "Successfully Login 🥰" });
      } else {
        res.status(404).json({ message: "Email and password did not match" });
      }
    } else {
      res.status(404).json({ message: "Email and password did not match" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

const FrontendProducts = async (req, res) => {
  try {
    const record = await AdminProductCollections.find({
      ProductStatus: "In-Stock",
    });
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

const QueryData = async (req, res) => {
  try {
    const { userEmail, userQuery } = req.body;
    const record = new QueryCollections({
      QueryEmail: userEmail,
      Query: userQuery,
    });
    await record.save();

    res.status(200).json({ message: "Successfully Send Your Query 😉" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

module.exports = {
  homePage,
  RegData,
  LoginData,
  FrontendProducts,
  QueryData,
};
