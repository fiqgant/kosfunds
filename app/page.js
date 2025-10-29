import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import PopUp from "./_components/PopUp";

export default function Home() {
  return (
   <div>
      <PopUp/>
      <Header/>
      <Hero/>
   </div>
  );
}
