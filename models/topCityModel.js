import mongoose from 'mongoose';

const topCitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    country_code: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
);

const TopCity =
  mongoose.models.TopCity || mongoose.model('TopCity', topCitySchema);

export default TopCity;
