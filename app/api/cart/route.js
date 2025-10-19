import { axiosapi } from "@/app/_utils/axiosinstance";
import axios from "axios";
export async function POST(req) {
  const data = await req.json();

  //console.log(data.title, data.price, data.email, data.category, file);

  const response = await axiosapi.post("/api/carts", {
   
    data:data
  });

  return new Response(JSON.stringify(response.data.data));
}
