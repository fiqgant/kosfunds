"use client";

import React, { useState } from "react";
import { UploadCloud, Loader2 } from "lucide-react";

export default function SplitBillPage() {
  const [image, setImage] = useState(null);
  const [ocrText, setOcrText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
    setOcrText("");
    setLoading(true);

    try {
      const result = await window.Tesseract.recognize(file, "eng", {
        logger: (m) => console.log(m),
      });
      setOcrText(result.data.text);
    } catch (error) {
      console.error("OCR error:", error);
      setOcrText("Gagal memproses gambar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Split Bill Otomatis</h1>
      <p className="text-gray-600 mb-6">
        Upload foto struk kamu, dan sistem akan membacanya jadi teks yang bisa dibagi rata.
      </p>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
      />

      {image && (
        <img src={image} alt="Preview" className="mb-4 rounded-lg w-full max-h-96 object-contain" />
      )}

      {loading && (
        <div className="flex items-center gap-2 text-blue-700 text-sm">
          <Loader2 className="animate-spin" size={20} />
          Memproses OCR...
        </div>
      )}

      {ocrText && (
        <div className="bg-white border p-4 mt-6 rounded-xl shadow-sm whitespace-pre-wrap text-sm text-gray-700">
          <strong>Hasil OCR:</strong>
          <div className="mt-2">{ocrText}</div>
        </div>
      )}
    </div>
  );
}
