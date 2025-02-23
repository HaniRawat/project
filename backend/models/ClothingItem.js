import mongoose from 'mongoose';

const clothingItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: String,
  brand: String,
  sizeRange: [String],
  colors: [String],
  styleTags: [String],
  weatherConditions: [String],
  temperatureRange: {
    min: Number,
    max: Number,
  },
  arModelUrl: String,
  imageUrl: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const ClothingItem = mongoose.model('ClothingItem', clothingItemSchema);