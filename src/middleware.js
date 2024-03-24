import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
const isLoggedIn = false;

if(!isLoggedIn){
  return NextResponse.redirect(new URL('/dashboard', request.url))
}else {
  return NextResponse.redirect(new URL('/customers', request.url))
}

return NextResponse.redirect(new URL('/dashboard', request.url))
}   


const config = {
  matcher: ['/api/:path*', '/customers/:path*'],
}
