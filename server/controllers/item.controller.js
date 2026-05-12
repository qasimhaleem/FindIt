const Item = require('../models/item.model');

// @desc    Create a new item
// @route   POST /api/items
// @access  Private
exports.createItem = async (req, res) => {
  try {
    const { type, itemName, category, description, date, location, imageUrl } = req.body;

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
      imageUrl,
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
    const { q, type, limit, page } = req.query;
    let query = {};
    
    if (q) {
      query.$or = [
        { itemName: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { location: { $regex: q, $options: 'i' } },
        { category: { $regex: q, $options: 'i' } }
      ];
    }
    
    if (type) {
      query.type = type;
    }

    let itemsQuery = Item.find(query).populate('user', 'fullName department phone').sort({ createdAt: -1 });
    
    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 10;
    const skip = (pageNum - 1) * limitNum;
    
    itemsQuery = itemsQuery.skip(skip).limit(limitNum);

    const totalItems = await Item.countDocuments(query);
    const items = await itemsQuery;

    res.json({
      items,
      totalPages: Math.ceil(totalItems / limitNum),
      currentPage: pageNum
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get logged in user's items
// @route   GET /api/items/me
// @access  Private
exports.getUserItems = async (req, res) => {
  try {
    const items = await Item.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Update item
// @route   PUT /api/items/:id
// @access  Private
exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Check for user ownership
    if (item.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Delete item
// @route   DELETE /api/items/:id
// @access  Private
exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Check for user ownership
    if (item.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    await item.deleteOne();

    res.json({ id: req.params.id, message: 'Item removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get single item by ID
// @route   GET /api/items/:id
// @access  Public
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate('user', 'fullName department phone email');
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get item stats
// @route   GET /api/items/stats
// @access  Public
exports.getItemStats = async (req, res) => {
  try {
    const totalLost = await Item.countDocuments({ type: 'lost' });
    const totalFound = await Item.countDocuments({ type: 'found' });
    const totalResolved = await Item.countDocuments({ status: 'resolved' });

    res.json({
      lost: totalLost,
      found: totalFound,
      resolved: totalResolved
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
