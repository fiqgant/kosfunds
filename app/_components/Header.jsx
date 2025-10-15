"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="p-5 flex justify-between items-center border shadow-sm z-50 bg-white">
      <div className="flex items-center gap-2">
        <Image src="/chart-donut.svg" alt="logo" width={40} height={25} />
        <span className="text-blue-800 font-bold text-xl">KosFunds</span>
      </div>

      <div className="flex items-center gap-3">
        <Link href="/">
          <Button variant="outline" className="rounded-full pointer-events-auto">
            Home
          </Button>
        </Link>        
        <Link href="/blog">
          <Button variant="outline" className="rounded-full pointer-events-auto">
            Blog
          </Button>
        </Link>
        <Link href="/about-us">
          <Button variant="outline" className="rounded-full pointer-events-auto">
            About Us
          </Button>
        </Link>

        {isSignedIn ? (
          <>
            <Link href="/dashboard">
              <Button variant="outline" className="rounded-full pointer-events-auto">
                Dashboard
              </Button>
            </Link>
            <UserButton />
          </>
        ) : (
          <Link href="/sign-in">
            <Button className="rounded-full pointer-events-auto">
              Get Started
            </Button>
          </Link>
        )}
      </div>

      <Analytics />
    </header>
  );
}

export default Header;
