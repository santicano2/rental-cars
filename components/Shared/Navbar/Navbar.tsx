"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, User } from "lucide-react";
import { useAuth, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { useLovedCars } from "@/hooks/use-loved-cars";

export function Navbar() {
  const { userId } = useAuth();
  const { lovedItems } = useLovedCars();

  return (
    <div className="max-w-5xl py-5 mx-auto">
      <div className="justify-between lg:flex">
        <Link href="/" className="flex items-center justify-center gap-x-2">
          <Image src="/logo.svg" alt="AutoExpress" width={50} height={50} />
          <span className="text-xl font-bold">AutoExpress</span>
        </Link>

        <div className="flex items-center justify-center gap-x-7">
          <Link href="/cars">List cars</Link>
          <Link href="/dashboard">Dashboard</Link>
          {userId ? (
            <>
              <Link href="/loved-cars">
                <Heart
                  strokeWidth={2}
                  className={`cursor-pointer ${
                    lovedItems.length > 0 && "fill-red-500"
                  }`}
                />
              </Link>
              <UserButton />
            </>
          ) : (
            <Link href="/sign-in" className="flex gap-x-3">
              <Button>
                Sign in
                <User className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
