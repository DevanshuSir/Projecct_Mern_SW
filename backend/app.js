const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const apiRouter = require("./router/api");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_STRING)
  .then(() => {
    console.log("Successfully Connect DB ");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(express.json());
app.use("/api", apiRouter);
app.listen(process.env.PORT, () => {
  console.log(`Running On port :- ${process.env.PORT}`);
});
