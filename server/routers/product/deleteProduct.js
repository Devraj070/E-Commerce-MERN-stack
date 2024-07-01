const express = require('express');
const Product = require('../../models/Product');
const router = express.Router();

// DELETE route for deleting a product
router.delete('/delete-product/:id', async (req, res) => {
    try {
        // Find and delete the product from the products collection
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send('No product found with given ID.');
        }
        
        // Send a response indicating successful deletion
        res.status(200).send('Product deleted successfully.');
    } catch (error) {
        console.error('Delete Product Error:', error);
        res.status(500).send('Server error during product deletion');
    }
});

module.exports = router;
