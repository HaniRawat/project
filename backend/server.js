import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRouter } from './routes/user.js';
import { clothingRouter } from './routes/clothing.js';
import { outfitRouter } from './routes/outfit.js';
import { weatherRouter } from './routes/weather.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRouter);
app.use('/api/clothing', clothingRouter);
app.use('/api/outfits', outfitRouter);
app.use('/api/weather', weatherRouter);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});