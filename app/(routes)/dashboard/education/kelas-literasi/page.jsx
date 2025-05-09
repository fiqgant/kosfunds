"use client";

export default function KelasLiterasiPage() {
  const materi = [
    { title: "Dasar-dasar Keuangan Pribadi", type: "Artikel" },
    { title: "Cara Menyusun Anggaran", type: "Video" },
    { title: "Kuis: Seberapa Finansial Pintarkah Kamu?", type: "Kuis" },
  ];

  return (
    <div className="p-6 max-w-screen-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Kelas Literasi Keuangan</h1>
      <p className="text-gray-600 mb-6">
        Pelajari keuangan dari nol hingga mahir. Kami menyediakan konten dalam bentuk artikel, video, dan kuis untuk membantumu belajar dengan cara yang menyenangkan.
      </p>

      <div className="space-y-4">
        {materi.map((item, i) => (
          <div key={i} className="p-4 border rounded-lg bg-white shadow-sm hover:shadow transition">
            <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
