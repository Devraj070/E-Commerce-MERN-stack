// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../../models/Product'); // Adjust the path as needed

// Get product data
router.get('/product-data', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
