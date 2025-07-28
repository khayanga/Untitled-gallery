"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDownIcon, ArrowLeft, ArrowRight } from "lucide-react";

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

import { eventList } from "@/data";

const List = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);

  return (
    <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventList.map((event) => {
          const Icon = event.icon;
          let colorClass = "text-blue-500";
          if (event.iconName.toLowerCase().includes("painting")) {
            colorClass = "text-green-600";
          } else if (event.iconName.toLowerCase().includes("dinner")) {
            colorClass = "text-amber-700";
          }

          return (
            <Link href={`/events/${event.id}`} key={event.id}>
              <div className="relative overflow-hidden bg-white w-full max-w-sm mx-auto my-4">
                {/* Image with overlay and icon badge */}
                <div className="relative w-full h-[350px]">
                  <Image
                    src={event.artwork}
                    alt={`${event.name}'s artwork`}
                    width={400}
                    height={350}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 z-10" />
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

                {/* Date badge */}
                {event.date && (
                  <div className="absolute top-4 right-2 z-20">
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

                {/* Card content */}
                <div className="pt-2 pb-4 px-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {event.name}
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
                    {event.location}
                  </p>

                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-sm">
                      {event.tag}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* See All Events Button */}
      <div className="flex justify-center mt-4 md:mt-8">
        <Button className="p-6 bg-neutral-900 text-white rounded-none hover:bg-gray-200 hover:text-gray-700 transition-colors">
          <Link href="/signin">See all events</Link>
        </Button>
      </div>

      <div className="flex justify-end items-center gap-4  p-4 ">
        <button className="p-2  bg-gray-100 shadow hover:bg-gray-200 transition">
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button className="p-2  bg-gray-100 shadow hover:bg-gray-200 transition">
          <ArrowRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default List;
