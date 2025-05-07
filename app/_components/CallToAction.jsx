"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function CallToAction (){
    return(
        <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl text-white">
            
            {/* Background */}
            <div className="absolute inset-0 z-0">
              <div className="h-full w-full bg-gradient-to-r from-[#4845d2cc] via-[#9333eacc] to-[#ec4899cc]" />
              <div className="absolute inset-0 backdrop-blur-md" />
            </div>
      
            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2 md:px-12 md:py-24">
              {/* Left Column */}
              <div>
                <h2 className="mb-4 text-4xl font-extrabold md:text-5xl leading-tight">
                  Ready to Transform <br className="hidden sm:block" />
                  Your Finances?
                </h2>
                <p className="mb-8 max-w-lg text-lg text-white/90">
                  Join thousands of users who have already improved their financial well-being with Kosfunds AI.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link href={"/sign-in"}>
                    <Button className="group h-14 min-w-[200px] rounded-full bg-white px-8 text-lg font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-50">
                      Start for Free
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="h-14 min-w-[200px] rounded-full border-white/30 bg-white/10 px-8 text-lg font-medium text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                  >
                    Financial Demo
                  </Button>
                </div>
              </div>
      
              {/* Right Column */}
              <div>
                <h2 className="mb-4 text-4xl font-extrabold md:text-5xl leading-tight">
                  Find Freelance Work <br className="hidden sm:block" />
                  That Pays Well
                </h2>
                <p className="mb-8 max-w-lg text-lg text-white/90">
                  Discover high-quality freelance opportunities matched to your skills and manage your earnings all in one place.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button className="group h-14 min-w-[200px] rounded-full bg-white px-8 text-lg font-semibold text-purple-600 transition-all duration-300 hover:bg-purple-50">
                    Browse Jobs
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-14 min-w-[200px] rounded-full border-white/30 bg-white/10 px-8 text-lg font-medium text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                  >
                    Freelance Guide
                  </Button>
                </div>
              </div>
            </div>
      
            {/* Decorative bubbles */}
            <div className="absolute top-10 left-10 h-20 w-20 rounded-full border border-white/20 bg-white/10" />
            <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full border border-white/20 bg-white/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full border border-white/10 bg-white/5" />
          </div>
        </div>
      </section>
    )
}


export default CallToAction;