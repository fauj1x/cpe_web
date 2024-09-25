"use client"; // Ini menandakan bahwa file ini adalah Client Component

import { Poppins } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { metadata } from "./metadata";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css"; // Mengimpor CSS AOS

const poppins = Poppins({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Inisialisasi AOS pada pertama kali render
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en" className={poppins.className}>
      <Head>
        <title>{metadata.title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.1/aos.css"
        />
      </Head>
      <body className="bg-gray-100 antialiased">
        {/* Header atau Navbar */}
        <div className="bg-white antialiased">
          {/* Navbar mengambang */}
          <header className="bg-white shadow-lg rounded-full fixed top-0 left-0 right-0 z-50 mx-auto my-6 max-w-5xl">
            <div className="container mx-auto flex flex-wrap p-3 md:p-4 flex-col md:flex-row items-center justify-between">
              {/* Logo */}
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <Image src="/logo.png" alt="logo" width={40} height={40} />
              </a>
              {/* Menu Button (Mobile) */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden inline-flex items-center justify-center p-2 text-gray-500 hover:text-black focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
              {/* Desktop Menu */}
              <nav className="hidden md:flex md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center font-bold">
                <a href="#" className="mr-5 hover:text-black text-gray-700">Beranda</a>
                <a href="#" className="mr-5 hover:text-black text-gray-700">Tentang</a>
                <a href="#" className="mr-5 hover:text-black text-gray-700">Tim</a>
                <a href="#" className="mr-5 hover:text-black text-gray-700">Klien Kami</a>
                <a href="#" className="mr-5 hover:text-black text-gray-700">Artikel</a>
                <a href="#" className="mr-5 hover:text-black text-gray-700">Vacancy</a>
                <a href="#" className="mr-5 hover:text-black text-gray-700">Kontak</a>
              </nav>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden bg-white shadow-lg rounded-lg p-4 mt-2 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
              <nav className="flex flex-col items-center bg-white border-t border-gray-200">
                <a href="#" className="block py-2 px-4 hover:text-black text-gray-700">Beranda</a>
                <a href="#" className="block py-2 px-4 hover:text-black text-gray-700">Tentang</a>
                <a href="#" className="block py-2 px-4 hover:text-black text-gray-700">Tim</a>
                <a href="#" className="block py-2 px-4 hover:text-black text-gray-700">Klien Kami</a>
                <a href="#" className="block py-2 px-4 hover:text-black text-gray-700">Artikel</a>
                <a href="#" className="block py-2 px-4 hover:text-black text-gray-700">Vacancy</a>
                <a href="#" className="block py-2 px-4 hover:text-black text-gray-700">Kontak</a>
              </nav>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
