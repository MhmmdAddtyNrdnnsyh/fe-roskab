import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left column - Image */}
          <div className="md:w-1/2 relative">
            {/* Placeholder image with gradient background */}
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl overflow-hidden aspect-[4/3] shadow-xl relative">
              <img 
                src="/fotbar.jpg" 
                alt="Komunitas kami" 
                className="w-full h-full object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-500 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 rounded-full opacity-20"></div>
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="md:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">📖</div>
              <h2 className="text-3xl md:text-4xl font-bold font-nunito text-gray-800">
                Tentang Kami
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Kami adalah organisasi anak muda yang aktif dalam kegiatan keagamaan, sosial, dan pengembangan diri.
              Bersama-sama, kami tumbuh dalam iman dan berkontribusi positif untuk lingkungan sekitar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 