"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { Menu, X } from "lucide-react"; // ikon burger

function Header() {
  const { isSignedIn } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-5 flex justify-between items-center border shadow-sm z-50 bg-white relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/chart-donut.svg" alt="logo" width={40} height={25} />
        <span className="text-blue-800 font-bold text-xl">KosFunds</span>
      </div>

      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center gap-3 absolute md:static top-16 right-5 md:right-0 bg-white md:bg-transparent border md:border-0 rounded-xl p-4 md:p-0 shadow-md md:shadow-none transition-all duration-200`}
      >
        <Link href="/">
          <Button variant="outline" className="rounded-full w-full md:w-auto">
            Home
          </Button>
        </Link>

        <Link href="/blog">
          <Button variant="outline" className="rounded-full w-full md:w-auto">
            Blog
          </Button>
        </Link>

        <Link href="/aboutUs">
          <Button variant="outline" className="rounded-full w-full md:w-auto">
            About Us
          </Button>
        </Link>

        {isSignedIn ? (
          <>
            <Link href="/dashboard">
              <Button variant="outline" className="rounded-full w-full md:w-auto">
                Dashboard
              </Button>
            </Link>
            <div className="mt-2 md:mt-0">
              <UserButton />
            </div>
          </>
        ) : (
          <Link href="/sign-in">
            <Button className="rounded-full w-full md:w-auto">
              Get Started
            </Button>
          </Link>
        )}
      </nav>

      <Analytics />
    </header>
  );
}

export default Header;
  