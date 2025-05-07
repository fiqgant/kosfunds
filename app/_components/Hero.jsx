"use client"
import Image from "next/image"
import { ContainerScroll } from "../../components/ui/container-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center text-center">
                <span className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                  AI-Powered Finance Management
                </span>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  Manage your Money with{" "}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
                    AI-Driven Personal Finance
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
                  Take control of your financial future with intelligent insights, automated budgeting, and personalized
                  recommendations.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-lg">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-700 text-blue-700 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/50 px-8 py-6 text-lg"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            }
          >
            <div className="mt-16 w-full max-w-5xl mx-auto relative">
              <div className="absolute -top-6 -left-6 right-6 bottom-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 blur-[2px] opacity-30 dark:opacity-40"></div>
              <div className="relative overflow-hidden rounded-2xl border border-blue-100 shadow-2xl dark:border-blue-800">
                <Image
                  src={`/dashboard.png`}
                  alt="Kosfunds Dashboard"
                  height={720}
                  width={1400}
                  className="w-full rounded-2xl object-cover shadow-lg transition-all duration-500 hover:scale-[1.02]"
                  draggable={false}
                  priority
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-2 text-lg font-bold text-white shadow-lg">
                Kosfunds
              </div>
            </div>
          </ContainerScroll>

          {/* Stats section */}
          <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "$2.5M", label: "Managed Assets" },
              { number: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl bg-white p-6 shadow-md dark:bg-gray-800"
              >
                <span className="text-3xl font-bold text-blue-700 dark:text-blue-400">{stat.number}</span>
                <span className="text-gray-600 dark:text-gray-300">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
