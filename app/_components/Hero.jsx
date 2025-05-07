
"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  BarChart3,
  PieChart,
  TrendingUp,
  DollarSign,
  LineChart,
  Wallet,
  Briefcase,
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
import { useState } from "react";
import "../Hero.css";

function Hero() {
  // State for testimonials
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote:
        "Kosfunds AI completely transformed how I manage my finances. The personalized recommendations helped me save 20% more each month.",
      author: "Sarah Johnson",
      title: "Marketing Director",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      quote:
        "As a small business owner, I needed a solution that could help me track both personal and business finances. Kosfunds AI is that perfect solution.",
      author: "Michael Chen",
      title: "Entrepreneur",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      quote:
        "The AI-powered insights are incredible. It spotted patterns in my spending I never would have noticed and helped me plan for retirement more effectively.",
      author: "Emma Rodriguez",
      title: "Software Engineer",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      quote:
        "I've tried many financial apps, but Kosfunds is the first one that actually changed my financial behavior for the better.",
      author: "David Kim",
      title: "Healthcare Professional",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
  ];

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

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
              <Button className="group h-14 min-w-[200px] rounded-full bg-gradient-to-r from-kosfunds-blue to-kosfunds-darkblue px-8 text-lg font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/30 dark:from-kosfunds-blue dark:to-kosfunds-darkblue dark:hover:shadow-blue-600/20">
                Start for Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="h-14 min-w-[200px] rounded-full bg-white/80 backdrop-blur-sm border-blue-200 px-8 text-lg font-medium text-blue-600 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50 dark:border-blue-800 dark:bg-gray-900/30 dark:text-blue-400 dark:hover:bg-blue-950/20"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Advanced financial dashboard visualization with freelance section */}
          <div className="mt-20 w-full max-w-6xl overflow-hidden">
            <div className="relative mx-auto h-[500px] w-full max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-kosfunds-blue via-kosfunds-darkblue to-kosfunds-purple p-8 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2)_0%,rgba(0,0,0,0.4)_70%)]"></div>
              
              {/* Glass panels */}
              <div className="absolute left-10 top-10 h-36 w-52 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg p-4">
                <h4 className="font-medium text-white mb-2">Finance Track</h4>
                <div className="h-2 w-24 rounded-full bg-white/30 mb-2"></div>
                <div className="h-2 w-16 rounded-full bg-white/30 mb-2"></div>
                <div className="h-2 w-20 rounded-full bg-white/30"></div>
              </div>
              <div className="absolute right-12 top-16 h-28 w-48 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-4">
                <h4 className="font-medium text-white mb-2">Freelance Jobs</h4>
                <div className="h-2 w-28 rounded-full bg-white/30 mb-2"></div>
                <div className="h-2 w-20 rounded-full bg-white/30"></div>
              </div>
              <div className="absolute bottom-16 left-16 h-32 w-56 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 shadow-lg p-4">
                <h4 className="font-medium text-white mb-2">Income Dashboard</h4>
                <div className="h-2 w-32 rounded-full bg-white/30 mb-2"></div>
                <div className="h-2 w-24 rounded-full bg-white/30 mb-2"></div>
                <div className="h-2 w-28 rounded-full bg-white/30"></div>
              </div>
              <div className="absolute bottom-20 right-20 h-40 w-56 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-4">
                <h4 className="font-medium text-white mb-2">Freelance Opportunities</h4>
                <div className="h-2 w-36 rounded-full bg-white/30 mb-2"></div>
                <div className="h-2 w-28 rounded-full bg-white/30 mb-2"></div>
                <div className="h-2 w-32 rounded-full bg-white/30"></div>
              </div>
              
              {/* Animated financial icons with better styling */}
              <div className="absolute left-[15%] top-[20%] animate-float z-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/90 shadow-xl backdrop-blur-md border border-white/50 transition-transform hover:scale-105">
                  <DollarSign className="h-10 w-10 text-kosfunds-blue" />
                </div>
              </div>
              <div className="absolute right-[20%] top-[30%] animate-float-slow z-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/90 shadow-xl backdrop-blur-md border border-white/50 transition-transform hover:scale-105">
                  <LineChart className="h-10 w-10 text-kosfunds-darkblue" />
                </div>
              </div>
              <div className="absolute bottom-[25%] left-[40%] animate-float z-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/90 shadow-xl backdrop-blur-md border border-white/50 transition-transform hover:scale-105">
                  <Wallet className="h-10 w-10 text-kosfunds-purple" />
                </div>
              </div>
              <div className="absolute right-[30%] bottom-[15%] animate-float-slow z-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/90 shadow-xl backdrop-blur-md border border-white/50 transition-transform hover:scale-105">
                  <Briefcase className="h-10 w-10 text-kosfunds-teal" />
                </div>
              </div>
              
              {/* Animated connections with glow effect */}
              <svg className="absolute inset-0 h-full w-full z-0" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
                  </linearGradient>
                </defs>
                <path 
                  d="M200,100 Q300,50 400,150 T600,100" 
                  stroke="url(#line-gradient)" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="10"
                  className="animate-dash"
                />
                <path 
                  d="M150,200 Q250,250 350,150 T550,250 Q650,300 750,150" 
                  stroke="url(#line-gradient)" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="10"
                  className="animate-dash-reverse"
                />
                <path 
                  d="M100,300 Q200,250 300,350 T500,250 Q600,200 700,300" 
                  stroke="url(#line-gradient)" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="10"
                  className="animate-dash-slow"
                />
              </svg>
              
              {/* Central element - enhanced */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform z-10">
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-[0_0_40px_rgba(37,99,235,0.3)]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-kosfunds-blue via-kosfunds-teal to-kosfunds-purple opacity-20 blur-xl animate-rotate-slow"></div>
                  <div className="absolute inset-1 rounded-full bg-gradient-to-r from-kosfunds-blue to-kosfunds-purple opacity-20"></div>
                  <div className="absolute inset-2 rounded-full bg-white"></div>
                  <div className="z-10 text-center">
                    <div className="mb-1 text-3xl font-bold text-gradient">Kosfunds</div>
                    <div className="text-sm font-semibold text-kosfunds-teal">AI Finance & Work</div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced particles with glow */}
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute h-2 w-2 rounded-full bg-white opacity-70 shadow-[0_0_5px_rgba(255,255,255,0.8)]"
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

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-balance tracking-tight md:text-5xl">
              Hear from our <span className="text-gradient">Customers</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Join thousands of users who are transforming their financial future with Kosfunds AI
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white p-1 shadow-xl dark:from-blue-900/30 dark:to-gray-800/50">
              <div className="relative rounded-xl overflow-hidden">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index} 
                      className="min-w-full p-8 md:p-12 flex flex-col items-center text-center"
                    >
                      <div className="mb-6 h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="mb-6 text-xl md:text-2xl text-balance italic text-gray-700 dark:text-gray-200">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-auto">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation buttons */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                <Button 
                  variant="outline"
                  size="icon"
                  className="rounded-full border-blue-200 bg-white/80 backdrop-blur-sm hover:bg-blue-50 dark:border-blue-800 dark:bg-gray-900/50 dark:hover:bg-blue-900/20"
                  onClick={prev}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  size="icon"
                  className="rounded-full border-blue-200 bg-white/80 backdrop-blur-sm hover:bg-blue-50 dark:border-blue-800 dark:bg-gray-900/50 dark:hover:bg-blue-900/20"
                  onClick={next}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Indicators */}
              <div className="absolute bottom-3 left-0 right-0">
                <div className="flex justify-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === index 
                          ? "w-6 bg-blue-600" 
                          : "w-2 bg-blue-200 dark:bg-blue-800"
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-kosfunds-blue via-kosfunds-purple to-kosfunds-pink opacity-90"></div>
            
            {/* Animated patterns */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_40%_60%,rgba(255,255,255,0.3)_0%,transparent_40%)]"></div>
              <div className="absolute top-0 right-0 h-full w-full bg-[radial-gradient(circle_at_60%_30%,rgba(255,255,255,0.3)_0%,transparent_30%)]"></div>
            </div>
            
            <div className="relative z-10 grid grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2 md:px-12 md:py-24">
              <div>
                <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                  Ready to Transform Your Finances?
                </h2>
                <p className="mb-8 max-w-lg text-lg text-blue-100">
                  Join thousands of users who have already improved their financial well-being with Kosfunds AI
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button className="group h-14 min-w-[200px] rounded-full bg-white px-8 text-lg font-medium text-blue-600 transition-all duration-300 hover:bg-blue-50">
                    Start for Free
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-14 min-w-[200px] rounded-full border-white/40 px-8 text-lg font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                  >
                    Financial Demo
                  </Button>
                </div>
              </div>
              
              <div>
                <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                  Find Freelance Work That Pays Well
                </h2>
                <p className="mb-8 max-w-lg text-lg text-blue-100">
                  Discover high-quality freelance opportunities matched to your skills and manage your earnings all in one place
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button className="group h-14 min-w-[200px] rounded-full bg-white px-8 text-lg font-medium text-purple-600 transition-all duration-300 hover:bg-blue-50">
                    Browse Jobs
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-14 min-w-[200px] rounded-full border-white/40 px-8 text-lg font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                  >
                    Freelance Guide
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 h-20 w-20 rounded-full border border-white/20 bg-white/10"></div>
            <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full border border-white/20 bg-white/10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full border border-white/10 bg-white/5"></div>
          </div>
        </div>
      </section>

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
