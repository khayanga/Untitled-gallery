import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { X } from "lucide-react";

const Confirm = () => {
  return (
    <section className="px-6 py-24 sm:py-32 lg:px-8 bg-neutral-900">
      <div className="flex flex-col md:flex-row mx-auto max-w-5xl  justify-between md:space-x-[32px]">
        <div className="max-w-[530px] ">
          <Image
            src="/confirm.png"
            alt="Confirm Eligibility"
            width={530}
            height={515}
            className=" w-full h-full object-cover object"
          />
        </div>

        <div className="max-w-[450px]">
          <div className="flex items-center gap-2 p-3 ">
            <h1 className="text-white text-[21px] font-semibold">
              Untitled Gallery
            </h1>

            <button className="text-white text-2xl">
              <X className="w-8 h-8" />
            </button>

            <Image src="/text.png" alt="Text" width={94} height={35} />
          </div>

          <div className="mx-auto p-2 text-center md:text-left">
            <h2 className="text-[32px] md:text-[48px] font-medium tracking-tight text-white ">
              Eligible AMEX credit & debit cards can unlock unique free ticket
              benefits
            </h2>
            <p className="mt-8 text-md font-medium text-gray-300">
              Use your eligible AMEX card to access exclusive free ticket perks.
            </p>
          </div>

          <div className=" mt-4 md:mt-8 text-center md:text-left">
            <Button className="p-6 bg-white text-black rounded-none hover:bg-gray-200 transition-colors">
              <Link href="/signin">Confirm Eliglibilty </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confirm;
