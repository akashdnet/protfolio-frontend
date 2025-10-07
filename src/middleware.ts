import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { cookies } from 'next/headers'

export async function middleware(req: NextRequest) {
  const cookieStore = await cookies()
  
  const token = cookieStore?.get('access_token')
  // const token = req.cookies.get("access_token")?.value;
  const { pathname } = req.nextUrl;

  console.log(`middleware token: `,token)

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
