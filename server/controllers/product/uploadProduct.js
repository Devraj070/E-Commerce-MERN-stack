const Product = require('../../models/Product');

const uploadProduct = async (req, res) => {
    try {
        // Extract product details from the request body
        const { name, actualPrice, discountPercentage, discountedPrice, description, imageUrl, rating, category } = req.body;

        // Validate the category here if necessary, before creating the product

        // Create a new product object with the category included
        const product = new Product({
            name,
            actualPrice,
            discountPercentage,
            discountedPrice,
            description,
            imageUrl,
            rating,
            category  // Including the new category field
        });

        // Save the product to the database
        await product.save();

        // Send a success response to the client
        res.status(200).json({ success: true, message: 'Product added successfully' });
    } catch (error) {
        // Handle any errors
        console.error('Error adding product:', error);
        res.status(500).json({ success: false, message: 'Failed to add product' });
    }
};

module.exports = {
    uploadProduct
};
