const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    productname: {
      type: String,
      required: true,
      index: { unique: true }
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    discount: {
      type: Number
    },
    category: {
      type: String,
      required: true
    },
    isonsale: {
      type: Boolean
    },
    userid: {
      type: String
    }
  },
  {
    collection: "products"
  }
);

const Product = mongoose.model("Product", schema);
module.exports = Product;
