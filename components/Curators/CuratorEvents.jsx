import { curatorEvents } from "@/data";
import Image from "next/image";
import React from "react";

const CuratorEvents = () => {
  return (
    <div className=" px-4 my-16">
      <h1 className="text-2xl font-light">Attended events</h1>

      <div className="relative">
        {curatorEvents.map((event, index) => {
          const Icon = event.icon;

          let colorClass = "text-blue-500 bg-blue-100";
          const badge = event.badge?.toLowerCase();

          if (badge?.includes("painting")) {
            colorClass = "text-green-600 bg-green-100";
          } else if (badge?.includes("dinner")) {
            colorClass = "text-amber-700  bg-amber-100";
          }

          return (
            <div
              key={event.id}
              className="  gap-4 relative flex flex-col md:flex-row items-start p-6   my-4 md:p-4 "
            >
              <div className="w-[80px] text-center pt-2">
                <h1 className="text-xl ">{event.date}</h1>
              </div>

              <div className="relative  flex-col items-center mx-8 flex-shrink-0 hidden md:flex">
                {" "}
                {/* Added hidden md:flex */}
                {/* Line segment above dot */}
                <div
                  className={`w-[2px] bg-gray-600 border-l-2 border-dashed border-gray-400 ${
                    index === 0 ? "h-20" : "h-10"
                  }`}
                  style={{ height: index === 0 ? "60px" : "40px" }}
                ></div>
                {/* Timeline dot */}
                <div className="w-3 h-3 bg-gray-600 rounded-full border-2 border-background z-10"></div>
                {/* Line segment below dot (except for last item) */}
                {index < curatorEvents.length - 1 && (
                  <div
                    className="w-[2px] bg-gray-600 border-l-2 border-dashed border-gray-400"
                    style={{ height: "150px" }}
                  ></div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-10 lg:gap-64 items-center border border-gray-300 my-4 p-4 ">
                {/* Right side */}
                <div className="p-4  md:w-[400px]">
                  <button
                    className={`flex p-2  rounded-md items-center gap-2 mb-3 ${colorClass}`}
                  >
                    <Icon className={`w-4 h-4 ${colorClass}`} />
                    <span className={`text-sm  ${colorClass}`}>
                      {event.badge}
                    </span>
                  </button>
                  <h1 className="text-lg font-light">{event.title}</h1>
                  <p className="text-sm text-gray-600">
                    By {event.artist} &nbsp;📍 {event.location}
                  </p>

                  {/* tags */}
                  <div className="mt-6">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-sm mr-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Left side */}
                <div>
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={200}
                    className="object-cover "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CuratorEvents;
