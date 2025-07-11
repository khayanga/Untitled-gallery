import { artists } from "@/data";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowLeft,  ArrowRight } from "lucide-react";

const Artists = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 md:py-16">
      <div className=" ">
        <div className="max-w-[300px] mx-auto">
          <h1 className="text-3xl font-bold text-center my-8">
            Artists We’ve Collaborated With{" "}
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="relative overflow-hidden  bg-white w-full max-w-sm mx-auto my-4"
            >
              {/* Artwork Image with avatar inside */}
              <div className="relative w-full">
                <Image
                  src={artist.artwork}
                  alt={`${artist.name}'s artwork`}
                  width={400}
                  height={350}
                  className="object-cover w-full h-[350px] "
                />

                {/* Avatar overlapping bottom-right of image */}
                <div className="absolute -bottom-6 right-0 w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-md z-10">
                  <Image
                    src={artist.avatar}
                    alt={`${artist.name}'s avatar`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="pt-12 pb-4 px-4">
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

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {artist.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
          <div className="w-full md:w-1/2 text-start">
            <p className="text-gray-600 mb-4">
              Immerse yourself in our curated selection of galleries,
              exhibitions, and artistic showcases that celebrate contemporary
              creativity.
            </p>
            <Button className="p-6 bg-neutral-900 text-white rounded-none hover:bg-gray-200 hover:text-gray-700 transition-colors">
              <Link href="/signin">View all artpieces</Link>
            </Button>
          </div>

          <div className="flex items-center gap-4  p-4 r">
            <button className="p-2  bg-gray-100 shadow hover:bg-gray-200 transition">
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2  bg-gray-100 shadow hover:bg-gray-200 transition">
              <ArrowRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;
