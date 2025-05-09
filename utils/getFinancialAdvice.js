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

Tolong analisis kondisi keuangan saya dan berikan rekomendasi dalam bahasa Indonesia, dengan gaya bahasa yang sopan, ringkas, dan mudah dipahami.

Berikan:
1. **Analisis singkat kondisi keuangan saya saat ini** (apakah surplus, defisit, atau seimbang).
2. **Langkah realistis yang bisa saya lakukan dalam 1 minggu ke depan** untuk meningkatkan efisiensi anggaran dan menabung lebih banyak.
3. **Tips pajak** yang relevan jika saya adalah pekerja lepas atau memiliki penghasilan dari afiliasi.
4. **Saran praktis untuk memulai atau mengembangkan penghasilan dari program afiliasi** (produk digital atau fisik).
5. **Langkah awal untuk memulai karier freelance secara online**, termasuk platform yang bisa digunakan untuk pemula.

Tulis dalam 4–6 paragraf pendek. Sertakan poin-poin yang actionable, hemat waktu, dan sesuai dengan kondisi keuangan masyarakat Indonesia pada umumnya.
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: userPrompt }] }],
      generationConfig: {
        maxOutputTokens: 300,
        temperature: 0.5,
      },
    });

    return result.response.text().trim();

  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Maaf, saya tidak bisa memberikan nasehat keuangan saat ini. Silakan coba lagi nanti.";
  }
};

export default getFinancialAdvice;
