"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const MapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-[hsl(var(--kosfunds-blue-light))]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Lokasi Kantor</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kunjungi kami atau hubungi untuk informasi lebih lanjut
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl shadow-[var(--shadow-card)] overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Address Info */}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-primary">Kantor Pusat</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Laut Dendang, Jl. Warakauri, Kec. Percut Sei Tuan, Kabupaten Deli Serdang<br />
                    Sumatera Utara 20371<br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-primary">Jam Operasional:</span> <br />
                  Rabu: 08.00 - 18.00 WIB
                </p>
              </div>

              <Button
                variant="default"
                className="bg-primary hover:bg-secondary text-primary-foreground w-full md:w-auto"
                onClick={() => window.open('https://maps.app.goo.gl/7eNccYxozzrVrfhA7', '_blank')}
              >
                Buka di Google Maps
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Map Embed */}
            <div className="h-[400px] md:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d154258.26855010845!2d98.6200532495419!3d3.5905118965013867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131c3e3b23239%3A0xda80f981258ea578!2sWilmar%20Bisnis%20Indonesia%20Polytechnic!5e0!3m2!1sen!2sid!4v1761128480573!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta lokasi kantor KosFunds — buka di Google Maps"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
