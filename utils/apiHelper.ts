import { DOMAIN } from "@/constants/api";
import axios from "axios";

const http = axios.create({
  baseURL: DOMAIN,
  timeout: 10000,
});

export const getData = async (url: string) => {
  try {
    const result = await http.get(url);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
