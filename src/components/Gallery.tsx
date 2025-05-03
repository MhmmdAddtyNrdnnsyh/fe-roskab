import React from 'react';

const galleryItems = [
  {
    id: 1,
    image: '/fotbar.jpg', // Placeholder image path
    title: 'Kajian Rutin'
  },
  {
    id: 2,
    image: '/fotbar.jpg', // Placeholder image path
    title: 'Aksi Sosial'
  },
  {
    id: 3,
    image: '/fotbar.jpg', // Placeholder image path
    title: 'Belajar Al-Quran'
  }
];

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full mb-4 font-medium">
            Galeri Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-nunito text-gray-800">
            Galeri Kegiatan
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Dokumentasi dari kegiatan kami dalam menjalankan program-program keagamaan dan sosial
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl group"
            >
              <div className="aspect-[4/3] bg-green-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
              
              {/* Overlay icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-green-500 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-green-600 transition-colors shadow-lg inline-flex items-center gap-2">
            <span>Lihat Semua Foto</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 