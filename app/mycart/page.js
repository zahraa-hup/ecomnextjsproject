"use client";
import React from "react";
import { useEffect, useContext, useRef } from "react";
import { cartcontext } from "../_context/cartcontext";
import Image from "next/image";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
function page() {
  const { user } = useUser();
  const total = useRef();
  const { settogglecart, cartdata, setcartdata, setcartnum } =
    useContext(cartcontext);
  console.log(cartdata);
  useEffect(
    function () {
      if (user) {
        axios
          .get(
            `/api/cartdetails?user=${user?.primaryEmailAddress?.emailAddress}`
          )
          .then(function (res) {
            setcartdata(res.data);
          });
      }

      settogglecart(false);
    },
    [user]
  );
  async function handledeleteclicked(id) {
    const res = await axios.delete(`api/deleteitem?id=${id}`);
    if (res.data === "deleted") {
      axios
        .get(`/api/cartdetails?user=${user?.primaryEmailAddress?.emailAddress}`)
        .then(function (res) {
          setcartdata(res.data);
          setcartnum(res.data.length);
        });
    }
  }
  return (
    <div className="mx-auto max-w-screen-xl px-2 sm:px-4 lg:px-8  mt-10 ">
      <b className="text-3xl text-center block"> Your Cart </b>

      {cartdata.length > 0 ? (
        <div className="mt-15">
          {cartdata.map(function (item, index) {
            return (
              <div
                key={index}
                className=" flex justify-between mt-5 items-center  w-[80%] mx-auto px-2"
              >
                <div className="flex gap-5 p-3" key={index}>
                  <Image
                    src={item?.bannerurl}
                    width={80}
                    height={100}
                    className="rounded-sm"
                    alt=""
                  />

                  <div>
                    <b className="text-[15px] line-clamp-1">{item.title}</b>
                    <div className="text-[13px] line-clamp-1 text-gray-500">
                      category : {item.category}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="line-clamp-1">{item.price} $</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-gray-500 cursor-pointer hover:text-red-600"
                    onClick={function () {
                      handledeleteclicked(item.documentId);
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
          <div className="flex flex-col gap-5  mt-10 w-[70%] mx-auto px-10">
            <div className="flex justify-between items-center ">
              <div className="text-2xl">total</div>
              <div>
                {cartdata.reduce((total, item) => {
                  return Math.round(total + item.price);
                }, 0)}{" "}
                ${/*=> initial value=0*/}
              </div>
            </div>
            <Link
              href={`/checkout?total=${JSON.stringify(
                cartdata.reduce((total, item) => {
                  return total + item.price;
                }, 0)
              )}`}
              className="cursor-pointer bg-gray-600 p-3 rounded-sm text-white hover:bg-gray-700 w-[100px] self-end "
            >
              check out
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default page;
