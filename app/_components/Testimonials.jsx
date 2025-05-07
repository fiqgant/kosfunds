"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

function Testimonials (){
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

    return(
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
    )
}


export default Testimonials;