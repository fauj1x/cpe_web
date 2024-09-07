import Image from 'next/image';

export default function Page() {
  return (
    <div className="bg-gray-100">
      <div className="relative grid h-64 md:h-150 lg:h-[550px] mx-[15px]">
        
        <Image 
          src="/background1.png" 
          alt="Background Image"
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg shadow-lg" 
        />

        
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className='text-white font-bold text-4xl mb-6'>CIPTA PRIMA ENGINEERING</h1>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-yellow-600 text-white font-regular rounded-lg hover:bg-yellow-800 transition">
              TENTANG CPE
            </button>
            <button className="px-6 py-3 border-white border-2 text-white bg-transparent font-regular rounded-lg hover:bg-white hover:text-yellow-400 transition">
              HUBUNGI
            </button>
          </div>
        </div>
      </div>

      <div className=" mt-12 p-6 max-w-4xl mx-auto">
        <div className='flex'>
          <h2 className="text-2xl font-bold mb-4 text-black">ABOUT</h2>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 ml-1">US</h2>
        </div>
        <div className='flex'>
        <p className="text-lg text-black">
        Cipta  Prima  Engineering  atau yang  biasa disingkat dengan CPE merupakan  perusahaan yang bergerak  pada bidang konsultan lingkungan  hidup, dengan fokus utama pada strategi dan perencanaan ruang tata  kelola lingkungan. 
 
Dalam  hal  ini, kami  menawarkan beberapa jasa  mulai dari perencanaan, kajian,  pendampingan operasional, hingga jasa pelatihan.
        </p>
       
        <img src="\helmet.png" alt="helmet" className='w-[350px] h-[236px] ml-5' />
        </div>
        <button className="px-6 py-3 bg-yellow-400 text-white font-regular rounded-lg hover:bg-yellow-800 transition mt-4">
              LEARN MORE
        </button>

        <div className='flex mt-[250px]'>
          <h2 className="text-2xl font-bold mb-4 text-black">Our</h2>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 ml-1">Vision & Mission</h2>
        </div>
          
        <div className='text-black flex mt-[50px]'>
          <p className='text-lg mr-[150px]'>
            Menjadi konsultan lingkungan yang terus berinovasi
            terhadap segala kemajuan teknologi rekayasa
            teknik lingkungan
          </p>
          <img src="\logo_mission.png" alt="mission" className='w-[150px] h-[90px] mr-[25px]'/>
        </div>

        <div className='flex'>
          <img src="\logo_vision.png" alt="mission" className='w-[150px] h-[90px] mt-[80px]' />
          <p className='text-black text-lg ml-[150px] mt-[50px]'>
          Memberikan rasa kepercayaan dan kepuasan
          dalam setiap hasil pekerjaan terhadap setiap klien.
          Bekerja keras, efektif, dan menghasilkan hasil
          terbaik dalam setiap kepercayaan yang telah diberikan
          Menjunjung tinggi profesionalitas, integritas,
          dan etika profesi
          </p>

        </div>

        <div className='flex mt-[250px] justify-center'>
          <h2 className="text-2xl font-bold mb-4 text-black">Our</h2>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 ml-1">Services</h2>
        </div>
        
       

        

      </div>
      <div className="flex flex-wrap justify-center space-x-4 mt-10">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center w-[251px] h-[289px]">
          <div className="flex justify-center items-center w-16 h-16 mx-auto bg-gray-100 rounded-full -mt-14">
            <img src="/doc_icon.png" alt="Icon" className="w-16 h-16" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-16">
            Dokumen <span className="text-purple-600">Perencanaan</span>
          </h3>
          <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="text-gray-600 hover:text-purple-600 transition">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </a>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center w-[251px] h-[289px]">
          <div className="flex justify-center items-center w-16 h-16 mx-auto bg-gray-100 rounded-full -mt-14">
            <img src="/leaf_icon.png" alt="Icon" className="w-16 h-16" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-16">
            Kajian <span className="text-purple-600">Lingkungan</span>
          </h3>
          <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="text-gray-600 hover:text-purple-600 transition">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </a>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center w-[251px] h-[289px]">
          <div className="flex justify-center items-center w-16 h-16 mx-auto bg-gray-100 rounded-full -mt-14">
            <img src="/group_icon.png" alt="Icon" className="w-16 h-16" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-16">
            Pendampingan <span className="text-purple-600">Oprasional</span>
          </h3>
          <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="text-gray-600 hover:text-purple-600 transition">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </a>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center w-[251px] h-[289px]">
          <div className="flex justify-center items-center w-16 h-16 mx-auto bg-gray-100 rounded-full -mt-14">
            <img src="/learn_icon.png" alt="Icon" className="w-16 h-16" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-16">
            <span className="text-purple-600">Pelatihan</span>
          </h3>
          <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="text-gray-600 hover:text-purple-600 transition">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </a>
        </div>

      </div>

    </div>
  );
}
