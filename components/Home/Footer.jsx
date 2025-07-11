"use client";
import React from "react";
import Image from "next/image";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { helpLinks, navLinks, otherLinks, socialLinks } from "@/data";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-900 text-white relative">
      <div className=" py-12 md:py-16  mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center">
        <div className=" items-center md:items-start md:w-[400px] ">
          <h1 className="text-[80px] font-medium">Untited Gallery</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start w-full md:w-auto">
          <nav className="items-start ">
            <h1 className="text-white font-bold mb-3 ">Company Links</h1>
            <ul className="space-y-2  ">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href || "#"}
                    className="text-white text-md text-[14px] "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="items-start ">
            <h1 className="text-white font-bold mb-3 ">Help</h1>
            <ul className="space-y-2  ">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href || "#"}
                    className="text-white text-md text-[14px] "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="items-start ">
            <h1 className="text-white font-bold mb-3 ">Others</h1>
            <ul className="space-y-2  ">
              {otherLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href || "#"}
                    className="text-white text-md text-[14px] "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="items-start ">
            <h1 className="text-white font-bold mb-3 ">Follow Us</h1>
            <ul className="space-y-2  ">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href || "#"}
                    className="text-white text-md text-[14px] "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Copyright */}

      <div className="flex flex-col md:flex-row items-center justify-between  py-4 max-w-7xl mx-auto">
        <div className="text-center  text-white text-[12px] font-light  pb-4">
          © {currentYear} Unititled Gallery.
        </div>
        <div className="text-center text-white text-[12px] font-light pb-4">
          <div className="inline-flex items-center gap-1">
            <span className="underline">English</span>
            <ChevronDown className="w-3 h-3" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
