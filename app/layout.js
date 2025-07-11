import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"; // Import Playfair_Display
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure Playfair Display
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display", // Define a CSS variable for Playfair Display
  subsets: ["latin"],
  display: "swap", // Optional: Control font loading behavior
});

export const metadata = {
  title: "Untitled Gallery",
  description: "Discover extraordinary artworks and exhibitions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`} // Add Playfair Display variable to body
      >
        {children}
      </body>
    </html>
  );
}