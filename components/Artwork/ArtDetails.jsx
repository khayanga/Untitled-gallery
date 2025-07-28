import React from "react";
import Navbar from "../Navbar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ListCollapse } from "lucide-react";
import { Input } from "../ui/input";
import { artists } from "@/data";

const ArtDetails = ({ art }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-6 lg:px-8 ">
      <Navbar />
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/artworks"
          className="text-gray-800 underline mb-4 inline-block"
        >
          Go Back
        </Link>

        <div className="grid md:grid-cols-2 gap-8 ">
          <div className="space-y-4 ">
            {/* Top full-width image */}
            <div>
              <Image
                src={art.image}
                alt={`${art.name}'s artwork`}
                width={600}
                height={400}
                className="object-cover w-full"
                style={{ height: "300px" }}
              />
            </div>

            {/* Bottom two images in columns */}
            <div className="flex flex-col md:flex-row gap-1 ">
              <Image
                src={art.image}
                alt={`${art.name}'s avatar 1`}
                width={150}
                height={100}
                className=" object-cover w-full md:w-1/2"
                style={{ height: "200px" }}
              />
              <Image
                src={art.image}
                alt={`${art.name}'s avatar 2`}
                width={600}
                height={400}
                className=" object-cover w-full md:w-1/2"
                style={{ height: "200px" }}
              />
            </div>
          </div>

          <div className="space-y-6  ">
            <div className="flex gap-1 flex-col items-center ">
              <Image
                src={art.avatar}
                alt={`${art.name}'s avatar`}
                width={100}
                height={100}
                className="rounded-sm w-16 h-16 object-cover m-2"
              />
              <h1 className="text-3xl font-bold">{art.title}</h1>
              <h2 className="text-gray-600 tracking-wider text-lg">
                By {art.artist}
              </h2>

              <span className="border  border-gray-300 text-[11px] font-medium  text-gray-600 px-2 py-1  my-2  uppercase">
                {art.status}
              </span>

              <div className="flex items-center gap-2 flex-col  md:flex-row ">
                <div>
                  <p className="bg-gray-100  p-2 text-sm rounded-sm">
                    Limited edition
                  </p>
                </div>
                <div>
                  <p className="bg-gray-100  p-2 text-sm rounded-sm">
                    Shipping extimated time {art.shipping}
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 p-4 text-center mt-8 ">
              <h3>Draw closing on</h3>
              <p className="text-gray-600 text-sm">{art.drawTime}</p>

              <Button className="w-full mt-6 rounded-none bg-neutral-900 text-white  hover:bg-gray-800 transition-colors">
                Enter Draw
              </Button>

              <Link
                href="/share"
                className="text-gray-600 text-sm  underline mt-4 inline-block"
              >
                Share
              </Link>
            </div>

            <div className="p-4">
              <h1 className="text-xl font-semibold mb-4">About the Artwork</h1>
              <p className="text-gray-600">{art.about}</p>
            </div>

            <div className="p-4 mt-8">
              <h1 className="text-xl font-semibold mb-4">Art Details</h1>
              <Accordion type="multiple" className="w-full">
                {art.details?.map((section, index) => (
                  <AccordionItem key={index} value={`section-${index}`}>
                    <AccordionTrigger>
                      <div className="flex items-center gap-2">
                        <ListCollapse className="w-5 h-5 text-gray-700" />
                        <span>{section.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-700 space-y-2">
                      {section.items.map((item, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {item}
                        </p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="p-4 mt-8 ">
              <h2 className="text-xl mb-2 text-gray-800 ">
                Never miss a release
              </h2>
              <p className="text-gray-600">
                Subscribe to our mailing list to get the inside track on
                upcoming releases, collaborations and events.
              </p>

              <div className="flex w-full max-w-sm items-center gap-4 mt-8 ">
                <Input
                  type="email"
                  placeholder="Your email goes here"
                  className="rounded-none"
                />
                <Button
                  type="submit"
                  className="bg-gray-800 text-white rounded-none hover:bg-gray-700 transition-colors"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-24 mt-12">
          <h1 className="text-2xl font-bold">
            More collaborations with this artist
          </h1>

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
                    className="object-cover w-full h-[250px] "
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
        </div>
      </div>
    </section>
  );
};

export default ArtDetails;
