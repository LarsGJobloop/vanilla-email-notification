export const config = {
  runtime: 'nodejs',
};

export function GET() {
  return new Response("Hello World!")
}