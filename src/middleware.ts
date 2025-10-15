import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  
  console.log(`
    
    
    
    
    this is middleware`)
  const token = req.cookies.get("access_token")?.value;
  console.log(`
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    middleware: `, token)
  if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }


  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
  ],
};
