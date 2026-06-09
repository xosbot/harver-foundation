import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL;

export async function POST(request: NextRequest) {
  if (!BACKEND_URL) {
    console.error('BACKEND_URL environment variable is not set');
    return NextResponse.json(
      { detail: 'Server configuration error. Please try again later.' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    
    const response = await fetch(`${BACKEND_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { detail: 'Failed to submit inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
