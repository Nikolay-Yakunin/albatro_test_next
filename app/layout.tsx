import type { Metadata } from "next";
import { Archivo } from 'next/font/google';
import "./globals.css";
import { Logo } from "@/src/shared/ui";
import Link from "next/link";

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
      <body
        className={`${inter.className} px-[20px] pt-[20px] md:px-[50px] md:pt-[100px] lg:px-[100px] lg:pt-[100px]`}
      >
        <header className="flex justify-between items-center mb-8">
          <Logo size="sm" color="default" />
          <nav>
            <ul className="flex gap-10">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/info">Info</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Link href="/auth/login" className="text-[#FAB91F] hover:underline">
            Log in
          </Link>
        </header>
        <main>{children}</main>
        <footer className="mt-10 text-center py-4 border-t">
          <p>&copy; {new Date().getFullYear()} My Website. Nikolay Yakunin.
            All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}