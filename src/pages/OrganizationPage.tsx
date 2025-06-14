import React from 'react';

// Dummy organization structure data - replace with actual data later
const organizationData = {
  pembina1: {
    name: 'Akhmad Khanan,S.Ag, M.Pd.I',
    position: 'Pembina Rohis SMA-SMK Kabupaten Tegal',
    image: '',
    description: ''
  },
  pembina2: {
    name: 'Mokhamad Akhmad,S.Ag',
    position: 'Pembina Rohis SMA-SMK Kabupaten Tegal',
    image: '',
    description: ''
  },
  pembina3: {
    name: 'Musabaqoh, S.Ag, M.Si',
    position: 'Pembina Rohis SMA-SMK Kabupaten Tegal',
    image: '',
    description: ''
  },
  pembina4: {
    name: 'Kaniah, S.Ag., M.Pd.I',
    position: 'Pembina Rohis SMA-SMK Kabupaten Tegal',
    image: '',
    description: ''
  },
  pembina5: {
    name: 'Moh. Ali Ghozi, S.Ag',
    position: 'Pembina Rohis SMA-SMK Kabupaten Tegal',
    image: '',
    description: ''
  },
  ketua: {
    name: 'Muhammad Haidar Islamy Rasyad',
    position: 'Ketua Umum',
    image: '/fotbar.jpg',
    description: 'Siswa SMK Negeri 1 Adiwerna jurusan Teknik Kendaraan Ringan.'
  },
  wakil: {
    name: 'Halimatun Nisa',
    position: 'Wakil Ketua',
    image: '/fotbar.jpg',
    description: 'Siswa SMK Negeri 1 Dukuhturi jurusan Akuntansi.'
  },
  sekretaris: [
    {
      name: 'Jihan Nabila Suryo',
      position: 'Sekretaris 1',
      image: '/fotbar.jpg',
      description: 'Siswa SMK Negeri 1 Adiwerna jurusan Teknik Komputer dan Jaringan.'
    },
    {
      name: 'Setiawati Sasmita',
      position: 'Sekretaris 2',
      image: '/fotbar.jpg',
      description: 'Siswa SMA Negeri 1 Slawi paket IPA.'
    }
  ],
  bendahara: [
    {
      name: 'Kirannia Ayu Zulaika',
      position: 'Bendahara 1',
      image: '/fotbar.jpg',
      description: 'Siswa SMK Negeri 1 Slawi jurusan Akuntansi.'
    },
    {
      name: 'M. Ridho Balya Mahbubi',
      position: 'Bendahara 2',
      image: '/fotbar.jpg',
      description: 'Siswa SMK Negeri 2 Adiwerna jurusan Akuntansi.'
    }
  ],
  divisi: [
    {
      name: 'Sie Kajian',
      head: 'Detak Bara Alam',
      members: ['Nur Fauziatun Ni`mah', 'Fakhri Ilyas Ramawan', 'Siti Maisah Putri', 'Alifianita Rohima'],
      description: [
        '1. Pengajian Rutinan FRA Rohis Kabupaten Tegal.',
        '2. Mengadakan Peringatan Hari Besar Islam.',
        '3. Pengajian Durotunnisa.',
        '4. Outing Rohis Islamy.'
      ]
    },
    {
      name: 'Sie Sosial',
      head: 'Nita Mugnis Aulia',
      members: ['Maulidida Amalia Putri', 'M. Dwi Andrean Maheto', 'Dhyki Zaka Ramadhani', 'M. Arief Fatkhurrohman', 'Dyita Arniati'],
      description: [
        '1. Terti Bersama.',
        '2. Ikatan Asih.',
        '3. Sosialisasi Pengenalan Rohis Kabupaten Tegal.',
        '4. Rohis Beraksi.',
        '5. Melakasanakan Kegiatan Open Recruitment Dengan Memegang Prinsip Kejujuran, Keadilan, Transparansi, dan Akuntabilitas, dan Profesionalitas.'
      ]
    },
    {
      name: 'Sie Kewirausahaan',
      head: 'Ratna Junita Caesary',
      members: ['Igness Iftitah Rizqy', 'Khoirunnisa', 'Rendi Agustian', 'Nabkhun Azmy', 'Arip Maulana'],
      description: [
        '1. Membuat Baju Identitas Rohis Kabupaten Tegal Seperti Jaz, Kaos Ataupun Yang Lainnya.',
        '2. Membuat Agenda Rohis Kabupaten. Sie Kewirausahaan Membuat Merchandise Seperti Kartu Anggota, Gantungan Kunci, Ataupun Souvenir Lainnya.',
        '3. Mengundang Wirausahwan Handal Yang Akan Membagikan Ilmunya Secara Langsung.',
        '4. Dari Sie Kewirausahaan Melakukan Kolaborasi Dengan Sie Sosial Untuk Menyelenggarakan Bagi-bagi Takjil di Bulan Ramadhan.',
        '5. Membuat Dan Mengelola Usaha Dan Unit Produksi Organisasi Sebagai Sumber Dana Ketiga.'
      ]
    },
    {
      name: 'Sie Pelatihan',
      head: 'Riska Amalia',
      members: ['Laili Rahmawati', 'Hikmatul Jannah', 'M. Husnul Aqib', 'Dea Avita', 'Maulana Alfarizi'],
      description: [
        '1. Mengadakan Festival rohis dengan mengadakan banyak lomba.',
        '2. Mengadakan Latihan gabungan Rohis SMA/SMK Kabupaten Tegal.',
        '3. Mengadakan Webinar dan Seminar.',
        '4. HUT Rohis SMA/SMK sekabupaten Tegal.',
        '5. Pengembangan zakat',
        '6. Mengadakan Latihan gabungan antar Rohis Kabupaten Tegal dengan Rohis Kota Tegal.',
        '7. Memperingati Tahun Baru Islam dalam bentuk Lomba (LCCI) Rohis SMA/SMK Se-Kabupaten Tegal.'
      ]
    },
    {
      name: 'Sie Humas Dan Jurnalistik',
      head: 'Adhitia Dwi Cahyani',
      members: ['Muhammad Aditya Nurdiansyah', 'Sabrina Marsya Azana', 'Novandri Firmansyah', 'Alya Riva', 'M. Firdaus'],
      description: [
        '1. Menambahkan akun sosmed berupa tiktok.',
        '2. Membuat konten tentang konten keseharian islami.',
        '3. Mendokumentasikan serta mempublikasikan jalannya kegiatan acara.',
        '4. Membuat pamflet PHBI.'
      ]
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
            Mengenal lebih dekat para pengurus ROHIS periode 2025-2025
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Pembina Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <h2 className="text-2xl font-bold mb-8 text-center font-nunito text-gray-800">Pembina</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(organizationData)
              .filter(([key]) => key.startsWith('pembina'))
              .map(([key, person]) => {
                if ('name' in person && 'position' in person) {
                  return (
                    <div key={key} className="bg-white rounded-xl overflow-hidden shadow-md transform transition-transform hover:-translate-y-1">
                      <div className="h-2 bg-green-500"></div>
                      <div className="p-4">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                            <img 
                              src={person.image || '/default-avatar.jpg'} 
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
                  );
                }
                return null;
              })}
          </div>
        </div>

        {/* Main Leaders */}
        <div className="max-w-6xl mx-auto mb-24">
          <h2 className="text-2xl font-bold mb-8 text-center font-nunito text-gray-800">Ketua & Wakil</h2>
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
                    {Array.isArray(divisi.description) ? (
                      <ul className="list-disc list-inside text-gray-600">
                        {divisi.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600">{divisi.description}</p>
                    )}
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