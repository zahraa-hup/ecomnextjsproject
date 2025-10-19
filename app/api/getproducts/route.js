import { axiosapi } from "@/app/_utils/axiosinstance";
export async function GET() {
  const res = await axiosapi.get("api/products?populate=*");
  console.log(res.data.data); //array
  return new Response(JSON.stringify(res.data.data)); //create http response المتوقع وصوله لما اعمل request من fetch /axios
  // Response بياخد params الاول هو ال data اللى راجعه هو بقه بيحولها ل http response بنفسه
}
