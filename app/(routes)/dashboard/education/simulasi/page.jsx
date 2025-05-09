"use client";

export default function SimulasiPage() {
  return (
    <div className="p-6 max-w-screen-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Simulasi & Kalkulator Keuangan</h1>
      <p className="text-gray-600 mb-6">
        Gunakan alat bantu interaktif kami untuk mensimulasikan tabungan, perencanaan cicilan, dan tujuan finansial jangka panjang.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-white border p-4 rounded shadow-sm">
          <h3 className="font-semibold mb-2">Simulasi Tabungan</h3>
          <p className="text-sm text-gray-500">Rencanakan berapa yang perlu ditabung setiap bulan untuk capai tujuanmu.</p>
        </div>
        <div className="bg-white border p-4 rounded shadow-sm">
          <h3 className="font-semibold mb-2">Kalkulator Cicilan</h3>
          <p className="text-sm text-gray-500">Hitung estimasi cicilan bulanan dari total pinjaman dan tenor.</p>
        </div>
      </div>
    </div>
  );
}
