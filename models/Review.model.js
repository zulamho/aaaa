const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    name: String,
    text: String,
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
