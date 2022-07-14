import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const {cookies} = req;

    const access_token = cookies.accessToken;

    if(!access_token){
        res.send(false);
    }

    res.send(true);
}
