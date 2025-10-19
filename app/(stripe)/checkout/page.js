//ssr
import React from "react";
import { redirect } from "next/navigation";
import Stripe from "stripe";
async function page({ searchParams }) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const searchparams = await searchParams;
  console.log("****************************************");
    const total = JSON.parse(searchparams.total);
    const centtotal = Math.round(total * 100); ;
    //console.log(centtotal)
  //console.log(JSON.parse(searchparams.products));

 const session = await stripe.checkout.sessions.create({
   payment_method_types: ["card"],
   mode: "payment",
   line_items: [
     {
       price_data: {
         currency: "usd",
         product_data: { name: "Total Payment" },
         unit_amount: centtotal,
       },
       quantity: 1,
     },
   ],
   success_url: "http://localhost:3000/success",
   cancel_url: "http://localhost:3000/cancel",
   
 });
 redirect(session.url)
}

export default page;
