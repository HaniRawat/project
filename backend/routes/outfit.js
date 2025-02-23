import express from 'express';
import { OutfitRecommendation } from '../models/OutfitRecommendation.js';

const router = express.Router();

// Get outfit recommendations for a user
router.get('/recommendations', async (req, res) => {
  try {
    const { userId } = req.user; // From auth middleware
    const recommendations = await OutfitRecommendation.find({ user: userId })
      .populate('items')
      .sort('-createdAt');
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create outfit recommendation
router.post('/recommendations', async (req, res) => {
  try {
    const { userId } = req.user; // From auth middleware
    const recommendation = new OutfitRecommendation({
      user: userId,
      ...req.body,
    });
    await recommendation.save();
    res.status(201).json(recommendation);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update outfit recommendation (rating and feedback)
router.put('/recommendations/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, userFeedback } = req.body;
    const recommendation = await OutfitRecommendation.findByIdAndUpdate(
      id,
      { rating, userFeedback },
      { new: true }
    );
    res.json(recommendation);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export const outfitRouter = router;