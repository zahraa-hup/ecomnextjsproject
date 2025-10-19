"use client"
import React from "react";
import { useEffect } from "react"; 
function Scrollbtn() {
    function handlebuttonclicked() {
        //scrollTo(0, 0);
        scroll(0, 0);
        
    
    }
  return (
    <div>
      <button className="absolute bottom-10 right-5 cursor-pointer btnbg w-[60] h-[60] rounded-full flex items-center justify-center "onClick={handlebuttonclicked}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-white "
        >
          <path
            fillRule="evenodd"
            d="M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default Scrollbtn;
