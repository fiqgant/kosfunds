// file: lib/getFinancialAdvice.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);

  // Validasi input awal
  if (
    !totalBudget || !totalIncome || !totalSpend ||
    isNaN(totalBudget) || isNaN(totalIncome) || isNaN(totalSpend) ||
    Number(totalBudget) <= 0 || Number(totalIncome) <= 0 || Number(totalSpend) <= 0
  ) {
    return "Silakan isi dulu anggaran, pendapatan, dan pengeluaran Anda untuk mendapatkan saran keuangan.";
  }

  try {
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      throw new Error("API key is missing");
    }

    const userPrompt = `
Saya memiliki data keuangan sebagai berikut:
- Total Anggaran: ${totalBudget} IDR
- Total Pendapatan: ${totalIncome} IDR
- Total Pengeluaran: ${totalSpend} IDR

Tolong analisis situasi keuangan saya dan berikan:
1. Saran singkat (1-2 kalimat) dalam bahasa Indonesia tentang bagaimana saya bisa menghemat dan menyeimbangkan anggaran pribadi.
2. Tips praktis untuk mengelola kewajiban pajak secara efisien berdasarkan kondisi saya (asumsikan saya adalah pekerja mandiri atau freelance).
3. Nasehat ringkas tentang bagaimana saya bisa mulai atau mengembangkan penghasilan tambahan melalui affiliate produk digital maupun fisik.
4. Ide atau langkah awal untuk mendapatkan proyek freelance yang cocok untuk pemula.

Gunakan gaya bahasa yang mudah dipahami oleh orang awam, ringkas namun bermanfaat, dan dorong tindakan nyata dalam waktu dekat.
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent({
      contents: [
        {
          role: 'user',
          parts: [{ text: userPrompt }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 300,
        temperature: 0.5,
      },
    });

    const advice = result.response.text().trim();
    console.log(advice);
    return advice;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Maaf, saya tidak bisa memberikan nasehat keuangan saat ini. Silakan coba lagi nanti.";
  }
};

export default getFinancialAdvice;
