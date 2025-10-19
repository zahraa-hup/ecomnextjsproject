import React from "react";
import { axiosapi } from "@/app/_utils/axiosinstance";
export async function DELETE(req) {
  const res = await req.url;
  const urlobject = new URL(res);
  const docid = urlobject.searchParams.get("id");
  const response = await axiosapi.delete(`api/carts/${docid}`);
  //console.log("//////////////////////////////")
  if (response.status > 200 && response.status < 300) {
    return new Response("deleted");
  } else return new Response("not deleted");
}
