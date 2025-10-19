"use client";
import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
function Productlist() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [indexst, setindexst] = useState(null);
  const [products, setproducts] = useState([]);

  useEffect(function () {
    axios.get("/api/getproducts").then(function (res) {
      console.log(res.data);
      //console.log(res.data[0].banner.url)
      setproducts(res.data);
    });
  }, []);

  return (
    //continer for all sections
    <div className=" mx-auto  max-w-screen-xl px-2 sm:px-4 lg:px-8   mt-6 gap-3">
      <div className="flex justify-between">
        {" "}
        <p className="font-black mb-2 text-2xl">Prand New</p>
        <div className="flex gap-4">
          <p className="text-blue-600">View All Collections</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-blue-600 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="grid  gap-3 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products?.length > 0
          ? products.map(function (pro, index) {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                
              >
                <Link
                  href={`/productdetails/${pro?.documentId}`}
                  className="group block bg-gray-50 rounded-lg p-3 hover:border-2 border-blue-400 "
                >
                  <Image
                    src={pro?.banner?.url}
                    alt=""
                    className=" rounded-t-lg h-60 w-full "
                    width={400}
                    height={350}
                  />

                  <div className="mt-3 flex justify-between text-sm">
                    <div>
                      <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        {pro.title}
                      </h3>
                      <div className="flex  items-center gap-1 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6 text-gray-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <p className=" text-gray-500 ">{pro?.category}</p>
                      </div>

                      <p
                        className={`mt-1.5 text-xs text-pretty text-gray-500 ${
                          indexst === index ? "" : "line-clamp-2"
                        }  `}
                        onMouseOver={function () {
                          setindexst(index);
                        }}
                      >
                        {pro?.description}
                      </p>
                    </div>

                    <p className="text-gray-900">${pro.price}</p>
                  </div>
                </Link>
              </motion.div>
            );
            })
          : arr.map(function (item, index) {
              return (
                <div
                  className=" bg-gray-400  animate-pulse w-200px h-60 rounded-sm"
                  key={index}
                ></div>
              );
            })}
        <div></div>
      </div>
    </div>
  );
}

export default Productlist;
