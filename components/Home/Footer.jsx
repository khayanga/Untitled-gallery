"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import { helpLinks, navLinks, otherLinks, socialLinks } from "@/data";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-900 text-white relative">
      <div className="py-12 md:py-16 mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8">
        {/* Brand */}
        <div className="md:w-[400px]">
          <h1 className="text-[40px] sm:text-[60px] md:text-[80px] font-medium">Untited Gallery</h1>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:flex gap-8 md:gap-16 w-full md:w-auto justify-center">
          {/* Nav Column */}
          <div>
            <h1 className="text-white font-bold mb-3">Company Links</h1>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href || "#"}
                    className="text-white text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h1 className="text-white font-bold mb-3">Help</h1>
            <ul className="space-y-2">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href || "#"}
                    className="text-white text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Others Column */}
          <div>
            <h1 className="text-white font-bold mb-3">Others</h1>
            <ul className="space-y-2">
              {otherLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href || "#"}
                    className="text-white text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h1 className="text-white font-bold mb-3">Follow Us</h1>
            <ul className="space-y-2">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href || "#"}
                    className="text-white text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-center justify-between text-center py-4 max-w-7xl mx-auto px-4 gap-2">
        <div className="text-white text-xs font-light">
          © {currentYear} Untitled Gallery.
        </div>
        <div className="text-white text-xs font-light">
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
