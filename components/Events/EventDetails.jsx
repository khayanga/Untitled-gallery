import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  BookImage,
  Building2,
  ListCollapse,
  Minus,
  Plus,
  Ticket,
  Users,
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { artPieces, heroArtists } from "@/data";
const EventDetails = ({ event }) => {
  const [count, setCount] = React.useState(1);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-6 lg:px-8 ">
      <Navbar />
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Artwork and artist */}
        <Link
          href="/events"
          className="text-gray-800 underline mb-4 inline-block"
        >
          Go Back
        </Link>
        <div className="grid md:grid-cols-2 gap-8 ">
          <div className="space-y-4 ">
            {/* Top full-width image */}
            <div>
              <Image
                src={event.artwork}
                alt={`${event.name}'s artwork`}
                width={600}
                height={400}
                className=" object-cover h-[300px] w-full "
              />
            </div>

            {/* Bottom two images in columns */}
            <div className="flex flex-col md:flex-row gap-1 ">
              <Image
                src={event.art1}
                alt={`${event.name}'s avatar 1`}
                width={150}
                height={100}
                className=" object-cover w-full md:w-1/2"
              />
              <Image
                src={event.art2}
                alt={`${event.name}'s avatar 2`}
                width={600}
                height={400}
                className=" object-cover w-full md:w-1/2"
              />
            </div>
          </div>

          {/* Ticket Details */}
          <div className="space-y-6 ">
            <div className="flex justify-between items-center px-4">
              <h1 className="text-3xl font-bold">{event.iconName}</h1>

              {(() => {
                const Icon = event.icon;
                let colorClass = "text-blue-500 bg-blue-50";

                if (event.iconName.toLowerCase().includes("painting")) {
                  colorClass = "text-green-600 bg-green-50";
                } else if (event.iconName.toLowerCase().includes("dinner")) {
                  colorClass = "text-amber-700 bg-amber-50";
                }

                return (
                  <p
                    className={`text-sm font-medium flex items-center gap-1 ${colorClass} p-2 rounded-md`}
                  >
                    <Icon className={`w-5 h-5 ${colorClass}`} />
                    Live painting
                  </p>
                );
              })()}
            </div>

            <p className="text-gray-500 ml-4">{event.description}</p>

            {/* Ticket Box */}
            <div className="border p-4  space-y-4">
              <h2 className="text-gray-700 tracking-wide font-bold">
                Buy ticket
              </h2>
              <div className="flex items-center justify-between mb-8 ">
                <h1 className="text-4xl font-semibold">
                  ${event.price.toFixed(2)}
                </h1>
                <div
                  className="flex items-center
                  gap-4 bg-gray-100 p-2 "
                >
                  <button onClick={handleDecrement}>
                    <Minus className="w-5 h-5 text-gray-700" />
                  </button>
                  <p className="text-xl font-semibold leading-none">{count}</p>

                  <button onClick={handleIncrement}>
                    <Plus className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="max-w-[200px]">
                  <p className="text-sm text-gray-500">
                    Booking fee of $2.00 per ticket will be added at checkout
                  </p>
                </div>

                <p className="text-gray-600 ">
                  <strong>Limit:</strong> {event.limit}
                </p>
              </div>

              <div className="space-y-2">
                <Button className="w-full rounded-none bg-neutral-900 text-white  hover:bg-gray-800 transition-colors">
                  Buy ticket
                </Button>
                <div className="bg-gray-100 flex justify-between items-center p-4 mt-2">
                  <div className="flex items-center text-sm">
                    <Ticket className="w-5 h-5 text-gray-700 inline-block mr-2" />
                    <span className="text-gray-700">Having a promo code? </span>
                  </div>

                  <Link
                    href="/signin"
                    className="text-gray-700 underline block text-center"
                  >
                    Login to apply
                  </Link>
                </div>
              </div>
            </div>

            {/* Date and Time */}

            <div className="px-4 mt-4 md:mt-8 ">
              <div className="flex flex-row justify-between items-center mb-4">
                <div>
                  <h1 className="text-2xl">{event.date}</h1>
                </div>

                <div className="flex  flex-col items-start ">
                  <p className="text-gray-600 text-sm ">Doors open at</p>
                  <h1 className="text-xl">{event.time}</h1>
                </div>
              </div>

              <div className="max-w-[300px]">
                <p className="text-gray-600 text-sm">
                  Address revealed 36 hours before
                </p>
                <p className="text-gray-600 text-sm">
                  Late arrivals maybe held at the door until set break{" "}
                </p>
                <p className="text-gray-800 font-medium">
                  Starts at {event.startTime}
                </p>
              </div>
            </div>

            {/* Show Details */}
            <div className="mt-12 border-t p-4">
              <h1 className="text-2xl font-semibold mb-2">Show Details</h1>

              <Accordion type="multiple" className="w-full">
                {/* Event Details */}
                <AccordionItem value="event-details">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <ListCollapse className="w-5 h-5 text-gray-700" />
                      <span>Event Details</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-700 space-y-2">
                    <p>
                      <strong>Start Time:</strong> {event.startTime}
                    </p>
                    <p>
                      <strong>Dress Code:</strong> {event.dressCode}
                    </p>
                    <p>
                      <strong>Briefing:</strong> {event.briefings}
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Address Reveal:</strong> You’ll receive the
                      address by email or text about 36 hours before the show.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Age Requirement */}
                <AccordionItem value="age-requirement">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-gray-700" />
                      <span>Age Requirement</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-700">
                    Must be 18+ to attend. Valid ID may be required.
                  </AccordionContent>
                </AccordionItem>

                {/* Venue */}
                <AccordionItem value="venue-info">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-gray-700" />
                      <span>Venue</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-700">
                    Show is hosted in a unique rooftop space at:
                    <br />
                    <strong>{event.address}</strong>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h1 className="text-2xl font-bold">Behind the scenes</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Image
              src="/footer1.png"
              alt="Behind the scenes image"
              width={600}
              height={400}
              className="object-cover w-full h-[350px]"
            />
            <Image
              src="/footer1.png"
              alt="Behind the scenes image"
              width={600}
              height={400}
              className="object-cover w-full h-[350px] "
            />
            <Image
              src="/footer1.png"
              alt="Behind the scenes image"
              width={600}
              height={400}
              className="object-cover w-full h-[350px] "
            />
          </div>
        </div>

        <div className="md:mt-24 mt-12">
          <h1 className="text-2xl font-bold">
            Artworks available for this event
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {artPieces.slice(0, 4).map((piece) => (
              <div
                key={piece.id}
                className="bg-white border shadow-sm  overflow-hidden"
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

          <div className="flex justify-center mt-10">
            <Button className="p-6 bg-neutral-900 text-white rounded-none hover:bg-gray-200 hover:text-gray-700 transition-colors">
              <Link href="/signin">View all</Link>
            </Button>
          </div>
        </div>

        <div className="md:mt-24 mt-12">
          <h1 className="text-2xl font-bold">You may also like this</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {heroArtists.slice(0, 3).map((artist) => (
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
                    style={{ objectFit: "cover" }}
                    className="w-full h-full"
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
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
