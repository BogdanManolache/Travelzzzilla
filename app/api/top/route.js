import connectDb from '@/db/mongodb';
import TopCity from '@/models/topCityModel';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDb();
  const cities = await TopCity.find();
  return NextResponse.json({ cities });
}
//
export async function POST(request) {
  const city = await request.json();
  await connectDb();
  await TopCity.create(city);
  return NextResponse.json({
    success: true,
    message: 'City added to database',
  });
}

export async function DELETE(request) {
  await connectDb();
  await TopCity.deleteMany();
  return NextResponse.json({
    success: true,
    message: 'Cities deleted from database',
  });
}
