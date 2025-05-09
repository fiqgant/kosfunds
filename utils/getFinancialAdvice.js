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

[FREELANCE]
Langkah awal untuk mendapatkan penghasilan freelance online.

Jawaban dalam bahasa Indonesia. Tiap bagian maksimal 3–5 kalimat. Tulis dengan gaya sopan, to the point, dan actionable.
`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: userPrompt }] }],
      generationConfig: {
        temperature: 0.5,
        maxOutputTokens: 500, // dinaikkan agar cukup untuk 4 bagian
      },
    });

    return result.response.text().trim();

  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Maaf, saya tidak bisa memberikan nasehat keuangan saat ini. Silakan coba lagi nanti.";
  }
};

export default getFinancialAdvice;
