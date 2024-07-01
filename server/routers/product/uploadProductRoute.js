const express = require('express');
const router = express.Router();
const uploadProduct = require('../../controllers/product/uploadProduct');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const Product = require('../../models/Product');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dc7vztzup',
  api_key: '187955688287766',
  api_secret: 'bkx6HJAlLokm38dA68UjGbyh8u4'
});

// Set up multer storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'mySweetHome.com', // Optional - specify your folder name
    allowed_formats: ['jpg', 'jpeg', 'png'], // Optional - specify allowed formats
    // Other optional parameters can be added here
  }
});
const upload = multer({ storage: storage });

// POST route for uploading product details
router.post('/upload-product-details', upload.single('image'), uploadProduct.uploadProduct);

module.exports = router;
