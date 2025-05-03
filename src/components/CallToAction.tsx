import React from 'react';

const CallToAction: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number
    window.open('https://wa.me/your-number-here', '_blank');
  };

  return (
    <section className="py-20 bg-green-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-nunito">
              Mau Gabung Bersama Kami?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Yuk, jadi bagian dari organisasi yang menginspirasi! Klik tombol di samping untuk bergabung dengan kami melalui WhatsApp.
            </p>
            
            <div className="flex space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span>Diskusi Keagamaan</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span>Aksi Sosial</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span>Pengembangan Diri</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span>Silaturahmi</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  📱
                </div>
                <h3 className="text-xl font-bold mb-3 font-nunito text-gray-800">Hubungi Kami</h3>
                <p className="text-gray-600 mb-6">Silakan klik tombol di bawah untuk menghubungi kami melalui WhatsApp</p>
                
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 text-white font-semibold py-3 px-6 rounded-xl text-lg hover:bg-green-600 transition-colors shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>WhatsApp</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </button>
                
                <p className="mt-4 text-sm text-gray-500">Atau email kami di: Forumrohis.kabtegal@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 