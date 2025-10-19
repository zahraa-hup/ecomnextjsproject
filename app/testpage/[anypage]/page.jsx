
import React from "react";

async function Anypage({ params }) {
  const parameters = await params;
  const text = parameters.anypage;

  return (
    <>
      <div className="bactest  w-full h-screen  flex justify-center items-center text-6xl text-white">
        <p className=" text-center">hello {text} page</p>
      </div>
    </>
  );
}

export default Anypage;
