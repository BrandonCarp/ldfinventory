"use client";
import Image from "next/image";
import Link from "next/link";
import lcpLogo from "./ui/images/LCP.webp";
import ldfLogo from "./ui/images/LDF.webp";

import HomeCarousel from "./ui/emblaCarousel/homeCarousel";



export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-black  ">
      {/* <Navbar /> */}
      <div className="flex w-full justify-center items-center text-center space-x-8 mx-5 ">
        <div>
          <section className="flex  items-center  pb-5 ">
            <Image src={ldfLogo} alt="LDF Logo" width={275} />
            <Image className="mt-5" src={lcpLogo} alt="LCP Logo" width={125} />
          </section>
          <section className="space-x-5">
            <a className="bg-red-800 text-white py-1 px-3 rounded hover:bg-red-700" href="https://www.lynmardisplaysandfixtures.com/">Learn More</a>
            <Link className="bg-red-800 text-white py-1 px-3 rounded hover:bg-red-700" href="/pages/inventory">Live Inventory</Link>
          </section>

        </div>

        <section className="">
          <HomeCarousel />
        </section>
      </div>
    </main>
  );
}
