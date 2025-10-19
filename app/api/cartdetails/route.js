import { axiosapi } from "@/app/_utils/axiosinstance";

export async function GET(req) {
  const params = await req.url;
  const paramobj = new URL(params);
  const email = paramobj.searchParams.get("user");
  const res = await axiosapi.get(`/api/carts?filters[email][$eq]=${email}`);
  console.log("/////////////////////")
  console.log(res.data.data);
  return new Response(JSON.stringify(res.data.data));
}
