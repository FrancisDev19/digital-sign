import { NextApiRequest, NextApiResponse } from 'next';
import axios from "axios";
import {BASEURL} from "../config";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const {
    firstName,
    middleName,
    lastName,
    email,
    password,
    passwordConfirmation,
  } = req.body;

  const { data } = await axios.post(`${BASEURL}api/v1/auth/sign-up`, {
    email,
    name: firstName,
    middle_name: middleName,
    last_name: lastName,
    password,
    password_confirmation: passwordConfirmation,
  });

  if (data) {
    res.status(200).json("Registrado");
  }
}
