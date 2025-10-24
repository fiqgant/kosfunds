"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, rootMargin: "-100px" });
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      toast({
        title: "Berhasil!",
        description: "Terima kasih telah berlangganan newsletter kami.",
      });
      setEmail("");
    }
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    // { name: "Fitur", href: "/features" },
    { name: "Blog", href: "/blog" },
    // { name: "Kontak", href: "/contact" },
    { name: "Login", href: "/sign-in" },
  ];

  const socialLinks = [
    // { icon: Facebook, href: "https://facebook.com/kosfunds", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/kosfunds", label: "Instagram" },
    // { icon: GitHub, href: "https://github.com/kosfunds", label: "GitHub" },
    // { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    // { icon: Youtube, href: "https://youtube.com/", label: "YouTube" },
  ];

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-[#0B1E4B] text-white"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div >
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/chart-donut.svg" alt="KosFunds Logo" width={40} height={40} />
              <h3 className="text-2xl font-bold text-white">KosFunds</h3>
            </Link>
            <p className="text-white/80 leading-relaxed mb-6">
              Solusi keuangan modern untuk kehidupan yang lebih terencana.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/80 hover:text-white hover:underline transition-all duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-white/80" />
                <span className="text-white/80">
                  Laut Dendang, Jl. Warakauri, Kec. Percut Sei Tuan
                  <br />
                  Kabupaten Deli Serdang, Sumatera Utara
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-white/80" />
                <a
                  href="tel:+622112345678"
                  className="text-white/80 hover:text-white"
                >
                  +62 895-1847-6014
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-white/80" />
                <a
                  href="mailto:info@kosfunds.com"
                  className="text-white/80 hover:text-white"
                >
                  info@kosfunds.com
                </a>
              </li>
            </ul>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 border-white/30 text-black hover:bg-white/10 hover:text-white"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/7eNccYxozzrVrfhA7",
                  "_blank"
                )
              }
            >
              Lihat Peta
            </Button>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-white/80 text-sm mb-4">
              Dapatkan update terbaru dan tips keuangan langsung ke email Anda.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-white text-[#0B1E4B] hover:bg-gray-100"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-white/60 mt-2">
                Kami tidak akan membagikan email Anda.
              </p>
            </form>

            <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/80 text-sm">
            © 2025 KosFunds — Semua Hak Dilindungi. |{" "}
            <a href="/terms" className="hover:text-white hover:underline">
              Syarat & Ketentuan
            </a>{" "}
            |{" "}
            <a href="/privacy" className="hover:text-white hover:underline">
              Kebijakan Privasi
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
