import express from 'express';
import { ClothingItem } from '../models/ClothingItem.js';

const router = express.Router();

// Get all clothing items
router.get('/', async (req, res) => {
  try {
    const items = await ClothingItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get clothing items by category
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const items = await ClothingItem.find({ category });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get clothing items by weather condition
router.get('/weather/:condition', async (req, res) => {
  try {
    const { condition } = req.params;
    const items = await ClothingItem.find({ weatherConditions: condition });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export const clothingRouter = router;