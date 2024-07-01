const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  actualPrice: { type: Number, required: true },
  discountPercentage: { type: Number, required: true },
  discountedPrice: { type: Number, required: true },  // could also be derived in the app instead of stored
  description: { type: String, required: false },
  imageUrl: { type: String, required: false },
  rating: { type: Number, min: 1, max: 5, required: false },
  category: { type: String, required: true }  // assuming category must be specified
});

module.exports = mongoose.model('Product', ProductSchema);
