"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { motion } from "framer-motion";
function Thesamecategory({ category }) {
  const [products, setproducts] = useState([]);
  useEffect(function () {
    axios.get(`/api/getsamecategory/${category}`).then(function (res) {
      //console.log(res)
      setproducts(res.data);
    });
  }, []);

  return (
    <div className="md:mt-10">
      <b className="border-b-2 border-b-blue-600 ml-4">
        The items of this category
      </b>
      <div className="    grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
        {products?.length > 0 ? (
          products?.map(function (pro, index) {
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
                    className=" rounded-t-lg h-60 w-full"
                    width={400}
                    height={350}
                  />

                  <div className="mt-3 flex justify-between text-sm">
                    <div>
                      <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        {pro?.title}
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
                        className={`mt-1.5 text-xs text-pretty text-gray-500 `}
                      >
                        {pro?.description}
                      </p>
                    </div>

                    <p className="text-gray-900">${pro?.price}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })
        ) : (
          <b>No elements for this category</b>
        )}
      </div>
    </div>
  );
}

export default Thesamecategory;
