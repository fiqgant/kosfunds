"use client";

import React, { useState } from "react";
import { GraduationCap, Globe, Filter } from "lucide-react";

const ScholarshipPage = () => {
  const [filter, setFilter] = useState("Semua");

  const categories = ["Semua", "Internal", "Nasional", "Internasional"];

  const internalScholarships = [
    {
      id: "kosfunds-merdeka",
      name: "Beasiswa Merdeka Kosfunds",
      eligibility: "Mahasiswa semester 3 ke atas",
      value: "Rp2.000.000 / semester",
      category: "Internal",
    },
    {
      id: "kosfunds-digital",
      name: "Beasiswa Digital Skill",
      eligibility: "Pelajar dan mahasiswa",
      value: "Rp1.000.000 + kelas pelatihan",
      category: "Internal",
    },
    {
      id: "kosfunds-skripsi",
      name: "Beasiswa Skripsi",
      eligibility: "Mahasiswa akhir",
      value: "Rp1.500.000",
      category: "Internal",
    },
    {
      id: "kosfunds-riset",
      name: "Dana Riset Mini",
      eligibility: "Semua jurusan",
      value: "Rp500.000",
      category: "Internal",
    },
  ];

  const externalScholarships = [
    {
      name: "Beasiswa LPDP 2025",
      provider: "Kementerian Keuangan RI",
      url: "https://lpdp.kemenkeu.go.id/",
      category: "Nasional",
    },
    {
      name: "Beasiswa Teladan Djarum",
      provider: "Djarum Foundation",
      url: "https://djarumbeasiswaplus.org/",
      category: "Nasional",
    },
    {
      name: "Australia Awards Scholarship",
      provider: "Australian Government",
      url: "https://www.australiaawardsindonesia.org/",
      category: "Internasional",
    },
    {
      name: "Beasiswa Bank Indonesia",
      provider: "Bank Indonesia",
      url: "https://www.bi.go.id/",
      category: "Nasional",
    },
  ];

  const filteredInternal = filter === "Semua" ? internalScholarships : internalScholarships.filter(s => s.category === filter);
  const filteredExternal = filter === "Semua" ? externalScholarships : externalScholarships.filter(s => s.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <ScholarshipHeader
          title="Kosfunds Scholarship Center"
          description="Temukan berbagai peluang beasiswa dari Kosfunds dan lembaga nasional maupun internasional. Dukung perjalanan pendidikanmu hari ini."
        />

        {/* Filter */}
        <div className="mb-10 flex items-center gap-2 flex-wrap">
          <Filter className="text-freelance-secondary" size={20} />
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-3 py-1.5 rounded-full text-sm border ${
                filter === cat
                  ? "bg-freelance-primary text-white"
                  : "text-gray-600 hover:bg-gray-100"
              } transition`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Internal Beasiswa */}
        <ScholarshipSection
          title="🎓 Beasiswa dari Kosfunds"
          icon={<GraduationCap className="text-freelance-primary" size={24} />}
        >
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredInternal.map((scholarship) => (
              <div
                key={scholarship.id}
                className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-gray-800">{scholarship.name}</h3>
                <p className="text-sm text-gray-600">Syarat: {scholarship.eligibility}</p>
                <p className="text-sm mt-2 text-freelance-primary font-medium">Manfaat: {scholarship.value}</p>
                <a
                  href={`/dashboard/scholarships/${scholarship.id}`}
                  className="inline-block mt-3 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
                >
                  Lihat Detail
                </a>
              </div>
            ))}
            {filteredInternal.length === 0 && (
              <p className="text-sm text-gray-500">Tidak ada beasiswa internal dalam kategori ini.</p>
            )}
          </div>
        </ScholarshipSection>

        {/* External Beasiswa */}
        <ScholarshipSection
          title="🌐 Beasiswa Nasional & Internasional"
          icon={<Globe className="text-freelance-accent" size={24} />}
        >
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredExternal.map((beasiswa, index) => (
              <a
                key={index}
                href={beasiswa.url}
                target="_blank"
                className="block bg-white p-5 rounded-xl border shadow-sm hover:bg-gray-50 transition"
              >
                <h3 className="font-semibold text-lg text-gray-800">{beasiswa.name}</h3>
                <p className="text-sm text-gray-600">Penyelenggara: {beasiswa.provider}</p>
              </a>
            ))}
            {filteredExternal.length === 0 && (
              <p className="text-sm text-gray-500">Tidak ada beasiswa luar untuk kategori ini.</p>
            )}
          </div>
        </ScholarshipSection>
      </div>
    </div>
  );
};

const ScholarshipHeader = ({ title, description }) => (
  <div className="mb-12 text-center">
    <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{description}</p>
  </div>
);

const ScholarshipSection = ({ title, icon, children }) => (
  <section className="mb-12">
    <div className="flex items-center gap-2 mb-4">
      {icon}
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
    {children}
  </section>
);

export default ScholarshipPage;
