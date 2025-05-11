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
        "KosFunds benar-benar membantu saya dalam mengelola keuangan! Fitur saran AI-nya sangat cerdas dan selalu memberikan rekomendasi terbaik berdasarkan kondisi keuangan saya.",
      author: "Muhammad Yunus",
      title: "Trader Kripto",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      quote:
        "KosFunds benar-benar mengubah cara saya mengatur anggaran bulanan. Dengan fitur pencatatan yang mudah, saya bisa melacak pengeluaran harian tanpa repot.",
      author: "Michael Chen",
      title: "Entrepreneur",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      quote:
        "Semenjak pakai KosFunds, saya jadi lebih sadar terhadap pengeluaran harian. Saya suka bagaimana aplikasi ini memberikan gambaran jelas tentang pengeluaran terbesar saya lewat chart pembagian uang",
      author: "Fira Azahra",
      title: "Mahasiswa Unimal",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      quote:
        "Saya selalu kesulitan menyusun rencana keuangan untuk liburan tahunan, tapi KosFunds sangat membantu! Dengan fitur pencatatan yang terstruktur, saya bisa memisahkan tabungan khusus liburan dari pengeluaran harian.",
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
      <section className="overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-center gap-12">
              <img src="/maskot2.png" alt="Mascot 1" className="w-32 h-32" />
              <img src="/maskot3.png" alt="Mascot 2" className="w-32 h-32" />
              <img src="/maskot4.png" alt="Mascot 3" className="w-32 h-32" />
          </div>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-balance tracking-tight md:text-5xl">
              Dengar dari <span className="text-gradient">Pelanggan kami</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Bergabunglah dengan ribuan pengguna yang sedang mengubah masa depan keuangan mereka dengan Kosfunds AI
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