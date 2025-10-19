import React from "react";
import dynamic from "next/dynamic";

const Dynamiccartloadind = dynamic(
  function () {
    return import("./Cartdetails");
  },
  {
    loading: function () {
      return <div>loading.....</div>;
    },
  }
);

export default Dynamiccartloadind;
