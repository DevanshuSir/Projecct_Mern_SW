const AdminProductCollection = require("../models/AdminProduct");

const adminproducts = async (req, res) => {
  try {
    const { Title, Desc, Price, Rating, Size, BestSeller } = req.body;

    const record = new AdminProductCollection({
      ProductName: Title,
      ProductDescription: Desc,
      ProductPrice: Price,
      ProductRating: Rating,
      ProductSizes: Size,
      ProductBestSeller: BestSeller,
    });

    await record.save();
    res.status(200).json({ message: "Successfully Insert Product 😍" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

const adminAllProducts = async (req, res) => {
  try {
    const record = await AdminProductCollection.find();
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
  }
};

module.exports = {
  adminproducts,
  adminAllProducts,
};
