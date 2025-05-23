const RegCollection = require("../models/RegData");
const AdminProductCollections = require("../models/AdminProduct");
const QueryCollections = require("../models/Query");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const homePage = (req, res) => {
  res.send("Hello Project Class");
};

const RegData = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({ message: "All fields are required 🫤" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const record = new RegCollection({
      FirstName: firstName,
      LastName: lastName,
      EmailAddress: email,
      Password: hashPassword,
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

    if (!userCheck) {
      return res.status(400).json({ message: "User not found !" });
    }

    const matchPass = await bcrypt.compare(pass, userCheck.Password);

    if (!matchPass) {
      return res.status(400).json({ message: "Invalid credentials 🫤 " });
    }

    const token = jwt.sign({ id: userCheck._id }, process.env.JWT_SECRET, {
      expiresIn: "5d",
    });
    res.status(200).json({
      data: userCheck,
      Tokens: token,
      message: "Successfully Login 🥰",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

const FrontendProducts = async (req, res) => {
  try {
    const record = await AdminProductCollections.find({
      ProductStatus: "In-Stock",
    });
    res.status(200).json({ data: record, message: "Successfully Send" });
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

const SingleUserProduct = async (req, res) => {
  try {
    const id = req.params.abc;
    const record = await AdminProductCollections.findById(id);
    res.status(200).json({ message: "Successfully Fatch 👍", data: record });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

const latestCollection = async (req, res) => {
  try {
    const record = await AdminProductCollections.find({
      ProductStatus: "In-Stock",
    })
      .sort({ _id: -1 })
      .limit(5);
    res.status(200).json({ data: record, message: "Successfully Send" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

const bestsellerData = async (req, res) => {
  try {
    const record = await AdminProductCollections.find({
      ProductBestSeller: true,
    });
    res.status(200).json({ message: "Successfully send", data: record });
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
  SingleUserProduct,
  latestCollection,
  bestsellerData,
};
