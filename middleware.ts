import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { validateInstancePassword } from "./app/api/lib";

export function middleware(request: NextRequest) {
  const search = new URLSearchParams(request.url.split("?")[1] ?? "");
  validateInstancePassword(search.get("ip"));
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};