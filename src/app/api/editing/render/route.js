export async function POST(request) {
  return new Response(
    JSON.stringify({
      html: "<div>SSR placeholder</div>",
      statusCode: 200
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

export function GET() {
  return new Response("Method Not Allowed", {
    status: 405
  });
}
