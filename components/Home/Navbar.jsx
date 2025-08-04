"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuMenu } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
import { ChevronDown } from "lucide-react";
import { navLinks } from "@/data";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import Advisor from "../modals/Advisors/Advisor";
import Creator from "../modals/Creators/Creator";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [openAdvisor, setOpenAdvisor] = useState(false)
  const [openCreator, setOpenCreator] = useState(false)
   
  

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 px-6 lg:px-8 md:pt-4">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <h1 className="text-white font-serif  text-[24px] font-bold">
            Untitled Gallery
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center">
          <ul className="flex gap-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`relative font-medium text-white transition-colors
                    ${
                      pathname === link.href
                        ? "after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[2px] after:bg-white"
                        : ""
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* Search Button with Icon */}
          <Button className="bg-gray-300 text-gray-400 rounded-none hover:bg-gray-200 transition-colors flex items-center gap-2">
            <Search className="w-4 h-4" />
            <Link href="/signin">Search events by city</Link>
          </Button>

          {/* Sign Up/In Button */}
          <Button 
          onClick={() => setOpenAdvisor(true)}
          className="bg-white text-black rounded-none hover:bg-gray-200 transition-colors">
            Sign Up or In
          </Button>
           <Button 
          onClick={() => setOpenCreator(true)}
          className="bg-white text-black rounded-none hover:bg-gray-200 transition-colors">
            Sign Up or In
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {isOpen ? (
              <LiaTimesSolid className="w-5 h-5 text-white" />
            ) : (
              <LuMenu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden container py-2 border-t bg-background/80 backdrop-blur">
          <nav className="px-4 ">
            <ul className="flex flex-col space-y-4 mb-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.subItems ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenSubmenuIndex(
                            openSubmenuIndex === index ? null : index
                          )
                        }
                        className="flex justify-between w-full text-left text-sm font-medium text-white hover:text-sky-400 transition-colors"
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 ml-2 transition-transform ${
                            openSubmenuIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openSubmenuIndex === index && (
                        <ul className="mt-2 ml-4 space-y-2">
                          {link.subItems.map((sub, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={sub.href}
                                onClick={toggleMenu}
                                className="block text-sm text-white hover:text-sky-400 transition-colors"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href || "#"}
                      onClick={toggleMenu}
                      className="block py-1 text-sm font-medium text-white hover:text-sky-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="text-sm mt-4 text-white hover:text-sky-400 transition-colors block"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}

      <Advisor open={openAdvisor} setOpen={setOpenAdvisor} />
      <Creator open={openCreator} setOpen={setOpenCreator}/>
    </header>
    
  );
};

export default Navbar;
