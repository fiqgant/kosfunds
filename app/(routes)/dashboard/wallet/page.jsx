"use client";

import {
  Wallet2,
  ArrowDownRight,
  ArrowUpRight,
  User2,
  Droplet,
  Phone,
  Plug,
  Wifi,
} from "lucide-react";

export default function WalletPage() {
  const saldo = 725000;

  const transactions = [
    {
      type: "Affiliate",
      description: "Komisi dari Kelas SEO",
      amount: 20000,
      date: "2025-05-09",
    },
    {
      type: "Freelance",
      description: "Proyek CV Profesional",
      amount: 150000,
      date: "2025-05-08",
    },
    {
      type: "Affiliate",
      description: "Komisi dari Buku Manajemen",
      amount: 10000,
      date: "2025-05-07",
    },
    {
      type: "Freelance",
      description: "Proyek Data Entry",
      amount: 120000,
      date: "2025-05-06",
    },
  ];

  const formatCurrency = (value) =>
    value.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

  const services = [
    {
      label: "Bayar Air",
      icon: Droplet,
      bg: "bg-blue-100 text-blue-700",
    },
    {
      label: "Bayar Listrik",
      icon: Plug,
      bg: "bg-yellow-100 text-yellow-700",
    },
    {
      label: "Isi Pulsa",
      icon: Phone,
      bg: "bg-green-100 text-green-700",
    },
    {
      label: "Internet",
      icon: Wifi,
      bg: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">Dompet Kosfunds</h1>
        <p className="text-gray-600">
          Lihat saldo dan gunakan untuk transaksi sehari-hari seperti bayar pulsa, listrik, atau air.
        </p>
      </div>

      {/* Kartu Dompet */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white p-6 rounded-2xl shadow-lg mb-10">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm opacity-80">Saldo Tersedia</p>
            <h2 className="text-3xl font-bold mt-1">{formatCurrency(saldo)}</h2>
          </div>
          <Wallet2 className="w-10 h-10 opacity-40" />
        </div>
        <div className="mt-8 flex justify-between text-sm opacity-80">
          <div className="flex items-center gap-2">
            <User2 size={16} />
            <span>userdemo@kosfunds</span>
          </div>
          <span>Kosfunds Wallet</span>
        </div>
      </div>

      {/* Layanan Pembayaran */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Layanan Pembayaran</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-md transition cursor-pointer ${service.bg}`}
            >
              <service.icon className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">{service.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Riwayat Transaksi */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Riwayat Transaksi</h2>
      <div className="space-y-4">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl px-5 py-4 shadow-sm flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-gray-800">{tx.description}</h3>
              <p className="text-sm text-gray-500">{tx.date} • {tx.type}</p>
            </div>
            <span
              className={`flex items-center gap-1 text-sm font-medium ${
                tx.amount >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {tx.amount >= 0 ? <ArrowDownRight size={16} /> : <ArrowUpRight size={16} />}
              {formatCurrency(tx.amount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
