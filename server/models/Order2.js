
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    cartItems: [{
        _id: { type: String, required: true },
        userId: { type: String, required: true },
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        product: {
            _id: { type: String, required: true },
            category: { type: String, required: true },
            name: { type: String, required: true },
            actualPrice: { type: Number, required: true },
            discountPercentage: { type: Number, required: true },
            discountedPrice: { type: Number, required: true },
            description: { type: String, required: true },
            imageUrl: { type: String, required: true },
            rating: { type: Number, required: true }
        }
    }],
    totalAmount: { type: Number, required: true },
    userDetails: {
        name: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true }
    },
    paymentDetails: {
        cardNumber: { type: String, required: true },
        expiryDate: { type: String, required: true },
        cvv: { type: String, required: true }
    },
    status: { type: String, default: 'Confirm' },
    orderDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order2', orderSchema);
