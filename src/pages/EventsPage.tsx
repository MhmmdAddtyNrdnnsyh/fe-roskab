import React from 'react';
import { Link } from 'react-router-dom';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const EventsPage: React.FC = () => {
  // Mock data for upcoming events
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "Kajian Akbar Ramadhan",
      date: "15 Maret 2023",
      time: "19:30 - 21:00 WIB",
      location: "Masjid Agung Al-Hikmah",
      description: "Kajian akbar dengan tema 'Meraih Keberkahan di Bulan Suci Ramadhan' bersama Ustadz Dr. Abdul Somad, Lc., MA.",
      image: "/contoh-bg.jpg"
    },
    {
      id: 2,
      title: "Buka Puasa Bersama",
      date: "18 Maret 2023",
      time: "17:30 - 19:00 WIB",
      location: "Alun-alun Kota Tegal",
      description: "Buka puasa bersama dan santunan anak yatim. Terbuka untuk umum dan akan ada distribusi takjil gratis.",
      image: "/contoh-bg.jpg"
    },
    {
      id: 3,
      title: "Seminar Pendidikan Islam",
      date: "25 Maret 2023",
      time: "09:00 - 12:00 WIB",
      location: "Gedung Islamic Center",
      description: "Seminar tentang pendidikan islam di era digital dengan pembicara Ustadz Adi Hidayat, Lc., MA.",
      image: "/contoh-bg.jpg"
    },
    {
      id: 4,
      title: "Pelatihan Da'i Muda",
      date: "1-2 April 2023",
      time: "08:00 - 16:00 WIB",
      location: "Pondok Pesantren Al-Hikmah",
      description: "Workshop dan pelatihan untuk pembentukan da'i muda yang tangguh dan berkompeten di bidang dakwah.",
      image: "/contoh-bg.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-[40vh] py-20 bg-gradient-to-b from-green-500 to-green-600 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-nunito">Event Terdekat</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Jadilah bagian dari kegiatan-kegiatan inspiratif yang kami selenggarakan untuk membangun ukhuwah dan meningkatkan keimanan
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <Link to={`/event/${event.id}`}>
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" 
                  />
                </Link>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                    {event.date}
                  </div>
                  <div className="mx-2 text-gray-400">•</div>
                  <div className="text-gray-600 text-sm">
                    {event.time}
                  </div>
                </div>
                <Link to={`/event/${event.id}`} className="hover:text-green-600">
                  <h3 className="font-bold text-xl mb-2 text-gray-800">{event.title}</h3>
                </Link>
                <div className="flex items-center mb-3 text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {event.description}
                </p>
                <Link 
                  to={`/event/${event.id}`}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors w-full block text-center"
                >
                  Detail Event
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Button */}
        <div className="mt-12 text-center">
          <button className="bg-white border border-green-500 text-green-500 hover:bg-green-50 font-medium px-6 py-3 rounded-lg inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Lihat Semua Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsPage; 