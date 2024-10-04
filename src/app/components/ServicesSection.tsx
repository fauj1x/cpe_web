import React from 'react';
import Image from 'next/image';

export default function ServicesSection({ id }) {
  return (
    <div id={id} className="mt-[250px] p-6 max-w-7xl mx-auto">
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold mb-4 text-black">Our</h2>
        <h2 className="text-2xl font-bold mb-4 text-green-600 ml-1">Services</h2>
      </div>

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
    </div>
  );
}
