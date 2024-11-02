const productsController = {};

const Product = require('../models/Product');

productsController.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}

productsController.getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
}

productsController.createProducts = async (req, res) => {
    const { name, stock, colour, image, price, finalPrice, size, design } = req.body;
    const newProduct = new Product({
        name,
        stock,
        colour,
        image,
        price,
        finalPrice,
        size,
        design
    })
    await newProduct.save();
    res.json({message: 'Product saved'});
}

productsController.updateProducts = async (req, res) => {
    const { name, stock, colour, image, price, finalPrice, size, design } = req.body;
    await Product.findByIdAndUpdate(req.params.id, {
        name,
        stock,
        colour,
        image,
        price,
        finalPrice,
        size,
        design
    })
    res.json({message: 'Product updated'});
}

productsController.deleteProducts = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({message: 'Product deleted'});
}

module.exports = productsController;