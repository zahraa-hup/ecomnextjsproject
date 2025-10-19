"use client";
import React from "react";
import Confetti from "react-confetti";

export default function Confitte() {
  return (
    <div>
      <Confetti
        className="w-full h-[100vh]  "
        numberOfPieces={500} // عدد الأوراق
        gravity={0.02} // سرعة السقوط
        recycle={true}
        حركة
        بسيطة
        جانبية
        tweenDuration={4000} // مدة حركة القطعة قبل ما تختفي
        // يستمر في التشغيل
        colors={[
          "#ff0a54",
          "#d9d326",
          "#2671d9",
          "#26d935",
          "#d926d0",
          "#a026d9",
          "#d9cd26",
          "#26d9d6",
        ]}
      />
    </div>
  );
}
