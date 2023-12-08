import connectDb from '@/db/mongodb';
import TopCity from '@/models/topCityModel';
import { NextResponse } from 'next/server';

export async function DELETE(request, { params }) {
  const { topCity: name } = params;
  const latitude = request.nextUrl.searchParams.get('lat');
  const longitude = request.nextUrl.searchParams.get('long');
  await connectDb();
  await TopCity.deleteOne({ name, latitude, longitude });
  return NextResponse.json({
    success: true,
    message: 'City deleted from database',
  });
}
