const express = require("express");
const router = express.Router();
const Product = require("../models/productschema");
const createError = require("http-errors");
const authenticationMiddleware = require("./../middlewares/authentication");

// base route /products
router.get("/", async (req, res, next) => {
  let products = await Product.find();
  res.send(products);
});

router.get("/:productid", async (req, res, next) => {
  const product = await Product.findById(req.params.productid);
  res.send(product);
});

router.use(authenticationMiddleware);

router.post("/addProduct", async (req, res, next) => {
  const {
    productname,
    description,
    price,
    discount,
    category,
    isonsale,
    userid
  } = req.body;
  const product = new Product({
    productname,
    description,
    price,
    discount,
    category,
    isonsale,
    userid
  });
  product.save(err => {
    if (err) return next(createError(400, err));
    res.send(product);
  });
});

router.get("/user/:userid", async (req, res, next) => {
  let products = await Product.find({ userid: req.params.userid });
  res.send(products);
});

router.patch("/:productid", async (req, res, next) => {
  let product = await Product.findByIdAndUpdate(req.params.productid, req.body);
  res.send(product);
});

router.delete("/:productid", async (req, res, next) => {
  const product = await Product.findByIdAndDelete(
    req.params.productid,
    req.body
  );
  res.send(product);
});
module.exports = router;
