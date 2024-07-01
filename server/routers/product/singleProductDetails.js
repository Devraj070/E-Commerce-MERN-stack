// const express = require('express');
// const mongoose = require('mongoose');
// const router = express.Router();
// const Product = require('../../models/Product');

// // GET a product by ID
// router.get('/products/:id', async (req, res) => {
//     const { id } = req.params;

//     try {
//         const product = await Product.findById(id);
//         if (!product) {
//             // No product found, send a 404 response
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         // Product found, send it back as JSON
//         res.json(product);
//     } catch (error) {
//         // Handle MongoDB casting errors (invalid object ID)
//         if (error instanceof mongoose.CastError) {
//             return res.status(400).json({ message: 'Invalid product ID' });
//         }
//         // Log the error for further analysis (ideally to a logging service)
//         console.error('Error accessing the product:', error);
//         // Internal server error, generic message sent to client
//         res.status(500).json({ message: 'An error occurred while retrieving the product' });
//     }
// });

// module.exports = router;


/// using double DB models---->




const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Product = require('../../models/Product');

// GET a product by ID
router.get('/products/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Attempt to find the product using the Product model
        const product = await Product.findById(id);

        if (!product) {
            // If the product is not found using the Product model, try to find it using the FeaturedProduct model
            const featuredProduct = await FeaturedProduct.findById(id);
            
            if (!featuredProduct) {
                // If the product is not found using either model, send a 404 response
                return res.status(404).json({ message: 'Product not found' });
            }

            // If the product is found using the FeaturedProduct model, send it back as JSON
            return res.json(featuredProduct);
        }

        // If the product is found using the Product model, send it back as JSON
        res.json(product);
    } catch (error) {
        // Handle errors
        if (error instanceof mongoose.CastError) {
            return res.status(400).json({ message: 'Invalid product ID' });
        }
        console.error('Error accessing the product:', error);
        res.status(500).json({ message: 'An error occurred while retrieving the product' });
    }
});

module.exports = router;

