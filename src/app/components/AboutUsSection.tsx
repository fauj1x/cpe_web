import React from 'react';
import Image from 'next/image';

export default function AboutUsSection({ id: any }) {
  return (
    <div id={id} className="relative mt-48 p-6 max-w-7xl mx-auto fade-in">
      <div className="flex">
        <h2 className="text-2xl font-bold mb-4 text-black">ABOUT</h2>
        <h2 className="text-2xl font-bold mb-4 text-green-600 ml-1">US</h2>
      </div>

      <section className="text-black body-font">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-8 py-10">
          <div className="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900" data-aos="fade-right" data-aos-duration="1000">
              CV.Cipta Prima Engineering
            </h1>
            <p className="mb-8 leading-relaxed" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
              <strong>Cipta Prima Engineering</strong> adalah perusahaan konsultan lingkungan hidup, fokus pada strategi
              dan perencanaan tata kelola lingkungan.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg md:w-1/3 lg:w-full flex justify-center ml-4">
            <Image
              className="object-cover object-center rounded w-full h-auto"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-delay="100"
              src="/logogreen.jpg"
              alt="hero"
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
