import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET() {
  const c = await cookies();
  return Response.json({
    all: c.getAll(),
    langCookie: c.get("translite-lang")?.value ?? null,
  });
}
