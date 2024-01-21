import axios from "axios";
import { env } from "../../config/environment";

export const loginUser = async (username, password) => {
  console.log(env);
  try {
    const { data } = await axios.post(`${env.apiBaseUrl}/signin`, {
      username,
      password,
    });
    return data;
  } catch (error) {
    console.log("THERE WAS AN ERROR => ", error);
    return error;
  }
};
