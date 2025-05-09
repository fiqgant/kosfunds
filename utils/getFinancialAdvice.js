import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  if (
    !totalBudget || !totalIncome || !totalSpend ||
    isNaN(totalBudget) || isNaN(totalIncome) || isNaN(totalSpend) ||
    Number(totalBudget) <= 0 || Number(totalIncome) <= 0 || Number(totalSpend) <= 0
  ) {
    return "Silakan isi dulu anggaran, pendapatan, dan pengeluaran Anda untuk mendapatkan saran keuangan.";
  }

  try {
    const userPrompt = `
Saya ingin mendapatkan saran keuangan berdasarkan data berikut:
- Total Anggaran: ${totalBudget} IDR
- Total Pendapatan: ${totalIncome} IDR
- Total Pengeluaran: ${totalSpend} IDR

Berikan output dengan format seperti ini:

[ANGGARAN]
Analisis kondisi keuangan dan saran pengelolaan anggaran pribadi.

[PAJAK]
Tips pengelolaan pajak untuk pekerja lepas atau afiliasi.

[AFFILIATE]
Cara praktis memulai atau meningkatkan penghasilan dari afiliasi.
Sertakan 1–2 contoh produk digital atau fisik yang cocok dipromosikan oleh pemula (berikan kategori, contoh, dan platform affiliate-nya).
Tambahkan bahwa pengguna juga dapat menjelajahi fitur affiliate internal di Kosfunds melalui menu "Affiliate"

[FREELANCE]
Langkah awal untuk mendapatkan penghasilan freelance online.
Rekomendasikan 1–2 jenis pekerjaan freelance yang cocok untuk pemula (berdasarkan tren umum) dan sebutkan platform untuk memulainya.
Tambahkan bahwa pengguna juga dapat menjelajahi fitur freelance internal di Kosfunds melalui menu "Freelance".

Jawaban dalam bahasa Indonesia. Tiap bagian maksimal 3–5 kalimat. Gunakan gaya sopan, ringkas, dan actionable.
`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: userPrompt }] }],
      generationConfig: {
        temperature: 0.5,
        maxOutputTokens: 500,
      },
    });

    return result.response.text().trim();

  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Maaf, saya tidak bisa memberikan nasehat keuangan saat ini. Silakan coba lagi nanti.";
  }
};

export default getFinancialAdvice;
