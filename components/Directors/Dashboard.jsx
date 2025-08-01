import { eventList, popoverActions } from "@/data";
import Image from "next/image";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { EllipsisVertical, Eye, Share2, XCircle } from "lucide-react";

const Dashboard = () => {
  return (
    <div>
      <div className="p-2 mt-2">
        <h1 className="text-2xl font-light">Good Morning, Michael.</h1>
        <p className="text-gray-600 text-sm tracking-wide">
          See your upcoming event and manage your paid artpieces
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <div className="border border-gray-200 p-[32px] w-full md:w-1/2 bg-white">
          <h2 className="mb-2 font-light text-gray-600 ">Total Revenue</h2>
          <h1 className="text-gray-800 text-2xl font-bold">$125,000</h1>
        </div>
        <div className="border border-gray-200 p-[32px] w-full md:w-1/2 bg-white">
          <h2 className="mb-2 font-light text-gray-600 ">
            Total events created
          </h2>
          <h1 className="text-gray-800 text-2xl font-bold">16</h1>
        </div>
        <div className="border border-gray-200 p-[32px] w-full md:w-1/2 bg-white">
          <h2 className="mb-2 font-light text-gray-600 ">
            Total revenue collected
          </h2>
          <h1 className="text-gray-800 text-2xl font-bold">$120,410</h1>
        </div>
      </div>

      <div className="mt-8 p-2">
        <h1 className="text-2xl font-light">Your upcoming events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 pb-12">
          {eventList.slice(0, 3).map((event) => {
            const Icon = event.icon;
            let colorClass = "text-blue-500";
            if (event.iconName.toLowerCase().includes("painting")) {
              colorClass = "text-green-600";
            } else if (event.iconName.toLowerCase().includes("dinner")) {
              colorClass = "text-amber-700";
            }

            return (
              <div
                key={event.id} // ✅ Moved key here
                className="relative overflow-hidden w-full max-w-sm mx-auto my-4"
              >
                {/* Image with overlay and icon badge */}
                <div className="relative w-full h-[350px]">
                  <Image
                    src={event.artwork}
                    alt={`${event.name}'s artwork`}
                    width={400}
                    height={350}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div
                      className={`p-2 rounded-sm flex items-center gap-1 bg-white w-fit font-light shadow ${colorClass}`}
                    >
                      <Icon className={`w-4 h-4 ${colorClass}`} />
                      <p className={`text-sm ${colorClass}`}>
                        {event.iconName}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex absolute top-4 px-4 w-full z-20 justify-between items-center">
                  {/* Date badge */}
                  {event.date && (
                    <div className="">
                      <div className="text-gray-800 p-1 bg-white flex flex-col items-center justify-center font-medium w-[90px] text-center rounded leading-tight">
                        {event.date.split(", ").map((part, index) => (
                          <p
                            key={index}
                            className={
                              index === 1 ? "font-bold text-lg" : undefined
                            }
                          >
                            {part}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                  <Popover>
                    <PopoverTrigger className="bg-gray-800/60 p-4 rounded-full">
                      <EllipsisVertical className="text-white" />
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px]">
                      <div className="flex flex-col gap-4">
                        {popoverActions.map(
                          ({ label, icon: Icon, className }) => (
                            <button
                              key={label}
                              className={`flex items-center gap-2 transition-colors ${className}`}
                            >
                              <Icon className="w-4 h-4" />
                              {label}
                            </button>
                          )
                        )}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Card content */}
                <div className="pt-2 pb-4 px-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 ">By {event.name}</p>
                  <p className="text-md text-gray-500 flex items-center mt-1">
                    &nbsp;📍{event.location}
                  </p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-sm">
                      {event.tag}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
