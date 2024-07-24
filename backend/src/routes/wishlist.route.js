const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlist.controller');

router.get('/', wishlistController.getAllWishlists);
router.post('/', wishlistController.createWishlist);
router.delete('/:id', wishlistController.deleteWishlist);

module.exports = router;
