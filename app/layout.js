import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import ConsoleArt from "./_components/ConsoleArt";
import ChatWidget from "./_components/ChatWidget";


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
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-J377X8F670"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-J377X8F670');
              `,
            }}
          />
        </head>

        <body className={outfit.className}>
          <ConsoleArt />
          <Toaster />
          {children}
          <Analytics />
          <ChatWidget />
        </body>
      </html>
    </ClerkProvider>
  );
}
