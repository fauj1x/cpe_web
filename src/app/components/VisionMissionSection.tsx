import React from 'react';
import Image from 'next/image';

export default function VisionMissionSection({id}) {
  return (
    <div id={id} className="mt-16 p-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex">
        <h2 className="text-2xl font-bold mb-4 text-black">Our</h2>
        <h2 className="text-2xl font-bold mb-4 text-green-600 ml-1">Vision & Mission</h2>
      </div>

      <div className="text-black flex flex-col md:flex-row md:items-center mt-4">
        <p className="text-lg md:mr-[25px] mb-4" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          Menjadi konsultan lingkungan yang terus berinovasi terhadap segala kemajuan teknologi rekayasa teknik lingkungan.
        </p>
        <Image
          src="/logo_mission.png"
          alt="mission"
          className="w-[150px] h-[90px] mb-4 md:mb-0"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
          width={150}
          height={90}
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center">
        <Image
          src="/logo_vision.png"
          alt="vision"
          className="w-[150px] h-[90px] mt-[65px] mb-4 md:mb-0 md:mr-[25px]"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="300"
          width={150}
          height={90}
        />
        <p className="text-black text-lg mt-[50px]" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="400">
          Memberikan rasa kepercayaan dan kepuasan dalam setiap hasil pekerjaan terhadap setiap klien.
        </p>
      </div>
    </div>
  );
}
