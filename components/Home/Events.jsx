import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { BookImage, Dot } from "lucide-react";

const Events = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <h1 className="text-[48px] md:text-left text-center">
        Highlighted Events
      </h1>

      <div className="relative h-[450px] mt-8 overflow-hidden  ">
        {/* Background Image */}
        <Image
          src="/footer2.png"
          alt="Event Image"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        <div className="absolute top-4 right-4 z-10">
          <div className="text-gray-800 p-2 bg-white flex flex-col items-center justify-center font-medium w-[100px] text-center shadow-md leading-tight">
            <p>WED, JUN</p>
            <p className="font-bold text-lg">20</p>
          </div>
        </div>

        {/* Gradient and content overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 md:p-10 flex flex-col justify-end text-white z-10">
          {/* Event Type Badge */}
          <div className="text-blue-500 p-2 rounded-sm flex items-center gap-1 bg-white w-fit mb-2 font-light">
            <BookImage />
            <p>Gallery opening</p>
          </div>

          {/* Event Details */}
          <div className="md:text-start text-center ">
            <h2 className="text-[18px]">
              TRENDING event in <span className="underline">LOS ANGELES</span>
            </h2>
            <h2 className="text-[32px] md:text-[48px] font-medium tracking-tight">
              The Collector’s Preview
            </h2>
            <p className="mt-2 text-md font-medium text-gray-300 flex items-center justify-center md:justify-start gap-3">
              By James Choi <Dot className="w-8 h-8 text-white fill-white" />
              Starts in 5d 43h
              <Dot className="w-8 h-8 text-white fill-white" />
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-4 text-center md:text-left">
            <Button className="px-6 py-3 bg-white text-black rounded-none hover:bg-gray-200 transition-colors">
              <Link href="/signin">Book A Seat</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {/* Active */}
        <div className="w-8 h-2 bg-black  transition-all" />

        {/* Inactive */}
        <div className="w-8 h-2 bg-gray-200  transition-all" />
        <div className="w-8 h-2 bg-gray-200  transition-all" />
        <div className="w-8 h-2 bg-gray-200  transition-all" />
      </div>
    </section>
  );
};

export default Events;
