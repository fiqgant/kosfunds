"use client";

import { useState } from "react";

export default function SimulasiPage() {
  const [target, setTarget] = useState("");
  const [bulan, setBulan] = useState("");
  const [hasilTabungan, setHasilTabungan] = useState(null);

  const [pinjaman, setPinjaman] = useState("");
  const [bunga, setBunga] = useState("");
  const [tenor, setTenor] = useState("");
  const [hasilCicilan, setHasilCicilan] = useState(null);

  const handleTabungan = () => {
    const total = Number(target);
    const durasi = Number(bulan);
    if (total > 0 && durasi > 0) {
      const perBulan = total / durasi;
      setHasilTabungan(perBulan);
    } else {
      setHasilTabungan(null);
    }
  };

  const handleCicilan = () => {
    const p = Number(pinjaman);
    const r = Number(bunga) / 100 / 12;
    const n = Number(tenor);
    if (p > 0 && r >= 0 && n > 0) {
      const angsuran = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setHasilCicilan(angsuran);
    } else {
      setHasilCicilan(null);
    }
  };

  const formatCurrency = (num) =>
    num?.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

  return (
    <div className="p-6 max-w-screen-md mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">
        Simulasi & Kalkulator Keuangan
      </h1>
      <p className="text-gray-600 mb-8">
        Gunakan alat bantu interaktif kami untuk mensimulasikan tabungan,
        perencanaan cicilan, dan tujuan finansial jangka panjang.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Simulasi Tabungan */}
        <div className="bg-white border p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-4 text-blue-700">
            Simulasi Tabungan
          </h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Target Tabungan (Rp)
              </label>
              <input
                type="number"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Jangka Waktu (bulan)
              </label>
              <input
                type="number"
                value={bulan}
                onChange={(e) => setBulan(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <button
              onClick={handleTabungan}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Hitung Tabungan per Bulan
            </button>
            {hasilTabungan !== null && (
              <div className="text-sm text-green-700 mt-2">
                Kamu perlu menabung sebesar <strong>{formatCurrency(hasilTabungan)}</strong> per bulan.
              </div>
            )}
          </div>
        </div>

        {/* Kalkulator Cicilan */}
        <div className="bg-white border p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg mb-4 text-blue-700">
            Kalkulator Cicilan
          </h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Total Pinjaman (Rp)
              </label>
              <input
                type="number"
                value={pinjaman}
                onChange={(e) => setPinjaman(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Suku Bunga per Tahun (%)
              </label>
              <input
                type="number"
                value={bunga}
                onChange={(e) => setBunga(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Tenor (bulan)
              </label>
              <input
                type="number"
                value={tenor}
                onChange={(e) => setTenor(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <button
              onClick={handleCicilan}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Hitung Cicilan per Bulan
            </button>
            {hasilCicilan !== null && (
              <div className="text-sm text-green-700 mt-2">
                Estimasi cicilan bulanan: <strong>{formatCurrency(hasilCicilan)}</strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
