const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const QuerySchema = new Schema({
  QueryEmail: String,
  Query: String,
  QueryStatus: { type: String, default: "Unread" },
});

module.exports = model("UserQuery", QuerySchema);
