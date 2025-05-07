"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  BarChart3,
  LineChart,
  BriefcaseBusiness,
  Users,
  Shield,
  Sparkles,
  LayoutDashboard,
  LayoutGrid,
  LayoutList,
  Bell,
  PiggyBank,
} from "lucide-react";

function Feature (){
    return(
        <section className="relative py-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900"></div>
        </div>

        <div className="container mx-auto px-4">
          {/* AI Finance Features */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-balance tracking-tight md:text-5xl">
              <span className="text-gradient">AI-Powered</span> Financial Management
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Experience the next generation of financial management with our powerful features
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <LineChart className="h-6 w-6" />,
                title: "Smart Analytics",
                description:
                  "Track your financial progress with intelligent analytics that provide meaningful insights about your spending and saving patterns."
              },
              {
                icon: <PiggyBank className="h-6 w-6" />,
                title: "AI-Powered Budgeting",
                description:
                  "Our AI analyzes your expenses and recommends personalized budget plans that adapt to your lifestyle and financial goals."
              },
              {
                icon: <Bell className="h-6 w-6" />,
                title: "Smart Notifications",
                description:
                  "Receive timely alerts on unusual spending, upcoming bills, and investment opportunities tailored to your financial profile."
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Fraud Protection",
                description:
                  "Advanced algorithms monitor your accounts for suspicious activities and protect you from potential financial fraud."
              },
              {
                icon: <Sparkles className="h-6 w-6" />,
                title: "Personalized Recommendations",
                description:
                  "Get customized recommendations for savings, investments, and financial planning based on your goals and risk profile."
              },
              {
                icon: <BarChart3 className="h-6 w-6" />,
                title: "Tax Optimization",
                description:
                  "Our AI identifies tax-saving opportunities and provides guidance to optimize your tax strategy throughout the year."
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-blue-100 bg-glass-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-blue-900/30"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-kosfunds-blue to-kosfunds-darkblue text-white">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Freelance Platform Features - New Section */}
          <div className="mt-32">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-balance tracking-tight md:text-5xl">
                <span className="text-gradient-alt">Freelance</span> Opportunity Platform
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                Discover high-quality freelance work opportunities matched to your skills and financial goals
              </p>
            </div>

            {/* Featured freelance section with more visual appeal */}
            <div className="mb-16 rounded-3xl bg-gradient-to-r from-kosfunds-teal/10 to-kosfunds-purple/10 p-8 dark:from-kosfunds-teal/20 dark:to-kosfunds-purple/20">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <h3 className="mb-4 text-3xl font-bold text-gradient-alt">Find Your Next Project</h3>
                  <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    Our AI-powered platform analyzes your skills, experience, and financial goals to match you with the perfect freelance opportunities.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "Personalized job recommendations",
                      "AI-powered skill matching",
                      "Secure payment processing",
                      "Income tracking and financial planning",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-kosfunds-purple/20 text-kosfunds-purple">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="group w-fit rounded-full bg-gradient-to-r from-kosfunds-purple to-kosfunds-pink px-6 py-2 text-white">
                    Explore Opportunities
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: <BriefcaseBusiness className="h-10 w-10 text-kosfunds-purple" />,
                      title: "Premium Projects",
                      desc: "High-quality, well-paid freelance opportunities"
                    },
                    {
                      icon: <Users className="h-10 w-10 text-kosfunds-teal" />,
                      title: "Vetted Clients",
                      desc: "Work with trustworthy, pre-screened clients"
                    },
                    {
                      icon: <LayoutDashboard className="h-10 w-10 text-kosfunds-blue" />,
                      title: "Financial Dashboard",
                      desc: "Track earnings and manage your finances"
                    },
                    {
                      icon: <LayoutGrid className="h-10 w-10 text-kosfunds-pink" />,
                      title: "Skill Marketplace",
                      desc: "Showcase your skills to potential clients"
                    }
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl bg-white p-4 shadow-md dark:bg-gray-800">
                      <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-white to-blue-50 shadow-inner dark:from-gray-700 dark:to-gray-800">
                        {item.icon}
                      </div>
                      <h4 className="mb-1 font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Freelance features */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
              {[
                {
                  icon: <LayoutList className="h-6 w-6" />,
                  title: "AI Job Matching",
                  description:
                    "Our intelligent algorithms match your skills and experience with the perfect freelance opportunities, saving you time searching for work."
                },
                {
                  icon: <BriefcaseBusiness className="h-6 w-6" />,
                  title: "Income Integration",
                  description:
                    "Seamlessly integrate your freelance income with your financial management tools for comprehensive financial planning."
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Client Network",
                  description:
                    "Connect with high-quality clients looking for your specific skills and build a reliable network of recurring business relationships."
                }
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-purple-100 bg-glass-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-purple-900/30"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-kosfunds-purple to-kosfunds-pink text-white">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}


export default Feature;