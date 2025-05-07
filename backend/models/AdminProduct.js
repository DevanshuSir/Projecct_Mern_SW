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
  ProductBestSeller: Boolean,
});

module.exports = model("AdminProduct", AdminProductSchema);
