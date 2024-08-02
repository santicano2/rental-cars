import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin rentalCars",
  description: "rentalCars admin page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <NextTopLoader color="#000" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
