"use client";

import Link from "next/link";
import { BookOpenCheck, Calculator, Gift } from "lucide-react";

const EducationPage = () => {
  const features = [
    {
      title: "Kelas Literasi Keuangan Gratis",
      description:
        "Artikel, video, dan kuis seputar pengelolaan keuangan pribadi. Cocok untuk semua kalangan.",
      icon: <BookOpenCheck className="text-freelance-primary" size={32} />,
      link: "/dashboard/education/kelas-literasi",
      color: "blue",
    },
    {
      title: "Simulasi & Kalkulator Keuangan",
      description:
        "Simulasikan tabungan, cicilan, dan tujuan keuangan jangka panjang kamu dengan alat bantu interaktif.",
      icon: <Calculator className="text-freelance-accent" size={32} />,
      link: "/dashboard/education/simulasi",
      color: "green",
    },
    {
      title: "Gamifikasi & Reward",
      description:
        "Dapatkan poin dari aktivitas finansial sehat dan tukarkan dengan reward seperti voucher & kelas premium.",
      icon: <Gift className="text-freelance-secondary" size={32} />,
      link: "/dashboard/education/reward",
      color: "yellow",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800">Kosfunds Education Hub</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Jelajahi fitur edukatif untuk membangun literasi keuangan dan kebiasaan finansial sehat yang menyenangkan dan menguntungkan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
              <div className="mt-4">
                <Link
                  href={feature.link}
                  className={`inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition`}
                >
                  Jelajahi
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
