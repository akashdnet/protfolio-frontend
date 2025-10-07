import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;
  const { pathname } = req.nextUrl;

  // console.log("MIDDLEWARE HIT:", pathname, "TOKEN:", token);

  if (pathname.startsWith("/dashboard") || pathname.startsWith("/dashboard/blogs") || pathname.startsWith("/dashboard/projects")){
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
  ],
};
