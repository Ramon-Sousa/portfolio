import type { Metadata } from "next";
import { Nunito_Sans, Raleway } from "next/font/google";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const raleway = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ramon Sousa - Product Designer",
  description: "Apaixonado por resolver problemas",
};

// export const metadata: Metadata = {
//   title: {
//     template: "%s | Product Designer",
//     default: "Ramon Sousa",
//   }
// };

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
          <div vaul-drawer-wrapper="" className="min-h-[100vh]">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
