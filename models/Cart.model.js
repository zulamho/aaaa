const mongoose = require ('mongoose');

const cartSchema = mongoose.Schema(
    {
      productId: {
       type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      }
    },
  );
  const Cart = mongoose.model("Cart", cartSchema);
  
  module.exports = Cart;
