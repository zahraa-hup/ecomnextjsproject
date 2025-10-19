"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
//import axios from "axios";
import Navbuttons from "./Navbuttons";
function Header() {
  const path = usePathname();
  console.log(path);
  /* async function handleclick() {
   <button onClick={handleclick}>click</button>
    const res = await axios.get("/api/getproducts");
    console.log(res.data);
  }*/
  const divstate = useRef();
  function togglemenu() {
    divstate.current.classList.toggle("hidden");
  }
  
  return (
    <>
      {path === "/sign-in" ||
      path === "/sign-up" ||
      path == "/success" ? null : (
        <header className="bg-white relative">
          <div className=" mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-2 sm:px-4 lg:px-8 shadow-md shadow-blue-100 ">
            <Link className="block text-teal-600" href="/">
              <Image src={"/logo.svg"} width={40} height={40} alt="" />
            </Link>

            <div className="flex flex-1 items-center justify-end md:justify-between">
              <Nav />
              <div className="flex items-center gap-4">
                <Navbuttons />

                <button
                  className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                  onClick={() => {
                    togglemenu();
                  }}
                >
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className=" hidden float-right bg-gray-200 w-full absolute top-[100%] z-[1000]"
            ref={divstate}
          >
            <ul className="space-y-1 ">
              <li>
                <Link
                  href="/"
                  onClick={() => {
                    togglemenu();
                  }}
                  className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Home </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/testpage/About"
                  onClick={() => {
                    togglemenu();
                  }}
                  className="group flex items-center justify-between rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
                >
                  <span className="text-sm font-medium"> About </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/testpage/Teams"
                  onClick={() => {
                    togglemenu();
                  }}
                  className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Teams </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/testpage/Carrers"
                  onClick={() => {
                    togglemenu();
                  }}
                  className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Carrers </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/History"
                  onClick={() => {
                    togglemenu();
                  }}
                  className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> History </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/testpage/Projects"
                  onClick={() => {
                    togglemenu();
                  }}
                  className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Projects </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/testpage/Blogs"
                  onClick={() => {
                    togglemenu();
                  }}
                  className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Blogs </span>
                </Link>
              </li>
            </ul>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
