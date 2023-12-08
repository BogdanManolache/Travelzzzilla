import mongoose from 'mongoose';

let isConnected = false;

export default async function connectDb() {
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log('Connected to database!');
  } catch (error) {
    console.log('Failed to connect to database: ', error);
  }
}
