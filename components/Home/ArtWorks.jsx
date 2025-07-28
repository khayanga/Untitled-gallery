import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { artPieces } from "@/data";
import Image from "next/image";

const ArtWorks = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      {/* Top part  */}

      <div className="flex flex-col md:flex-row  items-center justify-center text-start gap-4">
        <div className="w-full md:w-1/2 flex flex-col ">
          <h1 className=" text-[24px] md:text-[48px]">
            Discover extraordinary artworks
          </h1>
        </div>

        <div className="w-full md:w-1/2 items-start">
          <p className="text-gray-600 mb-4">
            Immerse yourself in our curated selection of galleries, exhibitions,
            and artistic showcases that celebrate contemporary creativity.
          </p>
          <Button className="p-6 mx-auto bg-neutral-900 text-white rounded-none hover:bg-gray-200 hover:text-gray-700 transition-colors">
            <Link href="/signin">View all artpieces </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {artPieces.map((piece) => (
          <div
            key={piece.id}
            className="bg-white border shadow-sm overflow-hidden"
          >
            {/* Image Section with Gradient Background */}
            <div className="relative bg-gray-100 p-10">
              <Image
                src={piece.image}
                alt={piece.title}
                width={400}
                height={250}
                className="w-full h-[250px] object-cover"
              />
              {/* Status Badge */}
              <span className="absolute top-2 right-2 text-[11px] font-medium bg-white text-black px-2 py-1 shadow-sm uppercase">
                {piece.status}
              </span>
            </div>

            {/* Text Content */}
            <div className="p-4 bg-white">
              {/* Title + Price Row */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium">{piece.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    By {piece.artist}
                  </p>
                </div>
                <p className="text-md font-semibold whitespace-nowrap">
                  {piece.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtWorks;
