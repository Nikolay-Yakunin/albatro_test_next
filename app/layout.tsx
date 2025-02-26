import type { Metadata } from "next";
import { Archivo } from 'next/font/google';
import "./globals.css";

const inter = Archivo({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Сайт-визитка',
  description: 'Сайт-визитка, созданный с использованием Next.js и TypeScript',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          
        </header>
        <main>{children}</main>
        <footer>
        </footer>
      </body>
    </html>
  );
}
