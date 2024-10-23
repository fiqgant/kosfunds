import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);
  try {
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      throw new Error("API key is missing");
    }

    const userPrompt = `
      Berdasarkan data finansial berikut:
      - Total Anggaran: ${totalBudget} IDR
      - Total Pengeluaran: ${totalSpend} IDR
      - Total Pendapatan: ${totalIncome} IDR
      
      Berikan saran keuangan singkat (1-2 kalimat) dalam bahasa Indonesia untuk membantu pengguna mengatur anggarannya. 
      Sertakan langkah-langkah praktis yang bisa dilakukan dalam waktu dekat untuk menghemat lebih banyak dan mencapai stabilitas keuangan.
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent({
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: userPrompt,
            }
          ],
        }
      ],
      generationConfig: {
        maxOutputTokens: 100,
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
