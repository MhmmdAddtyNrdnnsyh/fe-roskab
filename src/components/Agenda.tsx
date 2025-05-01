import React from 'react';

const agendaItems = [
  {
    id: 1,
    title: 'Ngaji Bareng',
    date: 'Setiap Jumat',
    description: 'Kajian rutin bersama ustadz untuk memperdalam ilmu agama',
    icon: '🕌'
  },
  {
    id: 2,
    title: 'Movie Night Religi',
    date: 'Sabtu, 20 April 2024',
    description: 'Nonton bareng film-film inspiratif islami',
    icon: '🎬'
  },
  {
    id: 3,
    title: 'Jumat Berbagi',
    date: 'Setiap Jumat',
    description: 'Berbagi keberkahan dengan sesama melalui sedekah',
    icon: '🤲'
  },
  {
    id: 4,
    title: 'Tahsin Al-Quran',
    date: 'Setiap Ahad',
    description: 'Belajar membaca Al-Quran dengan tajwid yang benar',
    icon: '📖'
  }
];

const Agenda: React.FC = () => {
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
                    <button className="text-green-600 font-medium inline-flex items-center hover:text-green-700 transition-colors">
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
          
          <div className="text-center mt-8">
            <button className="bg-white text-green-600 border-2 border-green-500 font-semibold py-3 px-8 rounded-full text-lg hover:bg-green-50 transition-colors shadow-md">
              Lihat Semua Kegiatan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda; 