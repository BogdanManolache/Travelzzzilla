import mongoose from 'mongoose';

const citySchema = new mongoose.Schema(
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
    elevation: {
      type: Number,
      default: null,
    },
    country_code: {
      type: String,
      default: null,
    },
    country: {
      type: String,
      default: null,
    },
    admin1: {
      type: String,
      default: null,
    },
    population: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true },
);

const City = mongoose.models.City || mongoose.model('City', citySchema);

export default City;
