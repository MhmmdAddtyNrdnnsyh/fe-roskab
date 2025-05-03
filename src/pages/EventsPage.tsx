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
      title: "Re-Organisasi",
      date: "15/22 Maret 2025",
      time: "08.00 WIB sd Selesai",
      location: "SMK Negeri 01 Adiwerna",
      description: "Bangkitkan Jiwa Islami Bersama Rohis SMA/SMK se-Kabupaten Tegal",
      image: "/fotbar.jpg"
    },
    {
      id: 2,
      title: "Pelantikan Angkatan 2025/2026",
      date: "13 April 2025",
      time: "08.00 WIB sd Selesai",
      location: "SMK Negeri 02 Adiwerna",
      description: "Pelantikan angkatan 2025/2026 SMK Negeri 02 Adiwerna.",
      image: "/fotbar.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-[40vh] py-20 bg-gradient-to-b from-green-500 to-green-600 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-nunito">Event Rohis Kab. Tegal</h1>
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

      </div>
    </div>
  );
};

export default EventsPage; 