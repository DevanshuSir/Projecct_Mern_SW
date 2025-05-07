const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const RegSchema = new Schema({
  FirstName: String,
  LastName: String,
  EmailAddress: String,
  Password: Number,
});

module.exports = model("Regdata", RegSchema);
