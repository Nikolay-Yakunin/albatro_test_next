import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/src/widgets/Header/ui";
import { Footer } from "@/src/widgets/Footer/ui";

const inter = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Сайт-визитка",
  description: "Сайт-визитка, созданный с использованием Next.js и TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full h-full box-border`}>
        <Header />
        <div className="px-[20px]">
          <main className="max-w-[1200px] mx-auto">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
