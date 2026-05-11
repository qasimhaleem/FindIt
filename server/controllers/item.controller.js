const Item = require('../models/item.model');

// @desc    Create a new item
// @route   POST /api/items
// @access  Private
exports.createItem = async (req, res) => {
  try {
    const { type, itemName, category, description, date, location } = req.body;

    if (!type || !itemName || !category || !description || !date || !location) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const item = await Item.create({
      type,
      itemName,
      category,
      description,
      date,
      location,
      user: req.user._id,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get all items
// @route   GET /api/items
// @access  Public
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find().populate('user', 'fullName department phone').sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
