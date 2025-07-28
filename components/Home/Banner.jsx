import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import { Button } from "../ui/button";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Background Image */}
      <Image
        src="/landing.png"
        alt="Background Image"
        width={2400}
        height={1700}
        className="absolute inset-0 -z-10 w-full h-full object-cover object-right md:object-center"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-title font-semibold tracking-tight text-white sm:text-7xl">
            Explore events where AI helps you spot the next Picasso.
          </h2>
          <p className="mt-8 text-md font-medium text-gray-300">
            Discover rising artists early with AI-curated events, collect with
            confidence before the world takes notice.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-8 w-full ">
          <Button className="w-full md:w-auto p-6 bg-neutral-900 text-white rounded-none hover:bg-gray-200 hover:text-gray-700 transition-colors">
            <Link href="/signin">See upcoming events</Link>
          </Button>
          <Button className="w-full md:w-auto p-6 bg-white text-black rounded-none hover:bg-gray-200 transition-colors">
            <Link href="/signin">See latest art pieces</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
