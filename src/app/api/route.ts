import { getProducts } from "app/services/shopify";

export async function GET() {
  const message = "Hello World";
  return Response.json({ message });
}
