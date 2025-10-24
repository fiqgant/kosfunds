"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ArdyAI from "@/assets/ardyAI.jpg";
import Rizky from "@/assets/rizky.jpg";
import Syafrizal from "@/assets/syafrizal.jpg";
import Firmas from "@/assets/Firmas.jpg";
import Arya from "@/assets/arya.jpg";

const team = [
  {
    name: "Rizky Abdillah",
    role: "Vision Architect",
    description: "Merancang arah pengembangan dan visi utama KosFunds. Bertanggung jawab menjaga konsistensi antara tujuan jangka panjang, nilai tim, serta inovasi yang dihadirkan agar aplikasi terus relevan dan berkembang.",
    image: Rizky,
  },
  {
    name: "Syafrizal Amri Fajar",
    role: "Code Engineer",
    description: "Mengimplementasikan ide menjadi sistem yang berfungsi nyata. Bertugas menulis, mengoptimalkan, dan memelihara kode agar aplikasi KosFunds tetap aman, efisien, serta mudah dikembangkan di masa depan.",
    image: Syafrizal,
  },
  {
    name: "Ardya Pratama Putra",
    role: "Quality Guardian",
    description: "Menjadi penjaga mutu produk. Menguji setiap fitur dari sisi fungsional, tampilan, dan performa untuk memastikan pengguna mendapatkan pengalaman terbaik tanpa kendala teknis.",
    image: ArdyAI,
  },
  {
    name: "Arya Bhagaskara",
    role: "Financial Flow Designer",
    description: "Mengelola dan merencanakan alur keuangan internal tim. Bertugas mengatur anggaran operasional, pengeluaran proyek, dan alokasi sumber daya agar seluruh kegiatan tim berjalan efektif dan transparan.",
    image: Arya,
  },
  {
    name: "Firmas Habibi",
    role: "Field Insight Curator",
    description: "Mengumpulkan data, masukan, serta tren dari pengguna dan lingkungan sekitar. Bertugas memberikan insight nyata yang membantu tim membuat keputusan pengembangan berdasarkan kebutuhan lapangan.",
    image: Firmas,
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Tim Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berkenalan dengan orang-orang hebat di balik KosFunds
          </p>
        </motion.div>

        {/* Grid Tim */}
        <div className="flex flex-col items-center gap-12">
          {/* Baris pertama (3 orang) */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8 w-full"
          >
            {team.slice(0, 3).map((member, index) => (
              <TeamCard key={index} member={member} index={index} isInView={isInView} />
            ))}
          </motion.div>

          {/* Baris kedua (2 orang) di tengah */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8 justify-items-center"
          >
            {team.slice(3, 5).map((member, index) => (
              <TeamCard
                key={index + 3}
                member={member}
                index={index + 3}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative w-full max-w-[320px] overflow-hidden rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden">
        <Image
          src={member.image}
          alt={`${member.name} - ${member.role}`}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-6 text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
          <p className="text-sm font-medium mb-2 opacity-90">{member.role}</p>
          <p className="text-sm leading-relaxed opacity-90">{member.description}</p>
        </div>
      </div>

      {/* Default Info */}
      <div className="p-6 bg-card group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-xl font-bold mb-1 text-primary">{member.name}</h3>
        <p className="text-muted-foreground">{member.role}</p>
      </div>
    </motion.div>
  );
}
