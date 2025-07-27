const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageCtrl');

// Route for home page
router.get('/', pageController.getHomePage);

module.exports = router;
