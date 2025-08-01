"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ChevronDownIcon,
  EllipsisVertical,
  Search,
  Eye,
  Share2,
  XCircle,
  Plus,
  Pencil,
  Trash,
} from "lucide-react";
import Link from "next/link";
import { curatorEvents, eventList, popoverActions } from "@/data";
import Image from "next/image";
import CuratorEvents from "../Curators/CuratorEvents";

const Events = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);
  return (
    <>
      <div className="p-2 ">
        <h1 className="text-2xl font-light mb-4">Manage Your Events</h1>
        {/* Filter section */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <div>
            <Button className="bg-gray-100 text-gray-400 rounded-none hover:bg-gray-200 transition-colors flex items-center gap-2">
              <Search className="w-4 h-4" />
              <Link href="/signin">Search events by city</Link>
            </Button>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Select>
              <SelectTrigger className="w-full md:w-auto bg-gray-100 rounded-none">
                <SelectValue placeholder="Event type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="dinner">Dinner</SelectItem>
                  <SelectItem value="painting">Painting</SelectItem>
                  <SelectItem value="drawing">Drawing</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Calendar */}
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger
                asChild
                className="w-full md:w-auto bg-gray-100 rounded-none"
              >
                <Button
                  variant="outline"
                  id="date"
                  className="w-48 justify-between font-normal"
                >
                  {date ? date.toLocaleDateString() : "Select date"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(selectedDate) => {
                    setDate(selectedDate);
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 pb-12 ">
        {eventList.slice(0, 4).map((event) => {
          const Icon = event.icon;
          let colorClass = "text-blue-500";
          if (event.iconName.toLowerCase().includes("painting")) {
            colorClass = "text-green-600";
          } else if (event.iconName.toLowerCase().includes("dinner")) {
            colorClass = "text-amber-700";
          }

          return (
            <div
              key={event.id}
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
                    <p className={`text-sm ${colorClass}`}>{event.iconName}</p>
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

        <div className="items-center mx-auto ">
          <Button className="p-32 mt-16 bg-gray-100 text-white rounded-none hover:bg-gray-200 hover:text-gray-700 transition-colors">
            <div className="flex flex-col items-center gap-2 text-lg font-light text-gray-600">
              <Plus className="w-12 h-12 font-bold " />
              <h2>Create new event</h2>
            </div>
          </Button>
        </div>
      </div>

      <div className="p-2 mt-16">
        <h1 className="text-2xl font-light">Past Events</h1>
        <div className="relative mt-8">
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
    </>
  );
};

export default Events;
