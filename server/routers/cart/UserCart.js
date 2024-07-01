const express = require('express');
const router = express.Router();
const cartController = require('../../controllers/cart/UserCart');

// Add item to cart
router.post('/add-project-to-cart', cartController.addToCart);

// Get user's cart items
router.get('/get-project-to-cart/:userId', cartController.getUserCart);

router.delete('/remove-from-cart/:productId', cartController.RemoveProduct)

module.exports = router;
