const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['lost', 'found'],
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  status: {
    type: String,
    enum: ['open', 'resolved'],
    default: 'open',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, {
  timestamps: true,
});

// Performance indexes
itemSchema.index({ createdAt: -1 });
itemSchema.index({ type: 1 });
itemSchema.index({ status: 1 });
itemSchema.index({ user: 1 });
itemSchema.index({ itemName: 'text', description: 'text', location: 'text', category: 'text' });

module.exports = mongoose.model('Item', itemSchema);
