import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const alvenir = localFont({
  src: [
    {
      path: "../fonts/Avenir-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Avenir-Book.ttf",
      weight: "350",
      style: "normal",
    },
    {
      path: "../fonts/Avenir-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Avenir-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Avenir-Black.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Avenir-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-alvenir",
});

export const metadata: Metadata = {
  title: "Home | SwiftShift",
  description: "Take your mind off your relocation hassle, we got you covered",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-alvenir font-normal">
        <MainHeader/>
        <main>
          {children}
        </main>
        <MainFooter/>
      </body>
    </html>
  );
}
