
"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  PieChart,
  TrendingUp,
  DollarSign,
  LineChart,
  Wallet,
  Briefcase,
} from "lucide-react";
import "../Hero.css";
import Link from "next/link";
import Feature from "./Feature";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";

function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
          <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-blue-500/20 blur-[120px]"></div>
          <div className="absolute -right-40 bottom-20 h-[30rem] w-[30rem] rounded-full bg-blue-500/20 blur-[120px]"></div>
        </div>

        {/* Hero content */}
        <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 dark:border-blue-800 dark:bg-blue-900/30">
              <div className="mr-2 h-4 w-4 animate-pulse rounded-full bg-blue-600"></div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                AI-Powered Finance & Freelance Platform
              </span>
            </div>

            <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
              Manage your{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 translate-y-3 skew-x-3 bg-kosfunds-blue/10 blur-xl"></span>
                <span className="relative text-gradient glow-text">Financial Future</span>
              </span>{" "}
              & Find{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 translate-y-3 skew-x-3 bg-kosfunds-purple/10 blur-xl"></span>
                <span className="relative text-gradient-alt glow-text">Freelance Work</span>
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Take control with intelligent insights, automated budgeting, personalized
              recommendations, and discover high-quality freelance opportunities all in one platform.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={"/sign-in"}>
                <Button className="group h-14 min-w-[200px] rounded-full bg-gradient-to-r from-kosfunds-blue to-kosfunds-darkblue px-8 text-lg font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/30 dark:from-kosfunds-blue dark:to-kosfunds-darkblue dark:hover:shadow-blue-600/20">
                  Start for Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link> 
              <Button
                variant="outline"
                className="h-14 min-w-[200px] rounded-full bg-white/80 backdrop-blur-sm border-blue-200 px-8 text-lg font-medium text-blue-600 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50 dark:border-blue-800 dark:bg-gray-900/30 dark:text-blue-400 dark:hover:bg-blue-950/20"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Advanced financial dashboard visualization with freelance section */}
          <div className="mt-20 w-full max-w-6xl overflow-hidden px-4">
            <div className="relative mx-auto h-[520px] md:h-[500px] w-full max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#2a4bff] via-[#1b3dbf] to-[#1f285f] p-4 md:p-8 shadow-2xl">
          
              {/* Dot Grid */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:18px_18px] opacity-10 z-0" />
          
              {/* Panel */}
              <div className="absolute left-4 md:left-10 top-4 md:top-10 w-44 h-28 md:w-52 md:h-36 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow p-3 md:p-4 z-10">
                <h4 className="text-white font-semibold text-sm md:text-base mb-2">Finance Track</h4>
                <div className="h-2 w-3/4 bg-white/30 rounded mb-1" />
                <div className="h-2 w-1/2 bg-white/30 rounded mb-1" />
                <div className="h-2 w-2/3 bg-white/30 rounded" />
              </div>
          
              <div className="absolute right-4 md:right-12 top-8 md:top-16 w-40 h-24 md:w-48 md:h-28 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow p-3 z-10">
                <h4 className="text-white font-semibold text-sm md:text-base mb-2">Freelance Jobs</h4>
                <div className="h-2 w-2/3 bg-white/30 rounded mb-1" />
                <div className="h-2 w-1/2 bg-white/30 rounded" />
              </div>
          
              <div className="absolute bottom-16 left-4 md:left-16 w-48 h-28 md:w-56 md:h-32 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow p-3 md:p-4 z-10">
                <h4 className="text-white font-semibold text-sm md:text-base mb-2">Income Dashboard</h4>
                <div className="h-2 w-4/5 bg-white/30 rounded mb-1" />
                <div className="h-2 w-2/3 bg-white/30 rounded mb-1" />
                <div className="h-2 w-3/4 bg-white/30 rounded" />
              </div>
          
              <div className="absolute bottom-20 right-4 md:right-20 w-52 h-32 md:w-56 md:h-40 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow p-3 md:p-4 z-10">
                <h4 className="text-white font-semibold text-sm md:text-base mb-2">Freelance Opportunities</h4>
                <div className="h-2 w-4/5 bg-white/30 rounded mb-1" />
                <div className="h-2 w-3/4 bg-white/30 rounded mb-1" />
                <div className="h-2 w-2/3 bg-white/30 rounded" />
              </div>
          
              {/* Icons */}
              <div className="absolute left-[12%] top-[20%] animate-float z-20">
                <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-white shadow backdrop-blur-md border border-white/50">
                  <DollarSign className="h-7 w-7 md:h-10 md:w-10 text-[#2a4bff]" />
                </div>
              </div>
              <div className="absolute right-[18%] top-[30%] animate-float-slow z-20">
                <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-white shadow backdrop-blur-md border border-white/50">
                  <LineChart className="h-7 w-7 md:h-10 md:w-10 text-[#1b3dbf]" />
                </div>
              </div>
              <div className="absolute bottom-[25%] left-[40%] animate-float z-20">
                <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-white shadow backdrop-blur-md border border-white/50">
                  <Wallet className="h-7 w-7 md:h-10 md:w-10 text-[#8056e3]" />
                </div>
              </div>
              <div className="absolute right-[30%] bottom-[12%] animate-float-slow z-20">
                <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-white shadow backdrop-blur-md border border-white/50">
                  <Briefcase className="h-7 w-7 md:h-10 md:w-10 text-[#24c0c0]" />
                </div>
              </div>
          
              {/* Kosfunds Logo */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform z-30 scale-90 sm:scale-100">
                <div className="relative flex h-28 w-28 md:h-40 md:w-40 items-center justify-center rounded-full bg-white shadow-[0_0_40px_rgba(37,99,235,0.3)]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-teal-300 to-purple-400 opacity-20 blur-xl animate-rotate-slow" />
                  <div className="absolute inset-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20" />
                  <div className="absolute inset-2 rounded-full bg-white" />
                  <div className="z-10 text-center">
                    <div className="mb-1 text-xl md:text-3xl font-bold text-[#2a4bff]">Kosfunds</div>
                    <div className="text-xs md:text-sm font-semibold text-[#24b8b8]">AI Finance & Work</div>
                  </div>
                </div>
              </div>
          
              {/* Particles */}
              <div className="absolute inset-0 overflow-hidden z-0">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-2 w-2 rounded-full bg-white opacity-70 shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float-particle ${5 + Math.random() * 10}s linear infinite`,
                      animationDelay: `${Math.random() * 5}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>


          {/* Stats section - enhanced with glass effect */}
          <div className="mt-24 grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-4">
            {[
              { number: "25K+", label: "Active Users", icon: <TrendingUp className="h-6 w-6 text-blue-500" /> },
              { number: "$5.2M", label: "Managed Assets", icon: <DollarSign className="h-6 w-6 text-blue-500" /> },
              { number: "10K+", label: "Freelance Jobs", icon: <Briefcase className="h-6 w-6 text-blue-500" /> },
              { number: "98%", label: "Satisfaction Rate", icon: <PieChart className="h-6 w-6 text-blue-500" /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="transform rounded-xl bg-glass-card border border-blue-100 px-6 py-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100/50 dark:border-blue-900/30 dark:hover:shadow-blue-900/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/50">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gradient">{stat.number}</div>
                <div className="mt-1 text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      < Feature />

      {/* TESTIMONIALS SECTION */}
      < Testimonials />

      {/* CALL TO ACTION SECTION */}
      < CallToAction />



      {/* Add missing imports and CSS */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-particle {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(20px, -50px); opacity: 0; }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: 1000;
          }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        .animate-dash {
          stroke-dasharray: 10;
          animation: dash 20s linear infinite;
        }
        .animate-dash-reverse {
          stroke-dasharray: 10;
          animation: dash 25s linear infinite reverse;
        }
        .animate-dash-slow {
          stroke-dasharray: 15;
          animation: dash 30s linear infinite;
        }
        .text-gradient {
          background: linear-gradient(to right, #3b82f6, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .text-gradient-alt {
          background: linear-gradient(to right, #9333ea, #d946ef);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .glow-text {
          text-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }
        .bg-glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
        }
        .dark .bg-glass-card {
          background: rgba(30, 41, 59, 0.7);
          backdrop-filter: blur(10px);
        }
      `}</style>
    </>
  );
}

export default Hero;
