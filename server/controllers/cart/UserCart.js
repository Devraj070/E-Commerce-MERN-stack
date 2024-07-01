const CartItem = require('../../models/UserCart');

// Add item to cart
const addToCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    // Validate request body
    if (!userId || !productId) {
      return res.status(400).json({ error: 'Both userId and productId are required' });
    }

    // Check if the item already exists in the user's cart
    const existingItem = await CartItem.findOne({ userId, productId });
    if (existingItem) {
      return res.status(400).json({ error: 'Item already in cart' });
    }

    const newItem = new CartItem({ userId, productId });
    await newItem.save();
    res.status(201).json({ message: 'Item added to cart successfully' });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get user's cart items
const getUserCart = async (req, res) => {
  try {
    const userId = req.params.userId;
    const cartItems = await CartItem.find({ userId });
    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error fetching user cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//Remove product to cart
const RemoveProduct = async (req, res) => {
  try {
    // Find the cart item by product ID and delete it
    const cartItem = await CartItem.findOneAndDelete({ productId: req.params.productId });

    if (!cartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    res.status(200).json({ message: 'Cart item removed successfully' });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



module.exports = { addToCart, getUserCart, RemoveProduct };
