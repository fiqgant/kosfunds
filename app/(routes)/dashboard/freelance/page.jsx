"use client";

export default function FreelancePage() {
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

  const internalFreelancers = [
    {
      name: "Dina Ayu",
      skill: "Desain Feed Instagram",
      price: "Rp100.000/proyek",
      contact: "https://wa.me/6281234567890",
    },
    {
      name: "Rafi Hidayat",
      skill: "Entry Data Excel",
      price: "Rp50.000/file",
      contact: "https://wa.me/6281122334455",
    },
    {
      name: "Sinta Pramesti",
      skill: "Penulisan CV Profesional",
      price: "Rp75.000/CV",
      contact: "https://wa.me/6285678901234",
    },
    {
      name: "Bayu Firmansyah",
      skill: "Edit Video TikTok/Reels",
      price: "Rp120.000/video",
      contact: "https://wa.me/6289988776655",
    },
  ];

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Kosfunds Freelance</h1>
      <p className="text-gray-600 mb-8 text-sm md:text-base">
        Kami bukan hanya menyarankan, tapi juga menyediakan wadah bagi kamu untuk menawarkan jasa atau mencari pekerjaan freelance dari komunitas Kosfunds. Dukung ekonomi digital yang saling menguatkan!
      </p>

      {/* Internal Kosfunds Freelancers */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">👥 Freelancer Komunitas Kami</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {internalFreelancers.map((freelancer, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{freelancer.name}</h3>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-2">
                {freelancer.skill}
              </span>
              <p className="text-sm text-gray-600 mb-4">Harga: <strong>{freelancer.price}</strong></p>
              <a
                href={freelancer.contact}
                target="_blank"
                className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-block transition"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* External Jobs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🌐 Rekomendasi Freelance dari Platform Luar</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {externalJobs.map((job, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition">
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
