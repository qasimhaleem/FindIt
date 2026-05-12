const User = require('../models/user.model');
const Item = require('../models/item.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

exports.register = async (req, res) => {
  try {
    const { fullName, email, phone, department, password } = req.body;

    if (!fullName || !email || !phone || !department || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists Try Another Email Or Phone ' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      fullName,
      email,
      phone,
      department,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get user profile & stats
// @route   GET /api/auth/profile
// @access  Private
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const lostCount = await Item.countDocuments({ user: user._id, type: 'lost' });
    const foundCount = await Item.countDocuments({ user: user._id, type: 'found' });
    
    // Simple mock calculation for Trust Score: base 100 + 10 for each found item
    const trustScore = 100 + (foundCount * 10);

    res.json({
      ...user.toObject(),
      stats: {
        lostCount,
        foundCount,
        trustScore
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.fullName = req.body.fullName || user.fullName;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;
    user.department = req.body.department || user.department;
    if (req.body.directMessage !== undefined) {
      user.directMessage = req.body.directMessage;
    }

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      fullName: updatedUser.fullName,
      email: updatedUser.email,
      phone: updatedUser.phone,
      department: updatedUser.department,
      directMessage: updatedUser.directMessage,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Update user password
// @route   PUT /api/auth/password
// @access  Private
exports.updatePassword = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
       return res.status(400).json({ message: 'Please provide both passwords' });
    }

    if (await bcrypt.compare(currentPassword, user.password)) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
      await user.save();
      res.json({ message: 'Password updated successfully' });
    } else {
      res.status(401).json({ message: 'Incorrect current password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Delete user account and items
// @route   DELETE /api/auth/profile
// @access  Private
exports.deleteAccount = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await Item.deleteMany({ user: user._id });
    await user.deleteOne();
    res.json({ message: 'Account and associated items permanently deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Export user data
// @route   GET /api/auth/export
// @access  Private
exports.exportData = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    const items = await Item.find({ user: user._id });

    const exportObject = {
      profile: user,
      reportedItems: items,
      exportedAt: new Date().toISOString()
    };
    
    // Set headers for download
    res.setHeader('Content-disposition', 'attachment; filename=findit_data_export.json');
    res.setHeader('Content-type', 'application/json');
    res.send(JSON.stringify(exportObject, null, 2));
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
