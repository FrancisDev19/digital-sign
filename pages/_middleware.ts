import { setCookie } from 'cookies-next';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {BASEURL} from './api/config'

export const middleware = async (req: NextRequest, res: NextResponse) => {
    const {cookies} = req;

    const access_token = cookies.accessToken;

    if(req.nextUrl.pathname.startsWith('/dashboard')){
        if(!access_token) {
            
        }
    }

}
 