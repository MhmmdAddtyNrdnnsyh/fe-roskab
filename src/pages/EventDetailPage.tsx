import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  organizer?: string;
  contact?: string;
  fullDescription?: string;
}

const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll simulate loading with mock data
    setLoading(true);
    
    // Mock data - in a real app, fetch from API
    const mockEvents: Event[] = [
      {
        id: 1,
        title: "Kajian Akbar Ramadhan",
        date: "15 Maret 2023",
        time: "19:30 - 21:00 WIB",
        location: "Masjid Agung Al-Hikmah",
        description: "Kajian akbar dengan tema 'Meraih Keberkahan di Bulan Suci Ramadhan' bersama Ustadz Dr. Abdul Somad, Lc., MA.",
        image: "/contoh-bg.jpg",
        organizer: "Pengurus ROHIS Kab. Tegal",
        contact: "+62 812-3456-7890",
        fullDescription: "Kajian akbar dengan tema 'Meraih Keberkahan di Bulan Suci Ramadhan' bersama Ustadz Dr. Abdul Somad, Lc., MA. Acara ini diselenggarakan untuk menyambut bulan suci Ramadhan dan mempersiapkan diri secara spiritual. Kajian ini akan membahas tentang keutamaan bulan Ramadhan, cara meraih keberkahan di bulan Ramadhan, serta amalan-amalan yang dianjurkan selama bulan suci. Ustadz Dr. Abdul Somad, Lc., MA. akan berbagi ilmu dan pengalaman dengan masyarakat Tegal. Acara ini terbuka untuk umum dan akan disediakan takjil gratis. Diharapkan dengan acara ini, masyarakat lebih siap dan bersemangat dalam menyambut dan menjalani ibadah di bulan Ramadhan."
      },
      {
        id: 2,
        title: "Buka Puasa Bersama",
        date: "18 Maret 2023",
        time: "17:30 - 19:00 WIB",
        location: "Alun-alun Kota Tegal",
        description: "Buka puasa bersama dan santunan anak yatim. Terbuka untuk umum dan akan ada distribusi takjil gratis.",
        image: "/contoh-bg.jpg",
        organizer: "ROHIS Kab. Tegal bekerjasama dengan Pemkab Tegal",
        contact: "+62 813-2345-6789",
        fullDescription: "Kami mengundang seluruh masyarakat Tegal untuk hadir dalam acara Buka Puasa Bersama yang akan diselenggarakan di Alun-alun Kota Tegal. Acara ini bertujuan untuk mempererat silaturahmi antar warga dan memberikan santunan kepada anak-anak yatim di Kabupaten Tegal. Selain buka puasa bersama, kami juga akan mengadakan ceramah singkat oleh tokoh agama setempat, pembagian takjil gratis, dan sesi doa bersama. Kami juga menyiapkan ratusan paket takjil yang akan dibagikan untuk masyarakat yang hadir. Mari kita jadikan bulan Ramadhan ini sebagai momentum untuk berbagi kebahagiaan dengan saudara-saudara kita yang membutuhkan. Acara ini terbuka untuk umum dan tidak dipungut biaya."
      },
      {
        id: 3,
        title: "Seminar Pendidikan Islam",
        date: "25 Maret 2023",
        time: "09:00 - 12:00 WIB",
        location: "Gedung Islamic Center",
        description: "Seminar tentang pendidikan islam di era digital dengan pembicara Ustadz Adi Hidayat, Lc., MA.",
        image: "/contoh-bg.jpg",
        organizer: "Divisi Pendidikan ROHIS Kab. Tegal",
        contact: "+62 857-1234-5678",
        fullDescription: "Di era digital yang semakin berkembang, pendidikan Islam menghadapi tantangan dan peluang baru. Seminar ini akan membahas secara mendalam tentang bagaimana menjaga nilai-nilai Islam dalam pendidikan di tengah arus digitalisasi. Ustadz Adi Hidayat, Lc., MA. akan berbagi wawasan dan pengalaman dalam menerapkan prinsip-prinsip pendidikan Islam yang tetap relevan di era modern. Beberapa topik yang akan dibahas meliputi integrasi teknologi dalam pendidikan Islam, metode pendidikan yang efektif untuk generasi digital, tantangan media sosial bagi pelajar muslim, serta peran orang tua dan pendidik dalam membimbing generasi muda di era digital. Seminar ini ditujukan bagi para pendidik, orang tua, mahasiswa, dan siapa saja yang peduli dengan masa depan pendidikan Islam. Pendaftaran dapat dilakukan melalui kontak yang tersedia dengan kuota terbatas."
      },
      {
        id: 4,
        title: "Pelatihan Da'i Muda",
        date: "1-2 April 2023",
        time: "08:00 - 16:00 WIB",
        location: "Pondok Pesantren Al-Hikmah",
        description: "Workshop dan pelatihan untuk pembentukan da'i muda yang tangguh dan berkompeten di bidang dakwah.",
        image: "/contoh-bg.jpg",
        organizer: "Divisi Dakwah ROHIS Kab. Tegal",
        contact: "+62 878-9012-3456",
        fullDescription: "Pelatihan Da'i Muda merupakan program intensif dua hari yang dirancang untuk membekali generasi muda muslim dengan keterampilan dan pengetahuan dasar dalam berdakwah. Program ini bertujuan untuk melahirkan kader-kader dakwah yang mampu menyampaikan pesan-pesan Islam dengan cara yang efektif, menarik, dan sesuai dengan konteks kekinian. Materi yang akan diberikan mencakup teknik public speaking, metode penyusunan materi dakwah, etika dakwah, strategi dakwah di media sosial, dan praktik langsung berdakwah. Pelatihan ini akan dibimbing oleh para ustadz dan praktisi dakwah berpengalaman yang akan berbagi ilmu dan pengalaman mereka. Peserta akan mendapatkan sertifikat, modul pelatihan, dan kesempatan untuk bergabung dalam jaringan da'i muda setelah mengikuti program ini. Pendaftaran terbatas untuk 50 peserta dan akan dibuka hingga tanggal 25 Maret 2023."
      }
    ];

    // Find the event with the matching ID
    const foundEvent = mockEvents.find(e => e.id === parseInt(id || '0'));
    
    // Simulate API call delay
    setTimeout(() => {
      setEvent(foundEvent || null);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
        <div className="text-green-500 text-center">
          <svg className="w-12 h-12 animate-spin mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-lg font-medium">Memuat detail acara...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-red-50 p-8 rounded-lg max-w-2xl mx-auto">
            <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="text-2xl font-bold text-red-700 mb-2">Event Tidak Ditemukan</h2>
            <p className="text-gray-700 mb-6">Maaf, event yang Anda cari tidak ditemukan atau telah dihapus.</p>
            <Link to="/event" className="bg-green-500 text-white px-5 py-2 rounded-full inline-block hover:bg-green-600 transition-colors">
              Kembali ke Daftar Event
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-[40vh] py-20 bg-gradient-to-b from-green-500 to-green-600 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <div className="flex flex-wrap gap-3 justify-center mb-3">
            <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {event.date}
            </div>
            <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {event.time}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-nunito">{event.title}</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {event.location}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Navigation */}
        <div className="mb-6 max-w-6xl mx-auto">
          <Link to="/event" className="inline-flex items-center text-green-600 hover:text-green-700">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Daftar Event
          </Link>
        </div>
        
        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Tentang Acara</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-line">
                  {event.fullDescription || event.description}
                </p>
              </div>
            </div>

            {/* Event Image */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Detail Event</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tanggal</p>
                    <p className="font-medium">{event.date}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Waktu</p>
                    <p className="font-medium">{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Lokasi</p>
                    <p className="font-medium">{event.location}</p>
                  </div>
                </div>
                
                {event.organizer && (
                  <div className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Penyelenggara</p>
                      <p className="font-medium">{event.organizer}</p>
                    </div>
                  </div>
                )}
                
                {event.contact && (
                  <div className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Kontak</p>
                      <p className="font-medium">{event.contact}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              <button className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors">
                Daftar Sekarang
              </button>
              
              <button className="w-full bg-white border border-green-500 text-green-500 py-3 px-4 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Bagikan Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage; 