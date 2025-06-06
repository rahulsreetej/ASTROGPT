import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, birthdate } = body;

  // 👉 Simulate success (later you’ll connect Stripe)
  console.log(`Charging $0.50 for ${name} born on ${birthdate}`);

  return NextResponse.json({ success: true, clientSecret: 'mock_secret' });
}
