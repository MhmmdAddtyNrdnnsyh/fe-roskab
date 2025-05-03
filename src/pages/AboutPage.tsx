import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className="min-h-[40vh] py-20 bg-gradient-to-b from-green-500 to-green-600 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-nunito">Tentang Kami</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Mengenal lebih dekat Organisasi Rohis dan kisah perjalanan kami
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 font-nunito">Sejarah Kami</h2>
            <p className="text-gray-600 mb-4">
              ROHIS (Rohani Islam) adalah organisasi yang didirikan dengan tujuan untuk memperkuat nilai-nilai keislaman di kalangan pelajar. 
              Berawal dari sebuah kelompok kecil yang dipelopori oleh beberapa siswa yang memiliki kepedulian terhadap pengembangan spiritual,
              ROHIS terus berkembang menjadi organisasi yang aktif dalam berbagai kegiatan keagamaan dan sosial.
            </p>
            <p className="text-gray-600">
              Sejak didirikan pada tahun 2010, ROHIS telah menjadi wadah bagi siswa-siswi Muslim untuk mengembangkan potensi, 
              mengasah kepemimpinan, dan membangun karakter berdasarkan nilai-nilai islami.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 font-nunito">Visi & Misi</h2>
            <div className="bg-green-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-3 text-green-700">Visi</h3>
              <p className="text-gray-700">
                Menjadi organisasi yang mampu menginspirasi dan membentuk generasi yang berakhlak mulia, 
                mandiri, dan berprestasi berdasarkan nilai-nilai keislaman.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Misi</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">1</div>
                  <p>Mengembangkan pemahaman dan pengamalan nilai-nilai Islam dalam kehidupan sehari-hari</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">2</div>
                  <p>Membangun karakter kepemimpinan dan keterampilan organisasi yang berlandaskan ajaran Islam</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">3</div>
                  <p>Menyelenggarakan kegiatan-kegiatan yang menumbuhkan kreativitas dan kepedulian sosial</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">4</div>
                  <p>Menjalin kerjasama dengan berbagai pihak untuk mengembangkan dakwah Islam di lingkungan pendidikan</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-800 font-nunito">Nilai-Nilai Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl mx-auto mb-4">
                  ✨
                </div>
                <h3 className="text-xl font-bold mb-3 font-nunito text-gray-800">Integritas</h3>
                <p className="text-gray-600">
                  Menjunjung tinggi kejujuran dan konsistensi dalam perkataan dan perbuatan
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl mx-auto mb-4">
                  🤝
                </div>
                <h3 className="text-xl font-bold mb-3 font-nunito text-gray-800">Persaudaraan</h3>
                <p className="text-gray-600">
                  Membangun hubungan yang harmonis dan saling mendukung dalam kebaikan
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl mx-auto mb-4">
                  🚀
                </div>
                <h3 className="text-xl font-bold mb-3 font-nunito text-gray-800">Inovasi</h3>
                <p className="text-gray-600">
                  Selalu berusaha mengembangkan kreativitas dalam menjalankan kegiatan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 