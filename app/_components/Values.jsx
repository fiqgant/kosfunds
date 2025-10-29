"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Sparkles, Eye, Rocket } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Keamanan",
    description: "Data keuangan Anda dilindungi dengan enkripsi tingkat bank dan sistem keamanan berlapis.",
  },
  {
    icon: Sparkles,
    title: "Kemudahan",
    description: "Interface intuitif yang memudahkan siapa saja mengelola keuangan tanpa ribet.",
  },
  {
    icon: Eye,
    title: "Transparansi",
    description: "Laporan keuangan yang jelas dan transparan, tanpa biaya tersembunyi.",
  },
  {
    icon: Rocket,
    title: "Inovasi",
    description: "Terus berinovasi dengan teknologi terbaru untuk memberikan pengalaman terbaik.",
  },
];

const Values = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-[hsl(var(--kosfunds-blue-light))]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Nilai-Nilai Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prinsip fundamental yang menjadi landasan setiap keputusan dan layanan kami
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
