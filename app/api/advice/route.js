import OpenAI from "openai";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Request body:", body);

    const { totalBudget, totalIncome, totalSpend } = body;

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

    if (!process.env.OPENAI_API_KEY) {
      console.error("❌ OPENAI_API_KEY tidak ditemukan di environment Vercel");
      return new Response(JSON.stringify({ error: "Server config error: API key missing" }), { status: 500 });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Kamu adalah asisten keuangan pribadi yang memberikan saran praktis." },
        { role: "user", content: userPrompt }
      ],
      max_tokens: 500,
      temperature: 0.5,
    });

    console.log("OpenAI response:", response);

    return new Response(JSON.stringify({
      advice: response.choices[0]?.message?.content?.trim() || "Tidak ada saran."
    }), { status: 200 });

  } catch (error) {
    console.error("❌ API error detail:", error);

    return new Response(JSON.stringify({
      error: error.message || "Gagal mengambil saran keuangan."
    }), { status: 500 });
  }
}
