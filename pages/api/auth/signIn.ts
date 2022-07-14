import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import {BASEURL} from '../config'
import { setCookie } from 'cookies-next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'POST'){
    const { email, password } = req.body;

    const credentials = {email, password}

    try {
      axios.get(`${BASEURL}sanctum/csrf-cookie`)
      .then(async () => {
        const {data} = await axios.post(
          `${BASEURL}api/v1/auth/login`,
          credentials,
        );

        if(data){
        const today = new Date();
        const expire = new Date();
        expire.setTime(today.getTime() + 3600000*24*14)

        setCookie("accessToken", data.data.token, {req, res, httpOnly: true, sameSite: 'strict', expires: expire, maxAge: 60 * 60, path: "/"});

        res.status(200).json({message: "login successfully"});
        }
      });
    } catch (error) {
      res.status(400).json({message: error})
    }
  } else {
    res.status(405).json({message: `Method ${req.method} not allowed`})
  }
}
