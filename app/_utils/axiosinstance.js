
import axios from "axios";
// base url
//const baseurl = "http://localhost:1337/";
const baseurl = "https://wonderful-moonlight-e6dec8920a.strapiapp.com/";
//api key 
const apikey = process.env.STRAPI_API_TOKEN;
// axios instance creation
console.log("hello")
console.log(apikey)
export const axiosapi = axios.create({
  baseURL: baseurl,
  headers: {
    Authorization: `Bearer ${apikey}`,
  },
});

