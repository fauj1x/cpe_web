"use client"; // Ini menandakan bahwa file ini adalah Client Component

import { Poppins } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
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
        <title>CV Cipta Prima Engineering</title>
        <meta name="description" content="CV Cipta Prima Engineering - Solusi Terbaik untuk Perencanaan dan Operasional Anda" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.1/aos.css"
        />
      </Head>
      <body className="bg-gray-100 mx-auto justify-center antialiased font-family-poppins">
        {/* Header atau Navbar */}
        <div className="bg-white antialiased">
          {/* Navbar mengambang */}
          <header className="fixed top-0 left-0 right-0 z-50 mx-auto my-6">
            {/* Header atau Navbar */}
            <nav className="bg-gray-100 rounded-[35px] w-2/5 mx-auto"> {/* Mengubah lebar navbar menjadi 75% dari lebar layar */}
              <div className="mx-auto max-w-7xl px-2 sm:px-2 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <button 
                      type="button" 
                      className="relative inline-flex items-center justify-center rounded-md p-2 bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500" 
                      aria-controls="mobile-menu" 
                      aria-expanded={isMobileMenuOpen}
                      onClick={toggleMobileMenu}
                    >
                      <span className="absolute -inset-0.5"></span>
                      <span className="sr-only">Open main menu</span>
                      {/* Icon when menu is closed */}
                      <svg className={isMobileMenuOpen ? "hidden" : "block h-6 w-6"} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" className="text-black" />
                      </svg>
                      {/* Icon when menu is open */}
                      <svg className={isMobileMenuOpen ? "block h-6 w-6" : "hidden"} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" className="text-black" />
                      </svg>
                    </button>

                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch">
                    <div className="flex flex-shrink-0 items-center">
                      <img className="h-8 w-auto" src="./logo.png" alt="Your Company" />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 justify-center">
                        <a href="#" className="rounded-md px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-300 hover:text-black">Beranda</a>
                        <a href="#" className="rounded-md px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-300 hover:text-black">Tentang</a>
                        <a href="#" className="rounded-md px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-300 hover:text-black">Klien</a>
                        <a href="#" className="rounded-md px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-300 hover:text-black">Artikel</a>
                        <a href="#" className="rounded-md px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-300 hover:text-black">Kontak</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile menu */}
              <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  <a href="#" className="block rounded-md px-3 py-2 text-base font-bold text-gray-900 hover:bg-gray-300 hover:text-black">Beranda</a>
                  <a href="#" className="block rounded-md px-3 py-2 text-base font-bold text-gray-900 hover:bg-gray-300 hover:text-black">Tentang</a>
                  <a href="#" className="block rounded-md px-3 py-2 text-base font-bold text-gray-900 hover:bg-gray-300 hover:text-black">Klien</a>
                  <a href="#" className="block rounded-md px-3 py-2 text-base font-bold text-gray-900 hover:bg-gray-300 hover:text-black">Artikel</a>
                  <a href="#" className="block rounded-md px-3 py-2 text-base font-bold text-gray-900 hover:bg-gray-300 hover:text-black">Kontak</a>
                </div>
              </div>
            </nav>
          </header>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
