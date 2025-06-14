import React from 'react';
import { useNavigate } from 'react-router-dom';

const agendaItems = [
  {
    id: 1,
    title: 'Titik Kumpul Rohis',
    date: 'Setiap Kamis',
    description: 'Pelantikan rohis kabupaten angkatan 2025/2026',
    icon: '🕌'
  },
  {
    id: 2,
    title: 'Latihan Gabungan',
    date: 'Setiap Jumat',
    description: 'Mengisi ekstrakurikuler rohis sma/smk kabupaten tegal',
    icon: '🎬'
  },
  {
    id: 3,
    title: 'Rapat Rutinan',
    date: 'Setiap Ahad',
    description: 'Rapat rutinan setiap yang dilaksanakan setiap ahad',
    icon: '📖'
  }
];

const Agenda: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full mb-4 font-medium">
            Kegiatan Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-nunito text-gray-800">
            Agenda Seru
          </h2>
        </div>
        
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 no-scrollbar">
            {agendaItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[300px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="h-2 bg-green-500"></div>
                <div className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-3xl mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-nunito text-gray-800 group-hover:text-green-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-green-600 font-medium mb-3 text-sm">
                    {item.date}
                  </p>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                  <div className="mt-6">
                    <button 
                      onClick={() => navigate('/kegiatan')}
                      className="text-green-600 font-medium inline-flex items-center hover:text-green-700 transition-colors"
                    >
                      <span>Selengkapnya</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Agenda; 