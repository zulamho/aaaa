const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(cors());
app.use("/image", express.static(path.resolve(__dirname, "image")));
app.use(require("./routes/index"));

app.use(express.static(path.resolve(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

mongoose
  .connect(process.env.MONGO_SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server is work");
    });
    console.log("server is ok");
  });
