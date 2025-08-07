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

import { artPieces } from "@/data";

const List = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);

  return (
    <section className="mx-auto max-w-7xl px-6 py-8  md:pb-20 lg:px-8">
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

          <Select>
            <SelectTrigger className="w-full md:w-auto bg-gray-100 rounded-none">
              <SelectValue placeholder="Art style" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="dinner">Dinner</SelectItem>
                <SelectItem value="painting">Painting</SelectItem>
                <SelectItem value="drawing">Drawing</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full md:w-auto bg-gray-100 rounded-none">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="100">100</SelectItem>
                <SelectItem value="500">500</SelectItem>
                <SelectItem value="800">800</SelectItem>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {artPieces.map((piece) => (
          <Link href={`/artworks/${piece.id}`} key={piece.id}>
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

            
            <div className="p-4 bg-white">
              
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium">{piece.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    By {piece.artist}
                  </p>
                </div>
                <p className="text-md font-semibold whitespace-nowrap">
                  ${piece.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          </Link>
          
        ))}
      </div>

      {/* See All Events Button */}
      <div className="flex justify-center mt-4 md:mt-16">
        <Button className="p-6 bg-neutral-900 text-white rounded-none hover:bg-gray-200 hover:text-gray-700 transition-colors">
          <Link href="/signin">See more artworks</Link>
        </Button>
      </div>
    </section>
  );
};

export default List;
