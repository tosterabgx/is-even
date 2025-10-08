import { NextRequest } from 'next/server';

function check(value: string) {
  return (
    value.length != 0 &&
    !value.includes('.') &&
    !value.includes('e') &&
    !isNaN(+value) &&
    +value.slice(-1) % 2 == 0
  );
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ number: string }> },
) {
  const value = (await params).number;

  return new Response(JSON.stringify({ isEven: check(value) }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
