import { NextResponse } from "next/server";

export function middleware(request){
    //return NextResponse.redirect(new URL('/product',request.url))
    if(request.nextUrl.pathname.startsWith('/home')){
        return NextResponse.redirect(new URL('/',request.url))
    }
}

// export const config = {
//     matcher:'/product/all'
// }