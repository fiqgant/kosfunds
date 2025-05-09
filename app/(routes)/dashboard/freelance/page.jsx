"use client";

export default function FreelancePage() {
  const dummyFreelance = [
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

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6">Rekomendasi Freelance untuk Kamu</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {dummyFreelance.map((job, i) => (
          <div key={i} className="border rounded-xl p-5 shadow-sm bg-white flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-1">{job.title}</h2>
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
    </div>
  );
}
