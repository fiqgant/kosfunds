import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Kosfunds",
  description: "Uang Terkelola, Hidup Terarah.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <head>
          <script
            src="https://cdn.jsdelivr.net/npm/tesseract.js@4.0.2/dist/tesseract.min.js"
            defer
          ></script>
        </head>
        <body className={outfit.className}>
          <Toaster />
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
