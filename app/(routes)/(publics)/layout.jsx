"use client";
import React from "react";
import Header from "../../_components/header.jsx";
import { Analytics } from "@vercel/analytics/react";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Analytics />
    </>
  );
}
