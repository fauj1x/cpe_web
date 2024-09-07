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

      </div>
      
    </div>
  );
}
