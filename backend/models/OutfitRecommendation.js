import mongoose from 'mongoose';

const outfitRecommendationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ClothingItem',
  }],
  weatherCondition: {
    condition: String,
    temperature: Number,
    precipitation: Boolean,
    windSpeed: Number,
  },
  locationContext: {
    latitude: Number,
    longitude: Number,
    city: String,
    country: String,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  userFeedback: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const OutfitRecommendation = mongoose.model('OutfitRecommendation', outfitRecommendationSchema);