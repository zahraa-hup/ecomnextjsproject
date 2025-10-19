"use client";

import React, { Suspense } from "react";
import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Thesamecategory from "@/app/_components/Thesamecategory";
import Breadcrumb from "@/app/_components/Breadcrumb";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { cartcontext } from "@/app/_context/cartcontext";
import axios from "axios";

function page({ params }) {
  const { cartnum, setcartnum } = useContext(cartcontext);

  const path = usePathname();
  const [product, setproduct] = useState(null);
  const [paramid, setparamid] = useState(null);
  const { user } = useUser();
 
  useEffect(
    function () {
      if (paramid == null) {
        new Promise(function (resolve) {
          params;
          resolve(params);
        }).then(function (res) {
          setparamid(res.productid);
        });
      }

      if (paramid != null) {
        axios.get(`/api/getoneproduct/${paramid}`).then(function (res) {
          setproduct(res.data);
        });
      }
    },
    [paramid]
  );

  async function  handlebuttonclicked() {
    if (user) {
    const res=await   axios
        .post(`/api/cart`, {
          email: user?.primaryEmailAddress?.emailAddress,
          title: product?.title,
          price: product?.price,
          bannerurl: product?.banner?.url,
          category: product?.category,
        })
     
        
          console.log("/////////////////////////////")
           setcartnum(cartnum + 1);
           //localStorage.setItem("cartnum", JSON.stringify(cartnum + 1));
       
    } else window.location.href = "/sign-up";
  }

  return (
    <>
      {product ? (
        <div className="  mx-auto  max-w-screen-xl py-5  sm:px-4 lg:px-8 ">
          <Breadcrumb path={path} id={product?.id} />
          <div className="grid gap-4 md:grid-cols-2 grid-cols-1 mt-4 ">
            {" "}
            <div className=" flex  md:justify-start justify-center">
              <Image
                src={product?.banner?.url}
                alt=""
                className=" rounded-xl mx-4"
                width={400}
                height={400}
              />
            </div>
            <div className=" p-4">
              <div className="flex flex-col gap-3 ">
                <p>
                  <b className="text-blue-600 mr-2">title:</b>
                  {product?.title}
                </p>
                <p>
                  <b className="text-blue-600 mr-2">description:</b>
                  {product?.description}
                </p>
                <p>
                  <b className="text-blue-600 mr-2">category:</b>
                  {product?.category}
                </p>
                <p className="flex gap-2">
                  {product?.instantdelivery ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 text-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6 text-red-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  <b className="text-blue-600 mr-2">instance of delivery</b>
                </p>

                <p>
                  <b className="text-blue-600 mr-2">price:</b>
                  {product?.price}$
                </p>
              </div>
              <button
                className="bg-blue-600 mt-6 w-full p-3 rounded-lg  cursor-pointer hover:bg-blue-700 text-white flex justify-center gap-2 "
                onClick={handlebuttonclicked}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                <p>Add To Cart</p>
              </button>
            </div>
          </div>

          <Thesamecategory category={product?.category} />
        </div>
      ) : (
        <div className="  mx-auto  max-w-screen-xl py-5  sm:px-4 lg:px-8 ">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            <div className="w-full  flex justify-center">
              <div className="animate-pulse bg-gray-700 w-[300px] h-[300px]"></div>
            </div>
            <div className=" p-4 w-full">
              <div className="flex flex-col gap-3 ">
                <div className="flex items-center ">
                  <b className="text-blue-600 mr-2">title:</b>
                  <div className="animate-pulse bg-gray-500 w-[150px] h-[12px] rounded "></div>
                </div>
                <div className="flex items-center ">
                  <b className="text-blue-600 mr-2">description:</b>
                  <div className="animate-pulse bg-gray-500 w-[150px] h-[12px] rounded "></div>
                </div>
                <div className="flex items-center ">
                  <b className="text-blue-600 mr-2">category:</b>
                  <div className="animate-pulse bg-gray-500 w-[150px] h-[12px] rounded "></div>
                </div>
                <div className="flex gap-2">
                  <div className="animate-pulse w-[25px] h-[25px] rounded-full bg-gray-500"></div>
                  <b className="text-blue-600 mr-2">instance of delivery</b>
                </div>

                <div className="flex items-center ">
                  <b className="text-blue-600 mr-2">price:</b>
                  <div className="animate-pulse bg-gray-500 w-[150px] h-[12px] rounded "></div>
                </div>
              </div>
              <button className="mt-6 w-[100%] p-5 rounded-lg animate-pulse bg-gray-500 "></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default page;
