"use client";
import { useEffect, useState, useContext } from "react";
import { cartcontext } from "../_context/cartcontext";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
function Cartdetails() {
  const { cartdata, setcartdata } = useContext(cartcontext);
  const { user } = useUser();
  //const [cartdata, setcartdata] = useState([]);

  console.log(user);
  useEffect(function () {
    axios
      .get(`/api/cartdetails?user=${user.primaryEmailAddress.emailAddress}`)
      .then(function (res) {
        //console.log(res.data);

        setcartdata(res.data);
      });
  }, []);
  return (
    <>
      {cartdata.length > 0 ? (
        <div className="bg-gray-200 absolute top-[120%] w-[260px] h-[200px] overflow-y-auto right-0 flex flex-col rounded-sm pt-3 pb-5 z-[1000]">
          {cartdata.map(function (item, index) {
            return (
              <div className="flex gap-5 p-5" key={index}>
                <Image
                  src={item?.bannerurl}
                  width={80}
                  height={100}
                  className="rounded-sm"
                  alt=""
                />

                <div>
                  <b className="text-[15px] line-clamp-1">{item.title}</b>
                  <div className="text-[13px] line-clamp-1">
                    category : {item.category}
                  </div>
                  <div className="text-[13px] line-clamp-1">
                    price : {item.price}
                  </div>
                </div>
              </div>
            );
          })}

          <Link
            href={`/mycart`}
            className="self-center h-[30px] text-center p-2 bg-blue-600  hover:bg-blue-700 rounded-sm text-white flex items-center"
          >
            View my cart
          </Link>
        </div>
      ) : null}
    </>
  );
}

export default Cartdetails;
