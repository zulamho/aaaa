const Cart = require("../models/Cart.model");

module.exports.cartController = {
  createCart: async (req, res) => {
    try {
      await Cart.create(req.body.productId);
      res.json("добавлено в корзину дохьун");
    } catch (err) {
      res.json(err);
    }
  },

  getCart: async (req, res) => {
    try {
      const cart = await Cart.find();
      res.json(cart);
    } catch (e) {
      res.json("Ошибка");
    }
  },

  deleteCart: async (req, res) => {
    try {
      await Cart.findByIdAndCart(req.params.id);
      res.json("удален");
    } catch (err) {
      res.json(err);
    }
  },
};
