import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";

// Gunakan font Poppins untuk seluruh halaman dengan bobot 400, 700, dan 900
const poppins = Poppins({
  weight: ['400', '700', '900'], // Tambahkan bobot yang diinginkan
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "CV Cipta Prima Engginering",
  description: "CV Cipta Prima Engginering",
  icons: {
    icon: "\logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-gray-100 antialiased">
        {/* Header atau Navbar */}
        <header className="bg-white shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="\logo.png" alt="logo" className="w-13 h-10" />
          
        
        </a>

    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold b">
      <a href="#" className="mr-5 hover:text-black text-gray-700">Beranda</a>
      <a href="#" className="mr-5 hover:text-black text-gray-700">Tentang</a>
      <a href="#" className="mr-5 hover:text-black text-gray-700">Tim</a>
      <a href="#" className="mr-5 hover:text-black text-gray-700">Klien Kami</a>
      <a href="#" className="mr-5 hover:text-black text-gray-700">Artikel</a>
      <a href="#" className="mr-5 hover:text-black text-gray-700">Vacancy</a>
      <a href="#" className="mr-5 hover:text-black text-gray-700">Kontak</a>
      
    </nav>
    
  </div>
        </header>

        {/* Konten Halaman */}
        {children}
      </body>
    </html>
  );
}
