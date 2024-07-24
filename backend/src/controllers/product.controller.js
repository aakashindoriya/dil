
const Product = require('../models/product.model');

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.send(product);
};

exports.createProduct = async (req, res) => {
  const { name, description, price } = req.body;
  const product = new Product({ name, description, price });
  await product.save();
  res.status(201).send({msg:"product created",product});
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(201).send({msg:"product updated",product});
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).send({msg:"product deleted"});
};
