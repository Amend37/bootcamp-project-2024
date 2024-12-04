import React from "react";
import Navbar from "./components/navbar";
import { Inter } from "next/font/google";
import "./globals.css";

// Initialize the Inter font
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
