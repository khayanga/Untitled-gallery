import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { heroArtists } from "@/data";
import Image from "next/image";
import { ArrowRight, BookImage } from "lucide-react";

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 md:py-16">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
        <div className="w-full md:w-auto text-center md:text-left">
          <h1 className="text-[32px] font-semibold">
            Upcoming events in <span className="underline">Los Angeles</span>
          </h1>
        </div>

        <div className="flex items-center gap-4 p-2 ">
          <button className="p-2 bg-gray-100 hover:bg-gray-200 transition rounded">
            <ArrowRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Artist Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {heroArtists.map((artist) => (
          <div
            key={artist.id}
            className="relative overflow-hidden bg-white w-full max-w-sm mx-auto my-4"
          >
            {/* Image Section with Overlay and Bottom-Left Badge */}
            <div className="relative w-full h-[350px]">
              <Image
                src={artist.artwork}
                alt={`${artist.name}'s artwork`}
                width={400}
                height={350}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/40 z-10" />

              {/* Bottom-left badge on image */}
              <div className="absolute bottom-4 left-4 z-20">
                <div className="text-blue-500 p-2 rounded-sm flex items-center gap-1 bg-white w-fit font-light shadow">
                  <BookImage className="w-4 h-4" />
                  <p className="text-sm">Gallery opening</p>
                </div>
              </div>
            </div>

            {/* Date Badge */}
            <div className="absolute top-4 right-2 z-20">
              <div className="text-gray-800 p-1 bg-white flex flex-col items-center justify-center font-medium w-[90px] text-center rounded leading-tight">
                <p>WED, JUN</p>
                <p className="font-bold text-lg">20</p>
              </div>
            </div>

            {/* Card Content */}
            <div className="pt-2 pb-4 px-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {artist.name}
              </h3>
              <p className="text-sm text-gray-500 flex items-center mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {artist.location}
              </p>

              {/* Tag */}
              <div className="mt-4">
                <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-sm">
                  {artist.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

     <div className="flex justify-center mt-4 md:mt-8">
        <Button className="p-6 bg-neutral-900 text-white rounded-none hover:bg-gray-200 hover:text-gray-700 transition-colors">
            <Link href="/signin">See all events</Link>
        </Button>
        </div>

    </section>
  );
};

export default Hero;
