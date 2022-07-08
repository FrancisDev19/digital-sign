import type { NextRequest } from "next/server";
import {NextResponse} from 'next/server'
import { hasCookie } from "cookies-next";

export async function middleware(req, res) {

    const loginUrl = req.nextUrl.clone();
    const profileUrl = req.nextUrl.clone();
    loginUrl.pathname = "/signIn"
    profileUrl.pathname = "/profile"
    
    const isAuthenticated = hasCookie("session", {req, res});

    if(req.nextUrl.pathname.startsWith('/profile')){
        if(!isAuthenticated){
            return NextResponse.redirect(loginUrl);
        } 
    }

    if(req.nextUrl.pathname.startsWith('/signIn')){
        if(isAuthenticated){
            return NextResponse.redirect(profileUrl);
        } 
    }
    if(req.nextUrl.pathname.startsWith('/signUp')){
        if(isAuthenticated){
            return NextResponse.redirect(profileUrl);
        } 
    }
}