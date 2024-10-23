// Import the Gemini API SDK
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini client with the correct API key from the environment variable
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

// Function to generate personalized financial advice using Gemini API
const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);
  try {
    // Check if the API key is properly loaded
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      throw new Error("API key is missing");
    }

    // Define the prompt for generating financial advice
    const userPrompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} IDR
      - Expenses: ${totalSpend} IDR
      - Incomes: ${totalIncome} IDR
      Provide concise financial advice in 1-2 sentences to help the user manage their finances.
    `;

    // Generate content from the prompt using the Gemini API
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
        maxOutputTokens: 100, // Adjust token limit
        temperature: 0.5, // Control randomness/creativity
      },
    });

    // Extract the first generated response, ensuring only one advice is returned
    const advice = result.response.text().trim(); // Extracting a single output
    console.log(advice);
    return advice;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;
