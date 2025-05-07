"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, PieChart, TrendingUp } from "lucide-react"
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

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" fill="white" />
                <path d="M12 6L16 8.5V13.5L12 16L8 13.5V8.5L12 6Z" fill="#3B82F6" />
              </svg>
            </div>
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Kosfunds</span>
          </div>
          <Button className="rounded-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>
      </header>

      {/* Hero content */}
      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        <ContainerScroll
          titleComponent={
            <div className="mx-auto max-w-4xl">
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
          }
        />

        {/* Floating finance icons */}
        <div className="relative mt-20 w-full max-w-5xl">
          <div className="absolute -left-10 top-0 animate-float-slow">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-4 shadow-xl dark:bg-gray-800">
              <BarChart3 className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div className="absolute -right-10 top-20 animate-float">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-4 shadow-xl dark:bg-gray-800">
              <PieChart className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float-slow">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-4 shadow-xl dark:bg-gray-800">
              <TrendingUp className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          {/* Glowing orb in the center */}
          <div className="mx-auto flex h-60 w-60 items-center justify-center">
            <div className="relative h-40 w-40 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 opacity-90 blur-[40px]"></div>
            <div className="absolute flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">Kosfunds</div>
                <div className="mt-1 text-sm font-medium text-blue-100">AI Finance</div>
              </div>
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero
