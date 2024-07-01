const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

// Update Product
router.put('/update-product-details', async (req, res) => {
  const { id, name, actualPrice, discountPercentage, discountedPrice, description, imageUrl, rating, category } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, {
      name,
      actualPrice,
      discountPercentage,
      discountedPrice,
      description,
      imageUrl,
      rating, // Include rating field in the update
      category // Include category field in the update
    }, { new: true });

    if (!updatedProduct) {
      return res.status(404).send('Product not found');
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
