"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm z-50 relative bg-white">
      <div className="flex flex-row items-center gap-2">
        <Image src={"/chart-donut.svg"} alt="logo" width={40} height={25} />
        <span className="text-blue-800 font-bold text-xl">Kosfunds</span>
      </div>

      {isSignedIn ? (
        <div className="flex gap-3 items-center z-50 relative">
          <Link href={"/dashboard"}>
            <Button variant="outline" className="rounded-full pointer-events-auto">
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <div className="flex gap-3 items-center z-50 relative">
          <Link href={"/sign-in"}>
            <Button className="rounded-full pointer-events-auto">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
