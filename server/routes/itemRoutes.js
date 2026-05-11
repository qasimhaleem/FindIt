const express = require('express');
const router = express.Router();
const { createItem, getItems, getItemById, getUserItems, updateItem, deleteItem } = require('../controllers/item.controller');
const { protect } = require('../middleware/auth.middleware');

router.route('/')
  .post(protect, createItem)
  .get(getItems);

router.route('/me')
  .get(protect, getUserItems);

router.route('/:id')
  .get(getItemById)
  .put(protect, updateItem)
  .delete(protect, deleteItem);

module.exports = router;
