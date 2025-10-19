import React from 'react'
import * as motion from "motion/react-client";
function page() {
  return (
    <div>
      <motion.div
        className="max-w-full h-screen flex items-center justify-center "
        animate={{
          backgroundImage: [
            "linear-gradient(90deg, #8b0000, #ff4d4d)",
            "linear-gradient(90deg, #ff4d4d, #8b0000)",
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundBlendMode: "overlay", // يخلي الطبقات تبان متداخلة
        }}
      >
        <h1 className="text-white text-5xl font-bold drop-shadow-lg">
          Payment Failed ✖
        </h1>
      </motion.div>
    </div>
  );
}

export default page
