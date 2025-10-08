import { notFound } from 'next/navigation';
import { NextRequest } from 'next/server';
 
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ number: number }> },
) {
  const checkNumber = +(await params).number;

  if (isNaN(checkNumber)) {notFound()}

  return new Response(JSON.stringify({ isEven: checkNumber % 2 == 0 }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}