import { axiosapi } from "@/app/_utils/axiosinstance";
export async function GET(req, { params }) {
  const paraob = await params;
 // console.log(paraob.category);
    const res = await axiosapi.get(
      `/api/products?filters[category][$eq]=${paraob.category}&populate=*`
    );
    return new Response(JSON.stringify(res.data.data))
}