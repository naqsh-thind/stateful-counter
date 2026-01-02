const express = require('express');
const router = express.Router();
const Counter = require('../models/Counter');

// GET /api/counter - Get the current counter value
router.get('/', async (req, res) => {
  try {
    let counter = await Counter.findOne();
    
    // If no counter exists, create one with default value 0
    if (!counter) {
      counter = await Counter.create({ value: 0 });
    }
    
    res.json({ value: counter.value });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching counter', error: error.message });
  }
});

// PUT /api/counter - Update the counter value
router.put('/', async (req, res) => {
  try {
    const { value } = req.body;
    
    // Validate that value is a number
    if (typeof value !== 'number') {
      return res.status(400).json({ message: 'Value must be a number' });
    }
    
    let counter = await Counter.findOne();
    
    if (!counter) {
      counter = await Counter.create({ value });
    } else {
      counter.value = value;
      await counter.save();
    }
    
    res.json({ value: counter.value });
  } catch (error) {
    res.status(500).json({ message: 'Error updating counter', error: error.message });
  }
});

module.exports = router;