import React from "react";

import Confitte from "@/app/_components/Confitte";
function page() {
  return (
    <div className="h-[100vh] relative bg-green-800 flex items-center justify-center">
      <Confitte />
      <div className="z-[3000] text-6xl text-white ">Congratulatio Paymet Success ✔👏</div>
    </div>
  );
}

export default page;
