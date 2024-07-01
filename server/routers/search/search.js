// routes/search.js

const express = require('express');
const router = express.Router();
const searchController = require('../../controllers/search/search');

// Route for searching
router.get('/', searchController.search);

module.exports = router;
