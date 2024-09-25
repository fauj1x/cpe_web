import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <div
          data-aos="fade-in"
          data-aos-duration="2000"
          className="absolute inset-0 bg-no-repeat bg-center bg-cover -mt-28"
          style={{ backgroundImage: `url('/background1.png')` }}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-white font-bold text-3xl md:text-5xl mb-6 text-center">
              <div className="block mb-2 md:mb-4" data-aos="fade-down" data-aos-duration="3000">
                CIPTA
              </div>
              <div className="block" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="100">
                <span className="text-green-500">PRIMA</span> ENGINEERING
              </div>
              <p
                className="font-medium text-sm md:text-base mt-5 text-center"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="100"
              >
                “Strategic Inovation for Best Environtment”
              </p>
            </h1>

            <div className="flex space-x-4 mt-4">
              <button
                className="px-4 py-2 bg-yellow-600 text-white font-regular rounded-lg hover:bg-yellow-800 transition md:px-6 md:py-3"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="100"
              >
                TENTANG CPE
              </button>
              <button
                className="px-4 py-2 border-green-600 border-2 text-green-600 bg-transparent font-regular rounded-lg hover:bg-green-500 hover:text-green-200 transition md:px-6 md:py-3"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="100"
              >
                HUBUNGI
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="relative mt-16 p-6 max-w-7xl mx-auto fade-in">
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
                <strong>Cipta Prima Engineering</strong> atau yang biasa disingkat dengan CPE merupakan perusahaan yang
                bergerak pada bidang konsultan lingkungan hidup, dengan fokus utama pada strategi dan perencanaan ruang tata kelola lingkungan.
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

        {/* Vision & Mission Section */}
        <div className="flex mt-[250px]">
          <h2 className="text-2xl font-bold mb-4 text-black">Our</h2>
          <h2 className="text-2xl font-bold mb-4 text-green-600 ml-1">Vision & Mission</h2>
        </div>

        <div className="text-black flex flex-col md:flex-row md:items-center mt-[50px]">
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

      <Image
        src="/logomark.png"
        alt="logomark"
        className="absolute top-[1500px] right-0 w-[200px] opacity-40"
        style={{ zIndex: 0 }}
        width={200}
        height={200}
      />

      <Image
        src="/forestelement.png"
        alt="forestelement"
        className="absolute top-[2320px] left-0 w-[120px] hidden md:block"
        style={{ zIndex: 0 }}
        width={120}
        height={120}
      />

      {/* Services Section */}
      <div className="flex mt-[250px] justify-center">
        <h2 className="text-2xl font-bold mb-4 text-black">Our</h2>
        <h2 className="text-2xl font-bold mb-4 text-green-600 ml-1">Services</h2>
      </div>

      import Image from 'next/image';

<div className="flex flex-wrap justify-center mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
    {/* Services Card 1 */}
    <div className="flex flex-col items-center" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="100">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-[251px] h-[289px] flex flex-col items-center">
            <div className="flex justify-center items-center w-16 h-16 mx-auto bg-gray-100 rounded-full -mt-14">
                <Image src="/doc_icon.png" alt="Icon" width={64} height={64} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-16">
                Dokumen <span className="text-green-600">Perencanaan</span>
            </h3>
            <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition flex items-center justify-center mt-auto -mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </a>
        </div>
    </div>

    {/* Services Card 2 */}
    <div className="flex flex-col items-center" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-[251px] h-[289px] flex flex-col items-center">
            <div className="flex justify-center items-center w-16 h-16 mx-auto bg-gray-100 rounded-full -mt-14">
                <Image src="/leaf_icon.png" alt="Icon" width={64} height={64} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-16">
                Kajian <span className="text-green-600">Lingkungan</span>
            </h3>
            <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition flex items-center justify-center mt-auto -mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </a>
        </div>
    </div>

    {/* Services Card 3 */}
    <div className="flex flex-col items-center" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="300">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-[251px] h-[289px] flex flex-col items-center">
            <div className="flex justify-center items-center w-16 h-16 mx-auto bg-gray-100 rounded-full -mt-14">
                <Image src="/group_icon.png" alt="Icon" width={64} height={64} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-16">
                Pendampingan <span className="text-green-600">Operasional</span>
            </h3>
            <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition flex items-center justify-center mt-auto -mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </a>
        </div>
    </div>

    {/* Services Card 4 */}
    <div className="flex flex-col items-center" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="400">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full sm:w-[251px] h-[289px] flex flex-col items-center">
            <div className="flex justify-center items-center w-16 h-16 mx-auto bg-gray-100 rounded-full -mt-14">
                <Image src="/learn_icon.png" alt="Icon" width={64} height={64} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-16">
                <span className="text-green-600">Pelatihan</span>
            </h3>
            <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition flex items-center justify-center mt-auto -mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </a>
        </div>
    </div>
</div>

<Image src="/forestelement.png" alt="forestelement" width={120} height={120} className="absolute top-[2320px] left-0" style={{ zIndex: -1 }} />

<section className="text-black body-font">
    <div className="container mt-32 px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
            <h1 className="text-center sm:text-2xl text-2xl font-bold title-font text-black w-full mb-4">
                Our <span className="text-green-500">Experience</span>
            </h1>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                    <Image src="/cpe.jpg" alt="gallery" width={300} height={300} className="w-full object-cover h-full object-center block rounded-lg" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                    <Image src="/cpe3.jpg" alt="gallery" width={300} height={300} className="w-full object-cover h-full object-center block rounded-lg" />
                </div>
                <div className="md:p-2 p-1 w-full">
                    <Image src="/cpe2bawah.jpg" alt="gallery" width={600} height={400} className="w-full h-full object-cover object-center block rounded-lg" />
                </div>
            </div>
            <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                    <Image src="/cpe4.jpg" alt="gallery" width={600} height={400} className="w-full h-full object-cover object-center block rounded-lg" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                    <Image src="/cpe5.jpg" alt="gallery" width={300} height={300} className="w-full object-cover h-full object-center block rounded-lg" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                    <Image src="/cpe6.jpg" alt="gallery" width={300} height={300} className="w-full object-cover h-full object-center block rounded-lg" />
                </div>
            </div>
        </div>
    </div>
</section>

    </div>
  );
}
