"use client";
import React, { useEffect } from "react";

// Mouse tracking functions
export const mouseMove = (e) => {
  Object.assign(document.documentElement, {
    style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
      --move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
    `,
  });
};

export const mouseLeave = () => {
  Object.assign(document.documentElement, {
    style: `
      --move-x: 0deg;
      --move-y: 0deg;
    `,
  });
};

export default function HeroSection() {
  useEffect(() => {
    // Tambahkan event listener saat komponen dimount
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseleave", mouseLeave);

    // Bersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <div className="max-w-[1611px] mx-auto max-h-screen h-screen min-h-[500px] transform-3d rotate-x-[var(--move-y)] rotate-y-[var(--move-x)] will-change-transform transition-transform ease-[var(--transition-timing-function)] duration-[var(--transition-duration)] flex items-center justify-center">
      {/* Layer 1 */}
      <div
        className="layer-bg bg-layer-1 -translate-z-[55px] scale-[1.06]"
        style={{
          backgroundImage: `url('/layer-1.png')`,
          zIndex: 1,
        }}
      />

      {/* Layer 2 - Layer diperbesar */}
      <div
        className="layer-bg bg-layer-2 translate-z-20 scale-[1.06]" // Skala diperbesar menjadi 1.2
        style={{
          backgroundImage: `url('/layer-2.png')`,
          zIndex: 2,
        }}
      />

      {/* Layer 3 */}
      <div
        className="layer-bg bg-layer-3 translate-z-[40px] scale-[.88]"
        style={{
          backgroundImage: `url('/layer-3.png')`,
          zIndex: 3,
        }}
      />

      {/* Layer 4 */}
      <div
        className="layer-bg bg-layer-4 translate-z-[60px] scale-[.88]"
        style={{
          backgroundImage: `url('/layer-4.png')`,
          zIndex: 4,
        }}
      />

      {/* Layer Content */}
      <div className="layer-content translate-z-[180px] scale-[.8] flex flex-col justify-center items-center h-full z-10 text-center ml-20">
        <h1 className="hero-text text-white font-bold text-3xl md:text-5xl mb-6">
          <div className="block mb-2 md:mb-4" data-aos="fade-down" data-aos-duration="3000">
            CIPTA
          </div>
          <div className="block" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="100">
            <span className="text-green-800">PRIMA</span> ENGINEERING
          </div>
          <p className="font-medium text-sm md:text-base mt-5 text-shadow" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="100">
            “Strategic Innovation for Best Environment”
          </p>
        </h1>

        <div className="flex space-x-4 mt-4">
          <button className="btn px-4 py-2 bg-yellow-600 text-white font-regular rounded-lg hover:bg-yellow-800 transition md:px-6 md:py-3" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="100">
            TENTANG CPE
          </button>
          <button className="btn px-4 py-2 border-green-600 border-2 text-green-600 bg-transparent font-regular rounded-lg hover:bg-green-500 hover:text-green-200 transition md:px-6 md:py-3" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="100">
            HUBUNGI
          </button>
        </div>
      </div>
    </div>
  );
}
