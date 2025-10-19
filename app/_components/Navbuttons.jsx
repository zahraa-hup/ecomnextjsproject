"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser, useClerk } from "@clerk/nextjs";
import { useState, useEffect, useRef, useContext } from "react";
import { cartcontext } from "../_context/cartcontext";
import { useRouter } from "next/navigation";
import axios from "axios";
import Dynamiccartloadind from "./Lazycart";
function Navbuttons() {
  const { cartnum, setcartnum, togglecart, settogglecart } =
    useContext(cartcontext);
  const { user } = useUser();
  const [hide, sethide] = useState(true);
  
  const element = useRef();
  const { signOut } = useClerk();
  const router = useRouter();
  useEffect(
    function () {
      /*if (localStorage.getItem("cartnum") == null) {
        setcartnum(0);
      } else */
        if (user) {
          axios
            .get(
              `/api/cartdetails?user=${user?.primaryEmailAddress?.emailAddress}`
            )
            .then(function (res) {
              setcartnum(res?.data?.length);
            });
        }
      
    },
    [user]
  );
  useEffect(function () {
    function handleClickOutside(event) {
      console.log(event.target);
      // لو العنصر موجود والضغط مش جواه
      if (element.current && !element.current.contains(event.target)) {
        sethide(true);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return function () {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      {user ? (
        <div className="flex justify-center items-center gap-5">
          <div className="relative">
            {togglecart ? <Dynamiccartloadind /> : null}
            <div
              className="relative"
              onClick={function () {
                settogglecart(!togglecart);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-blue-600 cursor-pointer"
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
              <b className="absolute top-[-5px] right-[-5px] w-[15px] h-[15px] rounded-full bg-yellow-500 text-center text-[12px]">
                {cartnum}
              </b>
            </div>
          </div>
          <div
            className=" relative"
            onClick={function () {
              sethide(false);
            }}
            ref={element}
          >
            <Image
              src={user.imageUrl}
              width={50}
              height={50}
              alt=""
              className="rounded-full cursor-pointer"
            />
            {hide ? null : (
              <div className="z-30 block  w-[150px] bg-blue-600 absolute top-[105%] right-0 rounded text-white text-center p-2">
                <ul className="">
                  <li
                    className="p-1 cursor-pointer hover:bg-blue-700"
                    onClick={async function () {
                      await signOut();
                      router.push("/");
                    }}
                  >
                    logout
                  </li>
                  <hr />
                  <li className="p-1 cursor-pointer hover:bg-blue-700">
                    my cart
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="sm:flex sm:gap-4">
          <Link
            className="block rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            href="/sign-in"
          >
            Login
          </Link>

          <Link
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:text-blue-600/75 sm:block"
            href="/sign-up"
          >
            Register
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbuttons;
