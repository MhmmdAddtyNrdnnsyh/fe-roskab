import React, { useRef } from 'react';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  author: string;
}

const latestNews: NewsArticle[] = [
  {
    id: 1,
    title: "Pelantikan Pengurus ROHIS Kabupaten Tegal Periode 2025-2026",
    excerpt: "Bertempat di SMK Negeri 1 Adiwerna, telah dilaksanakan pelantikan pengurus ROHIS Kabupaten Tegal periode 2025-2026 yang dihadiri oleh seluruh anggota dan pembina.",
    date: "13 April 2025",
    image: "/fotbar.jpg",
    category: "Kegiatan",
    author: "Tim Media ROHIS"
  },
  {
    id: 2,
    title: "Kajian Rutin Bersama Ustadz Adi Hidayat",
    excerpt: "ROHIS Kabupaten Tegal mengadakan kajian rutin dengan tema 'Membangun Generasi Qurani di Era Digital' bersama Ustadz Adi Hidayat, Lc., MA.",
    date: "20 Maret 2025",
    image: "/fotbar.jpg",
    category: "Kajian",
    author: "Tim Media ROHIS"
  },
  {
    id: 3,
    title: "Buka Puasa Bersama dan Santunan Anak Yatim",
    excerpt: "ROHIS Kabupaten Tegal mengadakan acara buka puasa bersama dan santunan anak yatim di Masjid Agung Kabupaten Tegal.",
    date: "18 Maret 2025",
    image: "/fotbar.jpg",
    category: "Kegiatan",
    author: "Tim Media ROHIS"
  },
  {
    id: 4,
    title: "Workshop Kaligrafi Islam",
    excerpt: "ROHIS Kabupaten Tegal menyelenggarakan workshop kaligrafi Islam untuk meningkatkan kreativitas dan kecintaan terhadap seni Islam.",
    date: "15 Maret 2025",
    image: "/fotbar.jpg",
    category: "Workshop",
    author: "Tim Media ROHIS"
  },
  {
    id: 5,
    title: "Silaturahmi dengan ROHIS Sekabupaten",
    excerpt: "Acara silaturahmi antar ROHIS se-Kabupaten Tegal untuk mempererat ukhuwah Islamiyah.",
    date: "10 Maret 2025",
    image: "/fotbar.jpg",
    category: "Kegiatan",
    author: "Tim Media ROHIS"
  }
];

const LatestNews: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust this value based on your card width
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full mb-4 font-medium">
            Berita Terkini
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-nunito text-gray-800">
            Berita Terbaru
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Informasi terbaru seputar kegiatan dan perkembangan ROHIS Kabupaten Tegal
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-green-500 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-green-500 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {latestNews.map((article) => (
              <div 
                key={article.id} 
                className="flex-none w-[350px] snap-start bg-white rounded-xl overflow-hidden shadow-md transform transition-transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {article.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-nunito line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-medium">
                        {article.author.charAt(0)}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{article.author}</span>
                    </div>
                    
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center">
                      Baca Selengkapnya
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

export default LatestNews; 