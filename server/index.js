// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const connectDB = require('./config/database');
// const uploadProduct = require('./routers/product/uploadProductRoute');
// const getAllProducts = require('./routers/product/getAllProducts')
// const singleProductDetails = require('./routers/product/singleProductDetails');
// const updateProductRoutes = require('./routers/product/updateProductRoute')
// const deleteProduct = require('./routers/product/deleteProduct');
// const userLoginAndRegister = require('./routers/user/userLoginAndRegister');
// const resetPasswordRoute = require('./routers/user/resetPasswordRoutes');
// const search = require('./routers/search/search');
// const user = require('./routers/user/user');
// // Load environment variables
// require('dotenv').config();

// // Connect to MongoDB
// connectDB();

// const app = express();


// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });


// // middlewares
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// app.use('/api', uploadProduct);
// app.use('/api', getAllProducts);
// app.use('/api', singleProductDetails);
// app.use('/api', updateProductRoutes);
// app.use('/api', deleteProduct)
// app.use('/api/search', search);
// app.use('/auth', resetPasswordRoute);
// app.use('/auth', userLoginAndRegister);
// app.use('/auth', user)



// // Route handling
// app.get('/example', (req, res) => {
//     console.log("hello");
//     res.send("hello");
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const uploadProduct = require('./routers/product/uploadProductRoute');
const getAllProducts = require('./routers/product/getAllProducts')
const singleProductDetails = require('./routers/product/singleProductDetails');
const updateProductRoutes = require('./routers/product/updateProductRoute')
const deleteProduct = require('./routers/product/deleteProduct');
const userLoginAndRegister = require('./routers/user/userLoginAndRegister');
const resetPasswordRoute = require('./routers/user/resetPasswordRoutes');
const search = require('./routers/search/search');
const UserCart = require('./routers/cart/UserCart');
const Order = require('./routers/orders/Order');
const ContactUsRoute = require('./routers/contact/ContactUsRoute');
const productsDataRoute = require('./routers/data/products')

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true, // Allow credentials
}));

app.use(bodyParser.json());

// Routes
app.use('/api', uploadProduct);
app.use('/api', getAllProducts);
app.use('/api', singleProductDetails);
app.use('/api', updateProductRoutes);
app.use('/api', deleteProduct);
app.use('/api/cart', UserCart);
app.use('/api', Order);
app.use('/api', productsDataRoute);
app.use('/api', ContactUsRoute);



app.use('/api/search', search);
app.use('/auth', resetPasswordRoute);
app.use('/auth', userLoginAndRegister);

// Route handling
app.get('/example', (req, res) => {
    console.log("hello");
    res.send("hello");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
