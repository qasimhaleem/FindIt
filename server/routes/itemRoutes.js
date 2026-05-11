const express = require('express');
const router = express.Router();
const { createItem, getItems } = require('../controllers/item.controller');
const { protect } = require('../middleware/auth.middleware');

router.route('/')
  .post(protect, createItem)
  .get(getItems);

module.exports = router;
