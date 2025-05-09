"use client";

import { useUser } from "@clerk/nextjs";
import { ShoppingBag, LinkIcon, Coins } from "lucide-react";

export default function AffiliatePage() {
  const { user } = useUser();

  // Dummy produk affiliate dengan estimasi komisi
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
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-blue-800">Program Affiliate Kosfunds</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Promosikan produk digital dan fisik yang relevan dengan topik keuangan.
            Dapatkan penghasilan dari setiap pembelian melalui link kamu.
          </p>
        </div>

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
