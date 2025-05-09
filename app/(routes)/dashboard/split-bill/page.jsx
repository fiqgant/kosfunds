"use client";

import React, { useState } from "react";
import { UploadCloud, Loader2, Users, ReceiptText } from "lucide-react";

export default function SplitBillPage() {
  const [image, setImage] = useState(null);
  const [ocrText, setOcrText] = useState("");
  const [loading, setLoading] = useState(false);
  const [personCount, setPersonCount] = useState(2);
  const [estimatedTotal, setEstimatedTotal] = useState(null);
  const [itemList, setItemList] = useState([]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!window.Tesseract) {
      alert("OCR belum siap. Silakan tunggu beberapa detik dan coba lagi.");
      return;
    }

    setImage(URL.createObjectURL(file));
    setOcrText("");
    setEstimatedTotal(null);
    setItemList([]);
    setLoading(true);

    try {
      const result = await window.Tesseract.recognize(file, "eng+osd", {
        logger: (m) => console.log(m),
      });

      const text = result.data.text;
      setOcrText(text);
      setEstimatedTotal(extractTotal(text));
      setItemList(extractItems(text));
    } catch (error) {
      console.error("OCR error:", error);
      setOcrText("Gagal memproses gambar.");
    } finally {
      setLoading(false);
    }
  };

  const extractTotal = (text) => {
    const match = text.match(/total.*?([\d.,]+)/i);
    if (match) {
      const cleaned = match[1].replace(/[.,]/g, "");
      const value = parseInt(cleaned, 10);
      return isNaN(value) ? null : value;
    }
    return null;
  };

  const extractItems = (text) => {
    const lines = text.split("\n").filter((l) => l.trim().length > 0);
    const items = [];

    lines.forEach((line) => {
      const match = line.match(/^(.+?)\s+([\d.,]+)$/);
      if (match) {
        const name = match[1].trim();
        const rawPrice = match[2].replace(/[.,]/g, "");
        const price = parseInt(rawPrice, 10);
        if (!isNaN(price)) {
          items.push({ name, price });
        }
      }
    });

    return items;
  };

  const formatCurrency = (num) =>
    num?.toLocaleString("id-ID", { style: "currency", currency: "IDR" });

  const perPerson =
    estimatedTotal && personCount > 0
      ? Math.round(estimatedTotal / personCount)
      : 0;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Split Bill Otomatis</h1>
      <p className="text-gray-600 mb-6">
        Upload foto struk, sistem akan membaca item dan total, lalu membaginya untuk temanmu.
      </p>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
      />

      {image && (
        <img
          src={image}
          alt="Preview"
          className="mb-4 rounded-lg w-full max-h-96 object-contain border"
        />
      )}

      {loading && (
        <div className="flex items-center gap-2 text-blue-700 text-sm mb-4">
          <Loader2 className="animate-spin" size={20} />
          Memproses OCR...
        </div>
      )}

      {ocrText && (
        <div className="bg-white border p-4 mt-4 rounded-xl shadow-sm text-sm text-gray-700 space-y-3">
          <div>
            <strong>Hasil OCR Mentah:</strong>
            <pre className="whitespace-pre-wrap mt-1">{ocrText}</pre>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t">
            <ReceiptText size={18} />
            <span>
              Estimasi Total:{" "}
              <strong>
                {estimatedTotal
                  ? formatCurrency(estimatedTotal)
                  : "Tidak ditemukan"}
              </strong>
            </span>
          </div>

          {itemList.length > 0 && (
            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-2">Item Terdeteksi:</h3>
              <ul className="space-y-1 text-sm">
                {itemList.map((item, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{formatCurrency(item.price)}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-2">
                Total dari item:{" "}
                <strong>
                  {formatCurrency(
                    itemList.reduce((sum, i) => sum + i.price, 0)
                  )}
                </strong>
              </p>
            </div>
          )}

          {estimatedTotal && (
            <div className="pt-4 border-t">
              <label className="text-sm font-medium block mb-1">
                Jumlah Orang
              </label>
              <input
                type="number"
                min="1"
                value={personCount}
                onChange={(e) => setPersonCount(Number(e.target.value))}
                className="border px-3 py-2 rounded w-24 text-sm"
              />
              <p className="mt-2 text-sm text-blue-700">
                Masing-masing bayar:{" "}
                <strong>{formatCurrency(perPerson)}</strong>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
