import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GB55",
  description: "Bilderjagd zu GB55",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <footer className="fixed bottom-0 left-0 w-full bg-black text-white py-4">
            <nav className="flex justify-around">
              <Link href="/" className="text-white hover:text-gray-300">Home</Link>
              <Link href="/" className="text-white hover:text-gray-300"> </Link>
              <Link href="/about" className="text-white hover:text-gray-300">About</Link>
            </nav>
          </footer>
        </div>
      
      </body>
    </html>
  );
}
