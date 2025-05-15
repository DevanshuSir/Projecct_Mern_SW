const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const AdminProductSchema = new Schema({
  ProductName: String,
  ProductDescription: String,
  ProductPrice: Number,
  ProductRating: Number,
  ProductSizes: {
    type: [String],
    default: [],
  },
  ProductStatus: { type: String, default: "Out-Of-Stock" },
  ProductBestSeller: Boolean,
  ProductImage: String,
});

module.exports = model("AdminProduct", AdminProductSchema);
