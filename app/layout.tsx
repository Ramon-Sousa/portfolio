import type { Metadata } from "next";
import { Nunito_Sans, Raleway } from "next/font/google";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "./_context/LanguageContext";

const raleway = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ramon Sousa | Product Designer @Suflex",
  description: "Precisa impulsionar seu projeto em 2025? Como Product Designer, crio soluções digitais eficientes, alinhadas a objetivos de negócio, com foco em dados, pesquisa e design centrado no usuário.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={raleway.className}>
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div vaul-drawer-wrapper="" className="min-h-[100vh]">
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
