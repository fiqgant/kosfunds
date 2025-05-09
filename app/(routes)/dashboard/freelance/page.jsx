"use client";

export default function FreelancePage() {
  const dummyJobs = [
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
      title: "Transkrip Audio ke Teks",
      platform: "Fiverr",
      url: "https://www.fiverr.com/",
    },
    {
      title: "Editor Video Reels",
      platform: "Upwork",
      url: "https://www.upwork.com/",
    },
  ];

  const communityFreelancers = [
    { name: "Dina", skill: "Desain Feed Instagram", status: "Tersedia" },
    { name: "Rafi", skill: "Pengetikan & Entry Data", status: "Tersedia" },
    { name: "Lina", skill: "Terjemahan Inggris-Indonesia", status: "Tersedia" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Peluang Freelance</h1>

      {/* Rekomendasi Job dari Platform */}
      <h2 className="text-xl font-semibold mb-4">🔍 Pekerjaan Freelance yang Bisa Kamu Apply</h2>
      <div className="grid gap-4 md:grid-cols-2 mb-10">
        {dummyJobs.map((job, i) => (
          <div key={i} className="border rounded-xl p-5 shadow-sm bg-white flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-3">Platform: {job.platform}</p>
            </div>
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Apply Sekarang
            </a>
          </div>
        ))}
      </div>

      {/* Freelancer dari Komunitas */}
      <h2 className="text-xl font-semibold mb-4">👩‍💻 Freelancer dari Komunitas Kami</h2>
      <p className="text-sm text-gray-600 mb-4">
        Ini adalah daftar freelancer yang sudah mendaftar ke Kosfunds. Hubungi mereka langsung untuk kolaborasi!
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {communityFreelancers.map((freelancer, i) => (
          <div key={i} className="border rounded-xl p-5 shadow-sm bg-gray-50">
            <h3 className="text-md font-semibold">{freelancer.name}</h3>
            <p className="text-sm text-gray-700">Keahlian: {freelancer.skill}</p>
            <p className="text-xs text-green-600 mt-1">{freelancer.status}</p>
            <button className="mt-3 inline-block text-blue-600 hover:underline text-sm">
              Hubungi Freelancer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
