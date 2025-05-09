"use client";

import Image from "next/image";
import { BookOpenText, Video, HelpCircle } from "lucide-react";

export default function KelasLiterasiPage() {
  const materi = [
    {
      title: "Dasar-dasar Keuangan Pribadi",
      type: "Artikel",
      icon: <BookOpenText className="text-blue-600" size={20} />,
      image: "https://source.unsplash.com/600x400/?finance,planning",
    },
    {
      title: "Cara Menyusun Anggaran",
      type: "Video",
      icon: <Video className="text-rose-600" size={20} />,
      image: "https://source.unsplash.com/600x400/?budget,money",
    },
    {
      title: "Kuis: Seberapa Finansial Pintarkah Kamu?",
      type: "Kuis",
      icon: <HelpCircle className="text-emerald-600" size={20} />,
      image: "https://source.unsplash.com/600x400/?quiz,education",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-blue-800">
            Kelas Literasi Keuangan
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Pelajari cara mengelola uang dengan bijak melalui materi interaktif
            berbasis artikel, video, dan kuis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {materi.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="h-40 w-full relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  {item.icon}
                  <span>{item.type}</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
                <button className="mt-4 text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  Mulai Belajar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
