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


//fdjkf
mongoose
  .connect(
    "mongodb+srv://into:code@cluster0.56zzw.mongodb.net/quadcopter?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(4000, () => {
      console.log("server is work");
    });
    console.log("server is ok");
  });
