import connectDb from '@/db/mongodb';
import City from '@/models/cityModel';
import { NextResponse } from 'next/server';

export async function DELETE(request, { params }) {
  const { city: name } = params;
  const latitude = request.nextUrl.searchParams.get('lat');
  const longitude = request.nextUrl.searchParams.get('long');
  await connectDb();
  await City.deleteOne({ name, latitude, longitude });
  return NextResponse.json({
    success: true,
    message: 'City deleted from database',
  });
}
