"use client";

import React from "react";
import { Users, Globe, Search } from "lucide-react";
import Link from "next/link";

const Index = () => {
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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <FreelanceHeader 
          title="Kosfunds Freelance Hub"
          description="Kosfunds bukan hanya menyarankan, tapi juga menyediakan platform freelance internal. Kamu bisa menawarkan jasa, menerima pembayaran, dan membantu komunitas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            <FreelanceSection title="Freelancer Komunitas Kosfunds" icon={<Users className="text-freelance-primary" size={24} />}>
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                {internalFreelancers.map((freelancer) => (
                  <FreelancerCard
                    key={freelancer.id}
                    type="freelancer"
                    id={freelancer.id}
                    name={freelancer.name}
                    skill={freelancer.skill}
                    price={freelancer.price}
                  />
                ))}
              </div>
            </FreelanceSection>

            <FreelanceSection title="Rekomendasi dari Platform Luar" icon={<Globe className="text-freelance-accent" size={24} />}>
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                {externalJobs.map((job, i) => (
                  <FreelancerCard
                    key={i}
                    type="job"
                    title={job.title}
                    platform={job.platform}
                    url={job.url}
                  />
                ))}
              </div>
            </FreelanceSection>
          </div>

          <div>
            <FreelanceSection title="Cari Berdasarkan Kategori" icon={<Search className="text-freelance-secondary" size={24} />}>
              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <div className="space-y-4">
                  <CategoriesPanel />
                  <PopularSkills />
                </div>
              </div>
            </FreelanceSection>
          </div>
        </div>
      </div>
    </div>
  );
};

const FreelancerCard = ({ type, id, name, skill, price, title, platform, url }) => {
  if (type === "freelancer") {
    return (
      <div className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-500">{skill}</p>
        <p className="text-sm text-freelance-primary font-medium mt-2 mb-3">{price}</p>
        <Link
          href={`/dashboard/freelance/${id}`}
          className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition"
        >
          Lihat Detail
        </Link>
      </div>
    );
  }

  if (type === "job") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white p-5 rounded-xl border shadow-sm hover:bg-gray-50 transition"
      >
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">via {platform}</p>
      </a>
    );
  }

  return null;
};

const FreelanceHeader = ({ title, description }) => (
  <div className="mb-12 text-center">
    <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{description}</p>
  </div>
);

const FreelanceSection = ({ title, icon, children }) => (
  <section>
    <div className="flex items-center gap-2 mb-4">
      {icon}
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
    {children}
  </section>
);

const CategoriesPanel = () => {
  const categories = [
    "Desain Grafis", 
    "Penulisan & Translasi", 
    "Video & Animasi",
    "Data Entry", 
    "Digital Marketing", 
    "Pengembangan Web"
  ];

  return (
    <div className="space-y-2">
      <h3 className="font-medium text-sm text-gray-500 uppercase tracking-wider">Jenis Pekerjaan</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-3 py-1.5 bg-freelance-muted rounded-full text-sm hover:bg-freelance-primary hover:text-white transition-colors"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

const PopularSkills = () => {
  const skills = [
    { name: "Adobe Photoshop", count: 24 },
    { name: "Penulisan Artikel", count: 18 },
    { name: "Excel", count: 15 },
    { name: "Video Editing", count: 12 },
    { name: "Social Media", count: 9 },
  ];

  return (
    <div className="space-y-2 pt-4 border-t">
      <h3 className="font-medium text-sm text-gray-500 uppercase tracking-wider">Skills Populer</h3>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm">{skill.name}</span>
            <span className="text-xs bg-freelance-primary/10 text-freelance-primary px-2 py-0.5 rounded-full">
              {skill.count} freelancer
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
