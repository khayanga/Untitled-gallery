import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"; // Import Playfair_Display
import "./globals.css";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display", 
  subsets: ["latin"],
  display: "swap", 
});

export const metadata = {
  title: "Untitled Gallery",
  description: "Discover extraordinary artworks and exhibitions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`} 
      >
        {/* <Navbar />/ */}
        {children}
         <Footer/>
      </body>
     
    </html>
  );
}