import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const navigate = useNavigate();

  const handlePlayVideo = () => {
    setShowVideoPopup(true);
    // Play video after popup is shown
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-500 to-green-600 overflow-hidden w-full">
      {/* Curved overlay */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,133.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-nunito">
            Selamat Datang.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-90">
          Selamat datang di situs web resmi ROHIS SMA/SMK se-Kabupaten Tegal, tempat di mana kita dapat bersama-sama memperdalam iman, dan memperkuat ukhuwah Islamiyah di Kabupaten Tegal.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => navigate('/tentang')}
              className="bg-white text-green-600 font-semibold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Jelajahi Organisasi Kami
            </button>
            <button 
              onClick={handlePlayVideo}
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-white/10 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 5v10l8-5-8-5z"></path>
              </svg>
              Watch our video
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements similar to the reference design */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white opacity-10 rounded-full"></div>
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-white opacity-10 rounded-full"></div>
      
      {/* Video popup */}
      {showVideoPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-black rounded-lg p-4 max-w-3xl w-full">
            <div className="flex justify-end mb-2">
              <button 
                onClick={() => setShowVideoPopup(false)}
                className="text-white hover:text-gray-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <video 
              ref={videoRef}
              src="/contoh-vid.mp4" 
              controls 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero; 