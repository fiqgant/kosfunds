"use client";

import Link from "next/link";

export default function ScholarshipPage() {
  const externalScholarships = [
    {
      title: "Beasiswa LPDP 2025",
      provider: "Kementerian Keuangan RI",
      url: "https://lpdp.kemenkeu.go.id/",
    },
    {
      title: "Beasiswa S1 Teladan Djarum",
      provider: "Djarum Foundation",
      url: "https://djarumbeasiswaplus.org/",
    },
    {
      title: "Beasiswa S2 Australia Awards",
      provider: "Australian Government",
      url: "https://www.australiaawardsindonesia.org/",
    },
    {
      title: "Beasiswa Bank Indonesia",
      provider: "Bank Indonesia",
      url: "https://www.bi.go.id/",
    },
  ];

  const internalScholarships = [
    {
      id: "kosfunds-merdeka",
      name: "Beasiswa Merdeka Kosfunds",
      eligibility: "Untuk mahasiswa semester 3 ke atas",
      value: "Rp2.000.000 / semester",
    },
    {
      id: "kosfunds-digital",
      name: "Beasiswa Digital Skill",
      eligibility: "Terbuka untuk pelajar dan mahasiswa",
      value: "Rp1.000.000 + kelas pelatihan",
    },
    {
      id: "kosfunds-skripsi",
      name: "Beasiswa Skripsi",
      eligibility: "Mahasiswa akhir (skripsi)",
      value: "Rp1.500.000",
    },
    {
      id: "kosfunds-riset",
      name: "Dana Riset Mini",
      eligibility: "Mahasiswa aktif semua jurusan",
      value: "Rp500.000",
    },
  ];

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Beasiswa di Kosfunds</h1>
      <p className="text-gray-600 mb-8 text-sm md:text-base">
        Kami membantu kamu mengakses peluang pendidikan — baik melalui beasiswa nasional maupun program internal Kosfunds yang mendukung mahasiswa berprestasi.
      </p>

      {/* Beasiswa Internal */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🎓 Beasiswa Internal Kosfunds</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {internalScholarships.map((scholarship) => (
            <div key={scholarship.id} className="bg-white rounded-xl border p-5 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{scholarship.name}</h3>
              <p className="text-sm text-gray-600 mb-1">Syarat: {scholarship.eligibility}</p>
              <p className="text-sm text-gray-700 mb-4">Manfaat: <strong>{scholarship.value}</strong></p>
              <Link
                href={`/dashboard/scholarships/${scholarship.id}`}
                className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-block transition"
              >
                Lihat Detail
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Beasiswa dari Luar */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🌐 Beasiswa Nasional & Internasional</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {externalScholarships.map((sch, i) => (
            <div key={i} className="bg-white rounded-xl border p-5 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{sch.title}</h3>
              <p className="text-sm text-gray-600 mb-3">Penyelenggara: {sch.provider}</p>
              <a
                href={sch.url}
                target="_blank"
                className="text-sm text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg inline-block transition"
              >
                Kunjungi Website
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
