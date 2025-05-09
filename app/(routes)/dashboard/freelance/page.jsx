"use client";

import Link from "next/link";

export default function FreelancePage() {
  const internalFreelancers = [
    {
      id: "dina",
      name: "Dina Ayu",
      skill: "Desain Feed Instagram",
      price: "Rp100.000/proyek",
    },
    {
      id: "rafi",
      name: "Rafi Hidayat",
      skill: "Entry Data Excel",
      price: "Rp50.000/file",
    },
    {
      id: "sinta",
      name: "Sinta Pramesti",
      skill: "Penulisan CV Profesional",
      price: "Rp75.000/CV",
    },
    {
      id: "bayu",
      name: "Bayu Firmansyah",
      skill: "Edit Video TikTok/Reels",
      price: "Rp120.000/video",
    },
  ];

  const externalJobs = [
    {
      title: "Penulis Artikel SEO",
      platform: "Projects.co.id",
      url: "https://projects.co.id/",
    },
    {
      title: "Desainer Poster Canva",
      platform: "Sribulancer",
      url: "https://www.sribulancer.com/",
    },
    {
      title: "Editor Video Reels IG",
      platform: "Fiverr",
      url: "https://www.fiverr.com/",
    },
    {
      title: "Penerjemah Artikel Inggris",
      platform: "Upwork",
      url: "https://www.upwork.com/",
    },
  ];

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Kosfunds Freelance</h1>
      <p className="text-gray-600 mb-8 text-sm md:text-base">
        Kosfunds bukan hanya menyarankan, tapi juga menyediakan platform freelance internal. Kamu bisa menawarkan jasa, menerima pembayaran, dan membantu komunitas.
      </p>

      {/* Internal Freelancers */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">👥 Freelancer Komunitas Kosfunds</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {internalFreelancers.map((freelancer) => (
            <div key={freelancer.id} className="bg-white rounded-xl border p-5 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{freelancer.name}</h3>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-2">
                {freelancer.skill}
              </span>
              <p className="text-sm text-gray-600 mb-4">Harga: <strong>{freelancer.price}</strong></p>
              <Link
                href={`/dashboard/freelance/${freelancer.id}`}
                className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-block transition"
              >
                Lihat Detail
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* External Jobs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🌐 Rekomendasi dari Platform Luar</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {externalJobs.map((job, i) => (
            <div key={i} className="bg-white rounded-xl border p-5 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-3">Platform: {job.platform}</p>
              <a
                href={job.url}
                target="_blank"
                className="text-sm text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg inline-block transition"
              >
                Apply Sekarang
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
