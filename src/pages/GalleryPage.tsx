import React, { useState } from 'react';

// Dummy gallery data - replace with actual data later
const galleryData = [
  {
    id: 1,
    image: '/contoh-bg.jpg',
    title: 'Rapat Rutinan',
    category: 'kajian',
    date: '15 Maret 2023'
  },
  {
    id: 2,
    image: '/contoh-bg.jpg',
    title: 'Titik Kumpul Rohis',
    category: 'perayaan',
    date: '10 Oktober 2023'
  },
  {
    id: 3,
    image: '/contoh-bg.jpg',
    title: 'Aksi Sosial Peduli Banjir',
    category: 'sosial',
    date: '5 Januari 2023'
  },
  {
    id: 4,
    image: '/contoh-bg.jpg',
    title: 'Buka Puasa Bersama',
    category: 'ramadhan',
    date: '3 April 2023'
  },
  {
    id: 5,
    image: '/contoh-bg.jpg',
    title: 'Lomba Kaligrafi',
    category: 'lomba',
    date: '20 Mei 2023'
  },
  {
    id: 6,
    image: '/contoh-bg.jpg',
    title: 'Tahsin Al-Quran',
    category: 'kajian',
    date: '12 Februari 2023'
  },
  {
    id: 7,
    image: '/contoh-bg.jpg',
    title: 'Bakti Sosial',
    category: 'sosial',
    date: '8 Agustus 2023'
  },
  {
    id: 8,
    image: '/contoh-bg.jpg',
    title: 'Pembagian Sembako',
    category: 'sosial',
    date: '25 Desember 2023'
  },
  {
    id: 9,
    image: '/contoh-bg.jpg',
    title: 'Seminar Keislaman',
    category: 'kajian',
    date: '30 September 2023'
  }
];

const categories = [
  { id: 'all', name: 'Semua' },
  { id: 'kajian', name: 'Kajian' },
  { id: 'sosial', name: 'Aksi Sosial' },
  { id: 'perayaan', name: 'Perayaan' },
  { id: 'ramadhan', name: 'Ramadhan' },
  { id: 'lomba', name: 'Lomba' }
];

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<null | {
    id: number;
    image: string;
    title: string;
    category: string;
    date: string;
  }>(null);

  const filteredGallery = selectedCategory === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === selectedCategory);

  const openLightbox = (image: typeof selectedImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <div>
      <div className="min-h-[40vh] py-20 bg-gradient-to-b from-green-500 to-green-600 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-nunito">Galeri Kegiatan</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Kumpulan dokumentasi kegiatan dan momen berharga ROHIS
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredGallery.map(item => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl group cursor-pointer"
              onClick={() => openLightbox(item)}
            >
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-bold transform group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredGallery.length === 0 && (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">📷</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Belum ada foto di kategori ini</h3>
            <p className="text-gray-600">Silakan pilih kategori lain atau kembali ke Semua</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button 
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage; 