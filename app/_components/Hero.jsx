"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, PieChart, TrendingUp, DollarSign, LineChart, Wallet } from 'lucide-react'
import { ContainerScroll } from "../../components/ui/container-scroll-animation"

function Hero() {
  return (
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
            <span className="mr-2 rounded-full bg-blue-600 px-2 py-1 text-xs font-semibold text-white">NEW</span>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              AI-Powered Finance Management
            </span>
          </div>
        
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Manage your Money with{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-600">
                AI-Driven Personal Finance
              </span>
              <span className="absolute bottom-2 left-0 z-0 h-3 w-full bg-blue-200 opacity-30 dark:bg-blue-700 dark:opacity-40"></span>
            </span>
          </h1>
        
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Take control of your financial future with intelligent insights, automated budgeting, and personalized
            recommendations.
          </p>
        
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="group h-12 min-w-[180px] rounded-full bg-blue-600 px-8 text-lg font-medium text-white hover:bg-blue-700">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="h-12 min-w-[180px] rounded-full border-blue-600 px-8 text-lg font-medium text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/50"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Financial visualization - replacing tablet with abstract visualization */}
        <div className="mt-20 w-full max-w-5xl">
          <div className="relative mx-auto h-[400px] w-full max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 shadow-2xl">
            {/* Abstract financial visualization elements */}
            <div className="absolute left-10 top-10 h-20 w-20 rounded-full bg-white/20 backdrop-blur-md"></div>
            <div className="absolute right-20 top-20 h-16 w-16 rounded-full bg-white/20 backdrop-blur-md"></div>
            <div className="absolute bottom-20 left-20 h-24 w-24 rounded-full bg-white/20 backdrop-blur-md"></div>
            
            {/* Animated financial icons */}
            <div className="absolute left-[15%] top-[20%] animate-float-slow">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 shadow-xl backdrop-blur-md">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="absolute right-[20%] top-[30%] animate-float">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 shadow-xl backdrop-blur-md">
                <LineChart className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="absolute bottom-[25%] left-[40%] animate-float-slow">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 shadow-xl backdrop-blur-md">
                <Wallet className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            
            {/* Animated lines connecting elements */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M200,100 C300,50 400,150 500,100" 
                stroke="rgba(255,255,255,0.3)" 
                strokeWidth="2" 
                fill="none"
                className="animate-dash"
              />
              <path 
                d="M150,200 C250,250 350,150 450,200 C550,250 650,200 750,150" 
                stroke="rgba(255,255,255,0.3)" 
                strokeWidth="2" 
                fill="none"
                className="animate-dash-reverse"
              />
              <path 
                d="M100,300 C200,250 300,350 400,300 C500,250 600,300 700,250" 
                stroke="rgba(255,255,255,0.3)" 
                strokeWidth="2" 
                fill="none"
                className="animate-dash-slow"
              />
            </svg>
            
            {/* Central element */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-2xl">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-md"></div>
                <div className="z-10 text-center">
                  <div className="text-2xl font-bold text-blue-600">Kosfunds</div>
                  <div className="text-xs font-medium text-blue-500">AI Finance</div>
                </div>
              </div>
            </div>
            
            {/* Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 20 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute h-2 w-2 rounded-full bg-white opacity-70"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float-particle ${5 + Math.random() * 10}s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-24 grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { number: "10K+", label: "Active Users" },
            { number: "$2.5M", label: "Managed Assets" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="transform rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Add some CSS for animations */}
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
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
      `}</style>
    </section>
  )
}

export default Hero
