const RegCollection = require("../models/RegData");
const AdminProductCollections = require("../models/AdminProduct");
const QueryCollections = require("../models/Query");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const homePage = (req, res) => {
  try {
    res.status(200).json({ message: "Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

const OrderController = async (req, res) => {
  const { amount, currency, receipt } = req.body;
  const options = {
    amount: amount * 100,
    currency,
    receipt,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).send(err);
  }
};

const VerifyController = (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
  const generated_signature = hmac.digest("hex");

  if (generated_signature === razorpay_signature) {
    res.json({ success: true, message: "Payment verified successfully" });
  } else {
    res.json({ success: false, message: "Payment verification failed" });
  }
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
      expiresIn: "1h",
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
  OrderController,
  VerifyController,
};
