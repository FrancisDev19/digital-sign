import axios from "axios";
import { deleteCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";

import {BASEURL} from "../config";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const { status } = await axios.post(`${BASEURL}api/v1/auth/logout`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
  });

  if(status === 200){
    deleteCookie('session', {req, res});
  }

  res.status(200).send(status);
  
}
