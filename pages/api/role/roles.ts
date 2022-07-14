import axios from "axios";
import { BASEURL } from "../config";

export const Roles = async (access_token: string) => {
    
  if(access_token){
    try {

      const { data } = await axios.get(`${BASEURL}api/v1/role`, {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });
    
      return data

    } catch (error) {
      return error
    }
  }

  
}
