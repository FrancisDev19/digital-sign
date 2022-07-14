import { setCookie } from 'cookies-next';
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { BASEURL } from "../config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

    const {cookies} = req;

    const access_token = cookies.accessToken;

    try {
    const {data, headers: returnedHeaders} = await axios({
      method: 'post',
      url: `${BASEURL}api/v1/auth/check`,
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    })

    if(data){
        const today = new Date();
        const expire = new Date();
        expire.setTime(today.getTime() + 3600000*24*14)

        setCookie("accessToken", data.data.token, {req, res, httpOnly: true, sameSite: 'strict', expires: expire, maxAge: 60 * 60, path: "/"});

        res.status(200).json({message: "refresh successfully"});
        }

  } catch (error) {
    
    res.send(error)
  }

}
  
