import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if a route is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`text-2xl font-bold font-nunito ${isScrolled ? 'text-green-600' : 'text-white'}`}>
              ROHIS
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${isActive('/') 
                ? (isScrolled ? 'text-green-600' : 'text-white font-semibold') 
                : (isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white/80 hover:text-white')}`}
            >
              Beranda
            </Link>
            <Link 
              to="/tentang" 
              className={`font-medium transition-colors ${isActive('/tentang') 
                ? (isScrolled ? 'text-green-600' : 'text-white font-semibold') 
                : (isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white/80 hover:text-white')}`}
            >
              Tentang Kami
            </Link>
            <Link 
              to="/galeri" 
              className={`font-medium transition-colors ${isActive('/galeri') 
                ? (isScrolled ? 'text-green-600' : 'text-white font-semibold') 
                : (isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white/80 hover:text-white')}`}
            >
              Galeri
            </Link>
            <Link 
              to="/struktur" 
              className={`font-medium transition-colors ${isActive('/struktur') 
                ? (isScrolled ? 'text-green-600' : 'text-white font-semibold') 
                : (isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white/80 hover:text-white')}`}
            >
              Struktur Organisasi
            </Link>
            <Link 
              to="/event" 
              className={`font-medium transition-colors ${isActive('/event') 
                ? (isScrolled ? 'text-green-600' : 'text-white font-semibold') 
                : (isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white/80 hover:text-white')}`}
            >
              Event
            </Link>
            <Link 
              to="/kontak" 
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                isScrolled 
                  ? 'bg-green-500 text-white hover:bg-green-600' 
                  : 'bg-white text-green-600 hover:bg-green-50'
              }`}
            >
              Kontak
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden flex items-center"
            aria-label="Toggle menu"
          >
            <svg 
              className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col py-2">
              <Link 
                to="/" 
                className={`px-4 py-3 font-medium ${isActive('/') ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                to="/tentang" 
                className={`px-4 py-3 font-medium ${isActive('/tentang') ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link 
                to="/galeri" 
                className={`px-4 py-3 font-medium ${isActive('/galeri') ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Galeri
              </Link>
              <Link 
                to="/struktur" 
                className={`px-4 py-3 font-medium ${isActive('/struktur') ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Struktur Organisasi
              </Link>
              <Link 
                to="/event" 
                className={`px-4 py-3 font-medium ${isActive('/event') ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Event
              </Link>
              <Link 
                to="/kontak" 
                className="mx-4 my-3 px-4 py-2 bg-green-500 text-white rounded-full font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 