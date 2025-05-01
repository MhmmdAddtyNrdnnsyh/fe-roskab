import React from 'react';

// Dummy organization structure data - replace with actual data later
const organizationData = {
  ketua: {
    name: 'Ahmad Rizki',
    position: 'Ketua Umum',
    image: '/contoh-bg.jpg',
    description: 'Mahasiswa Jurusan Teknik Informatika, aktif dalam berbagai kegiatan kepemimpinan dan dakwah kampus.'
  },
  wakil: {
    name: 'Farah Aliyah',
    position: 'Wakil Ketua',
    image: '/contoh-bg.jpg',
    description: 'Mahasiswa Jurusan Ekonomi Islam, fokus pada pengembangan program-program sosial.'
  },
  sekretaris: [
    {
      name: 'Muhammad Faisal',
      position: 'Sekretaris',
      image: '/contoh-bg.jpg',
      description: 'Mahasiswa Jurusan Ilmu Komunikasi, bertanggung jawab untuk administrasi dan dokumentasi kegiatan.'
    },
    {
      name: 'Aisyah Putri',
      position: 'Wakil Sekretaris',
      image: '/contoh-bg.jpg',
      description: 'Mahasiswa Jurusan Sastra Arab, membantu pengelolaan dokumen dan surat-menyurat.'
    }
  ],
  bendahara: [
    {
      name: 'Nur Hidayah',
      position: 'Bendahara',
      image: '/contoh-bg.jpg',
      description: 'Mahasiswa Jurusan Akuntansi, mengelola keuangan dan pembukuan organisasi.'
    },
    {
      name: 'Zaki Ahmad',
      position: 'Wakil Bendahara',
      image: '/contoh-bg.jpg',
      description: 'Mahasiswa Jurusan Manajemen, membantu pengelolaan dana dan pencatatan keuangan.'
    }
  ],
  divisi: [
    {
      name: 'Divisi Kajian',
      head: 'Rahmat Ibrahim',
      members: ['Aisha Zahra', 'Hasan Ali', 'Siti Aminah'],
      description: 'Bertanggung jawab untuk menyelenggarakan kajian rutin, diskusi keislaman, dan tahsin Al-Quran.'
    },
    {
      name: 'Divisi Media & Komunikasi',
      head: 'Lutfi Hakim',
      members: ['Nadia Putri', 'Irfan Setiawan', 'Laila Nabila'],
      description: 'Mengelola media sosial, dokumentasi kegiatan, dan publikasi acara-acara ROHIS.'
    },
    {
      name: 'Divisi Sosial & Charity',
      head: 'Salma Husna',
      members: ['Rifqi Hakim', 'Maya Indah', 'Dimas Pratama'],
      description: 'Mengkoordinir program-program sosial, bakti sosial, dan penggalangan dana.'
    },
    {
      name: 'Divisi Seni & Kreatif',
      head: 'Indra Kusuma',
      members: ['Nadira Zahra', 'Farhan Ahmad', 'Amelia Putri'],
      description: 'Mengembangkan kegiatan seni islami seperti kaligrafi, nasyid, dan film-film religi.'
    }
  ]
};

const OrganizationPage: React.FC = () => {
  return (
    <div>
      <div className="min-h-[40vh] py-20 bg-gradient-to-b from-green-500 to-green-600 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-nunito">Struktur Organisasi</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Mengenal lebih dekat para pengurus ROHIS periode 2023-2024
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Main Leaders */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Ketua */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2">
              <div className="h-2 bg-green-500"></div>
              <div className="p-6">
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img 
                      src={organizationData.ketua.image} 
                      alt={organizationData.ketua.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium mb-2">
                      {organizationData.ketua.position}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 font-nunito">
                      {organizationData.ketua.name}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {organizationData.ketua.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wakil */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2">
              <div className="h-2 bg-green-500"></div>
              <div className="p-6">
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img 
                      src={organizationData.wakil.image} 
                      alt={organizationData.wakil.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium mb-2">
                      {organizationData.wakil.position}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 font-nunito">
                      {organizationData.wakil.name}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {organizationData.wakil.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sekretaris & Bendahara */}
        <div className="max-w-6xl mx-auto mb-24">
          <h2 className="text-2xl font-bold mb-8 text-center font-nunito text-gray-800">Sekretaris & Bendahara</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationData.sekretaris.concat(organizationData.bendahara).map((person, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md transform transition-transform hover:-translate-y-1">
                <div className="h-2 bg-green-500"></div>
                <div className="p-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                      <img 
                        src={person.image} 
                        alt={person.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium mb-2">
                      {person.position}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 font-nunito">
                      {person.name}
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      {person.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divisi */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center font-nunito text-gray-800">Divisi Kerja</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizationData.divisi.map((divisi, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-2 bg-green-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-green-600 font-nunito">{divisi.name}</h3>
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-500 mb-1">Ketua Divisi</div>
                    <div className="font-semibold text-gray-800">{divisi.head}</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-500 mb-1">Anggota</div>
                    <div className="flex flex-wrap gap-2">
                      {divisi.members.map((member, idx) => (
                        <span 
                          key={idx}
                          className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Tugas</div>
                    <p className="text-gray-600">{divisi.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationPage; 