import React from 'react';

interface Kegiatan {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  location: string;
  time: string;
}

const kegiatanList: Kegiatan[] = [
  {
    id: 1,
    title: "Titik Kumpul Rohis",
    description: "Bertempat di Seluruh SMA-SMK se Kabupaten Tegal yang bergabung dengan ROHIS Kabupaten Tegal",
    date: "Setiap Bulan 1 kali",
    image: "/fotbar.jpg",
    category: "Kegiatan",
    location: "SMK Negeri 1 Adiwerna",
    time: "08:00 - 12:00 WIB"
  },
  {
    id: 2,
    title: "Latihan Gabungan Rohis",
    description: "Bertempat di Seluruh SMA-SMK se Kabupaten Tegal yang bergabung dengan ROHIS Kabupaten Tegal.",
    date: "13 April 2025",
    image: "/fotbar.jpg",
    category: "Kegiatan",
    location: "SMK Negeri 1 Adiwerna",
    time: "08:00 - 12:00 WIB"
  },
  {
    id: 3,
    title: "Rapat Rutinan",
    description: "Bertempat di Seluruh SMA-SMK se Kabupaten Tegal yang bergabung dengan ROHIS Kabupaten Tegal.",
    date: "13 April 2025",
    image: "/fotbar.jpg",
    category: "Kegiatan",
    location: "SMK Negeri 1 Adiwerna",
    time: "08:00 - 12:00 WIB"
  }
];

const KegiatanPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-[40vh] py-20 bg-gradient-to-b from-green-500 to-green-600 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-nunito">Kegiatan Kami</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Berbagai kegiatan dan acara yang diselenggarakan oleh ROHIS Kabupaten Tegal
          </p>
        </div>
      </div>

      {/* Kegiatan Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {kegiatanList.map((kegiatan) => (
            <div key={kegiatan.id} className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={kegiatan.image} 
                  alt={kegiatan.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                    {kegiatan.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {kegiatan.date}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3 font-nunito">
                  {kegiatan.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {kegiatan.description}
                </p>
                
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {kegiatan.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {kegiatan.time}
                  </div>
                </div>

                <button className="w-full bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KegiatanPage; 