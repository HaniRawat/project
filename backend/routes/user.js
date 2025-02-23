import express from 'express';
import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// Register user
router.post('/register',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('username').notEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password, username } = req.body;
      
      const existingUser = await User.findOne({ $or: [{ email }, { username }] });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const user = new User({ email, password, username });
      await user.save();

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update measurements
router.put('/measurements', async (req, res) => {
  try {
    const { userId } = req.user; // From auth middleware
    const measurements = req.body;
    
    await User.findByIdAndUpdate(userId, { measurements });
    res.json({ message: 'Measurements updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export const userRouter = router;