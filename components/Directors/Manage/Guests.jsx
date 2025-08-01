import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { guestList } from "@/data";

const Guests = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <div className="border border-gray-200 p-[32px] w-full md:w-1/2 bg-blue-100">
          <h2 className="mb-2 font-light text-gray-600 ">Attending</h2>
          <h1 className="text-gray-800 text-2xl font-bold">254</h1>
        </div>
        <div className="border border-gray-200 p-[32px] w-full md:w-1/2 bg-pink-200">
          <h2 className="mb-2 font-light text-gray-600 ">Cancelled</h2>
          <h1 className="text-gray-800 text-2xl font-bold">16</h1>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center md:flex-row gap-4 mt-12">

        <h1 className="text-xl font-light">Guest Lists</h1>
        <Button className=" border border-gray-300 bg-white text-gray-800 rounded-none hover:bg-gray-200 transition-colors">
            <Link href="/signin">Share invite link</Link>
          </Button>

      </div>

        <div className="mt-6 border p-4 bg-white overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Name</TableHead>
              <TableHead className="text-left">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {guestList.map((guest, index) => (
              <TableRow key={index} >
                <TableCell>{guest.name}</TableCell>
                <TableCell>
                  <span
                    className={`text-xs px-2 py-1 rounded-lg font-light ${
                      guest.status === "Attending"
                        ? "text-green-500 bg-green-100"
                        : "text-red-500 bg-red-100"
                    }`}
                  >
                    {guest.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Guests;
