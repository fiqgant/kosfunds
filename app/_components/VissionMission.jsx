"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb } from "lucide-react";

const VisionMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Vision */}
          <motion.div
            variants={itemVariants}
            className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[hsl(var(--kosfunds-blue-light))] rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Visi Kami</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Menjadi platform pengelolaan keuangan terbaik untuk mahasiswa dan pekerja muda di Indonesia, 
              membantu mereka mencapai kebebasan finansial dan masa depan yang lebih cerah.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={itemVariants}
            className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[hsl(var(--kosfunds-blue-light))] rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Misi Kami</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Membantu pengguna mencatat dan mengatur keuangan dengan mudah</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Menyediakan analisis dan saran keuangan otomatis</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Menjamin keamanan data dengan sistem enkripsi terkini</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
