"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
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
        <section className="relative py-28 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900"></div>
        </div>

        <div className="container mx-auto px-4">
          {/* AI Finance Features */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-balance tracking-tight md:text-5xl">
              <span className="text-gradient">Manajemen Keuangan</span> Berbasis AI
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Rasakan generasi berikutnya dalam manajemen keuangan dengan fitur-fitur canggih kami. 
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <LineChart className="h-6 w-6" />,
                title: "Analitik Cerdas",
                description:
                  "Lacak kemajuan keuangan Anda dengan analitik cerdas yang memberikan wawasan bermakna tentang pola pengeluaran dan tabungan Anda."
              },
              {
                icon: <PiggyBank className="h-6 w-6" />,
                title: "Penganggaran Berbasis AI",
                description:
                  "AI kami menganalisis pengeluaran Anda dan merekomendasikan rencana anggaran yang dipersonalisasi yang disesuaikan dengan gaya hidup dan tujuan keuangan Anda."
              },
              {
                icon: <Bell className="h-6 w-6" />,
                title: "Notifikasi Cerdas",
                description:
                  "Terima pemberitahuan tepat waktu tentang pengeluaran yang tidak biasa, tagihan yang akan datang, dan peluang investasi yang disesuaikan dengan profil keuangan Anda."
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Perlindungan terhadap Penipuan",
                description:
                  "Algoritma canggih memantau akun Anda untuk aktivitas mencurigakan dan melindungi Anda dari potensi penipuan keuangan."
              },
              {
                icon: <Sparkles className="h-6 w-6" />,
                title: "Rekomendasi yang Dipersonalisasi",
                description:
                  "Dapatkan rekomendasi yang disesuaikan untuk tabungan, investasi, dan perencanaan keuangan berdasarkan tujuan dan profil risiko Anda."
              },
              {
                icon: <BarChart3 className="h-6 w-6" />,
                title: "Optimasi Pajak",
                description:
                  "AI kami mengidentifikasi peluang penghematan pajak dan memberikan panduan untuk mengoptimalkan strategi pajak Anda sepanjang tahun."
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
                <span className="text-gradient-alt">Platform</span> Peluang Freelance
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                Temukan peluang kerja freelance berkualitas tinggi yang sesuai dengan keterampilan dan tujuan keuangan Anda.
              </p>
            </div>

            {/* Featured freelance section with more visual appeal */}
            <div className="mb-16 rounded-3xl bg-gradient-to-r from-kosfunds-teal/10 to-kosfunds-purple/10 p-8 dark:from-kosfunds-teal/20 dark:to-kosfunds-purple/20">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <h3 className="mb-4 text-3xl font-bold text-gradient-alt">Temukan Proyek Anda Selanjutnya</h3>
                  <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    Platform berbasis AI kami menganalisis keterampilan, pengalaman, dan tujuan keuangan Anda untuk mencocokkan Anda dengan peluang freelance yang tepat.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "Rekomendasi pekerjaan yang dipersonalisasi",
                      "Pencocokan keterampilan berbasis AI",
                      "Pemrosesan pembayaran yang aman",
                      "Pelacakan pemasukan dan perencanaan keuangan",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-kosfunds-purple/20 text-kosfunds-purple">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="group w-fit rounded-full bg-gradient-to-r from-kosfunds-purple to-kosfunds-pink px-6 py-2 text-white">
                    Jelajahi Peluang
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: <BriefcaseBusiness className="h-10 w-10 text-kosfunds-purple" />,
                      title: "Proyek Premium",
                      desc: "Peluang freelance berkualitas tinggi dengan bayaran yang layak"
                    },
                    {
                      icon: <Users className="h-10 w-10 text-kosfunds-teal" />,
                      title: "Klien Terverifikasi",
                      desc: "Bekerja dengan klien tepercaya yang telah melalui proses penyaringan"
                    },
                    {
                      icon: <LayoutDashboard className="h-10 w-10 text-kosfunds-blue" />,
                      title: "Dasboard Keuangan",
                      desc: "Lacak pendapatan dan kelola keuangan Anda"
                    },
                    {
                      icon: <LayoutGrid className="h-10 w-10 text-kosfunds-pink" />,
                      title: "Pasar Keterampilan",
                      desc: "Tampilkan keterampilan Anda kepada calon klien"
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
                  title: "Pencocokan Pekerjaan Berbasis AI",
                  description:
                    "Algoritma cerdas kami mencocokkan keterampilan dan pengalaman Anda dengan peluang freelance yang sempurna, menghemat waktu Anda dalam mencari pekerjaan."
                },
                {
                  icon: <BriefcaseBusiness className="h-6 w-6" />,
                  title: "Integrasi Pemasukan",
                  description:
                    "Integrasikan pendapatan freelance Anda dengan alat manajemen keuangan Anda secara mulus untuk perencanaan keuangan yang komprehensif."
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Jaringan Klien",
                  description:
                    "Terhubung dengan klien berkualitas tinggi yang mencari keterampilan spesifik Anda dan bangun jaringan hubungan bisnis yang dapat diandalkan."
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