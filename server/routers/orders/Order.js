

// // const express = require('express');
// // const router = express.Router();
// // const Order = require('../../models/Order');
// // const CartItem = require('../../models/UserCart');


// // // Existing order placement route
// // router.post('/place-order', async (req, res) => {
// //     const { userId, cartItems, totalAmount, userDetails, paymentDetails } = req.body;

// //     if (!userId || !Array.isArray(cartItems) || cartItems.length === 0 || !totalAmount || !userDetails || !paymentDetails) {
// //         return res.status(400).json({ message: 'Missing or invalid required fields' });
// //     }

// //     const requiredUserDetails = ['name', 'address', 'city', 'postalCode', 'country'];
// //     const requiredPaymentDetails = ['cardNumber', 'expiryDate', 'cvv'];

// //     for (let field of requiredUserDetails) {
// //         if (!userDetails[field]) {
// //             return res.status(400).json({ message: `Missing required user detail: ${field}` });
// //         }
// //     }

// //     for (let field of requiredPaymentDetails) {
// //         if (!paymentDetails[field]) {
// //             return res.status(400).json({ message: `Missing required payment detail: ${field}` });
// //         }
// //     }

// //     try {
// //         const newOrder = new Order({
// //             userId,
// //             cartItems,
// //             totalAmount,
// //             userDetails,
// //             paymentDetails,
// //             status: 'Pending',  // Add status field
// //             orderDate: new Date()  // Add orderDate field
// //         });

// //         await newOrder.save();
// //         await CartItem.deleteMany({ userId });

// //         res.status(200).json({ message: 'Order placed successfully', order: newOrder });
// //     } catch (error) {
// //         console.error('Error placing order:', error);
// //         res.status(500).json({ message: 'Internal server error' });
// //     }
// // });

// // // Route to get user orders
// // router.get('/get-user-orders', async (req, res) => {
// //     const userId = req.headers['user-id'];
// //     if (!userId) {
// //         return res.status(400).json({ message: 'User ID is required' });
// //     }

// //     try {
// //         const orders = await Order.find({ userId }).populate('cartItems.productId');
// //         res.status(200).json(orders);
// //     } catch (error) {
// //         console.error('Error fetching orders:', error);
// //         res.status(500).json({ message: 'Internal server error' });
// //     }
// // });

// // module.exports = router;
// const express = require('express');
// const router = express.Router();
// const Order = require('../../models/Order');
// const CartItem = require('../../models/UserCart');
// const User = require('../../models/User');  // Assuming you have a User model
// const nodemailer = require('nodemailer');

// // Existing order placement route
// router.post('/place-order', async (req, res) => {
//     const { userId, cartItems, totalAmount, userDetails, paymentDetails } = req.body;

//     if (!userId || !Array.isArray(cartItems) || cartItems.length === 0 || !totalAmount || !userDetails || !paymentDetails) {
//         return res.status(400).json({ message: 'Missing or invalid required fields' });
//     }

//     const requiredUserDetails = ['name', 'address', 'city', 'postalCode', 'country'];
//     const requiredPaymentDetails = ['cardNumber', 'expiryDate', 'cvv'];

//     for (let field of requiredUserDetails) {
//         if (!userDetails[field]) {
//             return res.status(400).json({ message: `Missing required user detail: ${field}` });
//         }
//     }

//     for (let field of requiredPaymentDetails) {
//         if (!paymentDetails[field]) {
//             return res.status(400).json({ message: `Missing required payment detail: ${field}` });
//         }
//     }

//     try {
//         // Retrieve user email from the database
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const userEmail = user.email;

//         const newOrder = new Order({
//             userId,
//             cartItems,
//             totalAmount,
//             userDetails,
//             paymentDetails,
//             status: 'Pending',  // Add status field
//             orderDate: new Date()  // Add orderDate field
//         });

//         await newOrder.save();
//         await CartItem.deleteMany({ userId });

//         // Set up Nodemailer transporter
//         let transporter = nodemailer.createTransport({
//             service: 'Gmail', // You can use other services
//             auth: {
//                 user: 'mysweethome.odisha@gmail.com',
//                 pass: '',
//             },
//         });

//         // Define email options
//         let mailOptions = {
//             from: 'mysweethome.odisha@gmail.com',
//             to: userEmail,
//             subject: 'Order Confirmation',
//             text: `Thank you for your order!\n\nProducts:\n${cartItems.map(item => `${item.productName} - $${item.price} x ${item.quantity}`).join('\n')}\n\nTotal Price: ₹ ${totalAmount.toFixed(2)}`,
//         };

//         // Send email
//         await transporter.sendMail(mailOptions);

//         res.status(200).json({ message: 'Order placed successfully and email sent', order: newOrder });
//     } catch (error) {
//         console.error('Error placing order:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// // Route to get user orders
// router.get('/get-user-orders', async (req, res) => {
//     const userId = req.headers['user-id'];
//     if (!userId) {
//         return res.status(400).json({ message: 'User ID is required' });
//     }

//     try {
//         const orders = await Order.find({ userId }).populate('cartItems.productId');
//         res.status(200).json(orders);
//     } catch (error) {
//         console.error('Error fetching orders:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Order = require('../../models/Order');
const CartItem = require('../../models/UserCart');
const User = require('../../models/User');
const Product = require('../../models/Product'); // Assuming you have a Product model
const nodemailer = require('nodemailer');
require('dotenv').config();

// Existing order placement route
router.post('/place-order', async (req, res) => {
    const { userId, cartItems, totalAmount, userDetails, paymentDetails } = req.body;

    if (!userId || !Array.isArray(cartItems) || cartItems.length === 0 || !totalAmount || !userDetails || !paymentDetails) {
        return res.status(400).json({ message: 'Missing or invalid required fields' });
    }

    const requiredUserDetails = ['name', 'address', 'city', 'postalCode', 'country'];
    const requiredPaymentDetails = ['cardNumber', 'expiryDate', 'cvv'];

    for (let field of requiredUserDetails) {
        if (!userDetails[field]) {
            return res.status(400).json({ message: `Missing required user detail: ${field}` });
        }
    }

    for (let field of requiredPaymentDetails) {
        if (!paymentDetails[field]) {
            return res.status(400).json({ message: `Missing required payment detail: ${field}` });
        }
    }

    try {
        // Retrieve user email from the database
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const userEmail = user.email;

        // Fetch product details for each item in cart
        const productDetailsPromises = cartItems.map(async item => {
            const product = await Product.findById(item.productId);
            return {
                ...item,
                productName: product.name,
                price: product.discountedPrice,
                actualPrice: product.actualPrice,
                discount: product.discountPercentage,
            };
        });

        const productDetails = await Promise.all(productDetailsPromises);

        const newOrder = new Order({
            userId,
            cartItems: productDetails,
            totalAmount,
            userDetails,
            paymentDetails,
            status: 'Pending',
            orderDate: new Date()
        });

        await newOrder.save();
        await CartItem.deleteMany({ userId });

        // Set up Nodemailer transporter
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'mysweethome.odisha@gmail.com',
                pass: 'fhyz wlym vsdg xyiy',
            },
        });

        // Define email options
        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: 'Order Confirmation',
            text: `Thank you for your order!\n\nProducts:\n${productDetails.map(item => {
                const savedAmount = item.actualPrice - item.price;
                return `${item.productName} - ₹ ${item.price} × 18% GST\nYou saved: ₹ ${savedAmount.toFixed(2)} on ${item.discount}% off\n\n`;
            }).join('\n')}\n\nTotal Price: ₹ ${totalAmount.toFixed(2)}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Order placed successfully and email sent', order: newOrder });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route to get user orders
router.get('/get-user-orders', async (req, res) => {
    const userId = req.headers['user-id'];
    if (!userId) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    try {
        const orders = await Order.find({ userId }).populate('cartItems.productId');
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
