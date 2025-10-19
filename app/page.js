import Image from "next/image";
import Hero from "./_components/Hero";

import Productsection from "./_components/Productsection";
export default function Home() {
  return (
    <div>
      <Hero />
      <Productsection />
    </div>
  );
}
