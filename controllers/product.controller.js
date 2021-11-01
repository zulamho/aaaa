const Product = require("../models/Product.model");
const path = require("path");
const jwt = require("jsonwebtoken");

module.exports.productController = {
  addProduct: async (req, res) => {
    const { name, price, category, number, description, image } = req.body;
    try {
      const product = await Product.create({
        user: req.user.id,
        name,
        price,
        category,
        number,
        description,
        pathImages: image,
      });
      res.json(product);
    } catch (e) {
      console.log(e);
      res.status(401).json("Ошибка при добавлении");
    }
  },

  getProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (e) {
      res.json("Ошибка");
    }
  },

  getProductOne: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (e) {
      res.json("Ошибка");
    }
  },

  editProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body);
      res.json("Успешно изменено");
    } catch (e) {
      res.json("error");
    }
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
      const product = await Product.findById(id);
      if (product.user.toString() === req.user.id) {
        await product.remove();

        res.json("Успешно удален!");
      }
      return res.status(401).json("Ошибка: нет доступа");
    } catch (e) {
      return res.status(401).json("Ошибка: " + e.toString());
    }
  },

  addImage: async (req, res) => {
    try {
      const img = req.files.image;
      const newFileName = `./image/${
        Math.random() * 10000000000000000
      }${path.extname(img.name)}`;

      img.mv(newFileName, async (err) => {
        if (err) {
          console.log(err);
        } else {
          res.json({
            success: "file uploaded",
            image: newFileName,
          });
        }
      });
    } catch (e) {
      res.json(e);
    }
  },

  getProductsCategory: async (req, res) => {
    try {
      const product = await Product.find({ category: req.params.id });
      res.json(product);
    } catch (e) {
      res.json("Ошибка");
    }
  },
};
