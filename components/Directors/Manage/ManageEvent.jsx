import React from "react";
import Image from "next/image";
import {
  Building2,
  EllipsisVertical,
  ListCollapse,
  
  Users,
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {  popoverActions } from "@/data";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Guests from "./Guests";
import Insights from "./Insights";
const ManageEvent = ({ event }) => {
  

  return (
    <section className="mx-auto max-w-7xl px-6 pb-6 lg:px-8 ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Artwork and artist */}
        <Link
          href="/dashboard/directors"
          className="text-gray-800 underline mb-4 inline-block"
        >
          Go Back
        </Link>

        <div className="flex justify-between items-center mb-4 ">
          <div className="flex gap-4">
            <h1 className="text-3xl font-light">{event.iconName}</h1>

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
                  className={`text-sm font-medium flex items-center gap-1 ${colorClass} p-2 rounded-sm`}
                >
                  <Icon className={`w-4 h-4 ${colorClass}`} />
                  Live painting
                </p>
              );
            })()}
          </div>

          <Popover>
            <PopoverTrigger >
              <EllipsisVertical className="text-gray-800" />
            </PopoverTrigger>
            <PopoverContent className="w-[200px]">
              <div className="flex flex-col gap-4">
                {popoverActions.map(({ label, icon: Icon, className }) => (
                  <button
                    key={label}
                    className={`flex items-center gap-2 transition-colors ${className}`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <Tabs defaultValue="overview" className="w-full  ">
        <div className="w-full border-b border-gray-200 ">
          <TabsList className="flex space-x-4 bg-transparent p-0 border-none shadow-none">
            <TabsTrigger
              value="overview"
              
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="guests"
              
            >
              Guests
            </TabsTrigger>
            <TabsTrigger
              value="insights"
              
            >
              Insights
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview">
          <div className="grid md:grid-cols-2 gap-8 mt-4">
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
          <div className="space-y-2 pl-4 ">
            <h2 className="text-xl font-light">Description</h2>
            <p className="text-gray-500 ">{event.description}</p>

            {/* Ticket Box */}
            <div className="border p-6  space-y-4">
              <h2 className="text-gray-700 tracking-wide text-xl font-bold">
                Ticket Price
              </h2>
              <h1 className="text-4xl font-semibold">
                  ${event.price.toFixed(2)}
                </h1>
              
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
          
        </TabsContent>
        <TabsContent value="guests">
          <Guests/>
        </TabsContent>
        <TabsContent value="insights">
         <Insights/>
        </TabsContent>
      </Tabs>

        
      </div>
    </section>
  );
};

export default ManageEvent;
