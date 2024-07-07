import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "./_lib";

export async function middleware(request: NextRequest) {
  const isLoggedIn = await getSession();

  if (!isLoggedIn && request.nextUrl.pathname.startsWith("/dashboard")) {
    return Response.redirect(new URL("/user/login", request.url));
  }

  if (isLoggedIn && request.nextUrl.pathname.startsWith("/user")) {
    return Response.redirect(new URL("/dashboard", request.url));
  }
}
