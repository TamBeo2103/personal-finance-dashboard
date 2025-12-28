import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Finance Risk Dashboard",
  description: "Analyze risk and project returns for various asset classes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <Navbar />
        <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
