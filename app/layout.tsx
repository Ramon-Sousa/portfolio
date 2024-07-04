import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Cursor from "./(home)/components/Cursor";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Ramon Sousa - Product Designer",
//   description: "Apaixonado por resolver problemas",
// };


export const metadata: Metadata = {
  title: {
    template: "%s | Product Designer",
    default: "Ramon Sousa",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={nunitoSans.className}>
      <Cursor/>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
