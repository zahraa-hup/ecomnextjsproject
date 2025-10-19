import React from "react";
import { axiosapi } from "@/app/_utils/axiosinstance";
export async function GET(req,{ params }) {
  const paramsobj = await params;

  console.log(paramsobj);
  const res = await axiosapi.get(`/api/products/${paramsobj.id}?populate=*`, {
    cache: "no-store",
  });
  return new Response(JSON.stringify(res.data.data));
}
