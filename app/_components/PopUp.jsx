"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TestTube, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasSeenPopup = localStorage.getItem("kosfunds-beta-popup-seen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("kosfunds-beta-popup-seen", "true");
    }
  };

  const handleReportBug = () => {
    if (typeof window !== "undefined") {
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSfag3Rd1z_b4_Wq1TKMYIX3nFdkvl7HzBUJ_j5_P4jHvvXKUg/viewform?usp=dialog", "_blank");
    }
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-kosfunds-blue/10 flex items-center justify-center">
                  <Image src="/chart-donut.svg" alt="KosFunds Logo" width={60} height={60} />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
                KosFunds Masih dalam Tahap Beta Test
              </h2>

              <p className="text-center text-gray-600 leading-relaxed mb-8">
                Kami terus melakukan pengembangan untuk menghadirkan pengalaman terbaik.
                Beberapa fitur mungkin belum sepenuhnya stabil. Terima kasih atas dukungan
                dan masukan Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleReportBug}
                  variant="outline"
                  className="flex-1 border-kosfunds-blue text-kosfunds-blue hover:bg-kosfunds-blue/5"
                >
                  Bantu Kami Dengan Isi Kuesioner Ini!
                </Button>
                {/* <Button
                  onClick={handleClose}
                  className="flex-1 bg-kosfunds-blue hover:bg-kosfunds-blue/90 text-white"
                >
                  Mengerti
                </Button> */}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PopUp;
