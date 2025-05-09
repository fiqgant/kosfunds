"use client";

import { useUser } from "@clerk/nextjs";
import { ShoppingBag, LinkIcon, Coins, Lightbulb } from "lucide-react";

export default function AffiliatePage() {
  const { user } = useUser();

  const products = [
    {
      name: "Kelas Menulis Artikel SEO",
      category: "Digital Product",
      platform: "Skillshare",
      baseUrl: "https://skillshare.com/kelas-seo",
      estimatedCommission: 20000,
    },
    {
      name: "Buku Manajemen Uang",
      category: "Fisik",
      platform: "Shopee",
      baseUrl: "https://shopee.co.id/buku-keuangan",
      estimatedCommission: 10000,
    },
    {
      name: "Aplikasi Budget Planner Premium",
      category: "Digital App",
      platform: "Google Play",
      baseUrl: "https://play.google.com/budget-planner",
      estimatedCommission: 15000,
    },
  ];

  const username = user?.username || "userdemo";

  const formatCurrency = (value) =>
    value.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

  const generateSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-blue-800">Program Affiliate Kosfunds</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Promosikan produk pilihan dari Kosfunds dan partner kami. Setiap kali ada yang membeli dari link kamu, kamu akan mendapat komisi langsung.
          </p>
        </div>

        {/* Panduan Affiliate */}
        <div className="bg-white border p-6 rounded-xl shadow-sm mb-10">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-3">
            <Lightbulb className="text-yellow-500" size={20} />
            Panduan Singkat untuk Memulai
          </h2>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
            <li>Buka daftar produk affiliate di bawah.</li>
            <li>Copy link affiliate milik kamu (sudah otomatis dibuat).</li>
            <li>Bagikan link tersebut di media sosial, status WhatsApp, blog, atau komunitas.</li>
            <li>Setiap transaksi dari link kamu akan memberi kamu komisi sesuai estimasi.</li>
          </ol>
          <p className="text-sm text-gray-600 mt-4 italic">
            Komisi akan ditambahkan ke dompet Kosfunds kamu dan bisa ditarik kapan saja.
          </p>
        </div>

        {/* List Produk Affiliate */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Produk Affiliate Tersedia</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const slug = generateSlug(product.name);
            const affiliateLink = `https://kosfunds.vercel.app/a/${username}/${slug}`;

            return (
              <div
                key={index}
                className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-md font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-500">Kategori: {product.category}</p>
                  <p className="text-sm text-gray-400 mb-2">via {product.platform}</p>
                  <div className="bg-gray-100 rounded px-3 py-2 text-sm text-gray-700 break-all mb-3">
                    {affiliateLink}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-green-700 flex items-center gap-1">
                    <Coins size={16} /> {formatCurrency(product.estimatedCommission)}
                  </span>
                  <a
                    href={affiliateLink}
                    target="_blank"
                    className="text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition flex items-center gap-2"
                  >
                    <LinkIcon size={16} />
                    Copy Link
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
