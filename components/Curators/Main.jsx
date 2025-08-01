import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BookImage, Dot, EllipsisVertical } from "lucide-react";
import { Eye, Share2, XCircle } from "lucide-react";

import Image from "next/image";
import Events from "./CuratorEvents";
import CuratorEvents from "./CuratorEvents";

const Main = () => {
  return (
    <div>
      <div className="flex flex-row items-center gap-6 mb-6 p-2 mt-2">
        <div className="w-12 h-12 bg-gray-300 rounded-full" />

        <div>
          <h1 className="text-2xl font-light">Good Morning, Michael.</h1>
          <p className="text-gray-600 text-sm tracking-wide">
            See your upcoming event and manage your paid artpieces
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col  gap-4 mt-4">
        <div className=" px-4  w-full md:w-3/4  ">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="border border-gray-200 p-[32px] w-full md:w-1/2 bg-white">
              <h2 className="mb-2 font-light text-gray-600 ">
                Attended Events
              </h2>
              <h1 className="text-gray-800 text-2xl font-bold">$10</h1>
            </div>
            <div className="border border-gray-200 p-[32px] w-full md:w-1/2 bg-white">
              <h2 className="mb-2 font-light text-gray-600 ">
                Artworks purchased
              </h2>
              <h1 className="text-gray-800 text-2xl font-bold">10</h1>
            </div>
          </div>

          <div className="mt-8">
            <h1 className="text-2xl font-light  ">
              Here's your upcoming events
            </h1>

            <div className="relative h-[450px] mt-6 overflow-hidden  ">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/60 to-transparent p-6 md:p-10 flex flex-col justify-end text-white z-10">
                {/* Event Type Badge */}
                <div className="text-blue-500 p-2 rounded-sm flex items-center gap-1 bg-white w-fit mb-2 font-light">
                  <BookImage className="w-4 h-4" />
                  <p className="text-sm">Gallery opening</p>
                </div>

                {/* Event Details */}

                <div className="md:text-start text-center ">
                  <h2 className="text-[18px]">
                    TRENDING event in{" "}
                    <span className="underline">LOS ANGELES</span>
                  </h2>
                  <h2 className="text-[32px] md:text-[48px] font-medium tracking-tight">
                    The Collector’s Preview
                  </h2>

                  <div className="flex justify-between items-center">
                    <p className="mt-2 text-md font-medium text-gray-300 flex items-center justify-center md:justify-start gap-3">
                      By James Choi{" "}
                      <Dot className="w-8 h-8 text-white fill-white" />
                      Starts in 5d 43h
                      <Dot className="w-8 h-8 text-white fill-white" />
                    </p>

                    <Popover>
                      <PopoverTrigger className="bg-gray-800/60 p-4 rounded-full ">
                        <EllipsisVertical />
                      </PopoverTrigger>
                      <PopoverContent className='w-[200px]'>
                        <div className="flex flex-col gap-2">
                          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                            <Eye className="w-4 h-4" />
                            View
                          </button>
                          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                            <Share2 className="w-4 h-4" />
                            Share
                          </button>
                          <button className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors">
                            <XCircle className="w-4 h-4" />
                            Cancel Event
                          </button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
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
          </div>
        </div>
        <div className=" p-4 rounded border border-gray-200  w-full md:w-1/4">
           <h2 className="mb-2 font-light text-gray-600 ">
                Achievements
              </h2>
        </div>
      </div>

      <CuratorEvents/>
    </div>
  );
};

export default Main;
