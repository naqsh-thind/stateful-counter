const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Counter', counterSchema);