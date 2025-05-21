const AdminProductCollection = require("../models/AdminProduct");
const QueryCollections = require("../models/Query");
const nodemailer = require("nodemailer");

const adminproducts = async (req, res) => {
  try {
    const PImage = req.file.filename;
    const { Title, Desc, Price, Rating, Size, BestSeller } = req.body;

    if (
      !Title ||
      !Desc ||
      !Price ||
      !Rating ||
      !Size ||
      !BestSeller ||
      !PImage
    ) {
      res.status(400).json({ message: "All fields are required 🫤" });
    }

    const record = new AdminProductCollection({
      ProductName: Title,
      ProductDescription: Desc,
      ProductPrice: parseFloat(Price),
      ProductRating: parseFloat(Rating),
      ProductSizes: Size,
      ProductBestSeller: JSON.parse(BestSeller),
      ProductImage: PImage,
    });
    await record.save();
    res.status(200).json({ message: "Successfully Insert Product 😍" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

const adminAllProducts = async (req, res) => {
  try {
    const record = await AdminProductCollection.find().sort({ _id: -1 });
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

const adminProductDelete = async (req, res) => {
  try {
    const id = req.params.abc;
    await AdminProductCollection.findByIdAndDelete(id);
    res.status(200).json({ message: "Successfully Delete 😉" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

const adminSingleProduct = async (req, res) => {
  try {
    const id = req.params.abc;
    const record = await AdminProductCollection.findById(id);
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

const adminNewProductUpdate = async (req, res) => {
  try {
    const { Title, Desc, Price, Rating, Size, BestSeller, PStatus } = req.body;
    const id = req.params.abc;

    await AdminProductCollection.findByIdAndUpdate(id, {
      ProductName: Title,
      ProductDescription: Desc,
      ProductPrice: Price,
      ProductRating: Rating,
      ProductSizes: Size,
      ProductBestSeller: BestSeller,
      ProductStatus: PStatus,
    });

    res.status(200).json({ message: "Successfully Update ✔️" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

const QueryAdminData = async (req, res) => {
  try {
    const queryData = await QueryCollections.find();
    res.status(200).json(queryData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

const queryDelete = async (req, res) => {
  try {
    const id = req.params.abc;
    await QueryCollections.findByIdAndDelete(id);
    res.status(200).json({ message: "Successfully Delete 👍" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

const userQueryData = async (req, res) => {
  try {
    const id = req.params.abc;
    const data = await QueryCollections.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

const usermailReply = async (req, res) => {
  try {
    const { to, sub, mailBody } = req.body;
    const id = req.params.abc;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "dkexpress06@gmail.com",
        pass: "isrluqaunwephlts",
      },
    });

    const info = transporter.sendMail({
      from: '"OnlineShop" <dkexpress06@gmail.com>',
      to: to,
      subject: sub,
      text: mailBody, // plain‑text body
      html: mailBody, // HTML body
    });

    await QueryCollections.findByIdAndUpdate(id, {
      QueryStatus: "Read",
    });

    res.status(200).json({ message: "Successfully Reply 😉" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

module.exports = {
  adminproducts,
  adminAllProducts,
  adminProductDelete,
  adminSingleProduct,
  adminNewProductUpdate,
  QueryAdminData,
  queryDelete,
  userQueryData,
  usermailReply,
};
