import React from "react";
import Sie from "../data/JobSie";

// Dummy organization structure data - replace with actual data later
const organizationData = {
  ketua: {
    name: "Muhammad Haidar Islamy Rasyad",
    position: "Ketua Umum",
    image: "/fotbar.jpg",
    description:
      "Mahasiswa Jurusan Teknik Informatika, aktif dalam berbagai kegiatan kepemimpinan dan dakwah kampus.",
  },
  wakil: {
    name: "Halimatun Nisa",
    position: "Wakil Ketua",
    image: "/fotbar.jpg",
    description:
      "Mahasiswa Jurusan Ekonomi Islam, fokus pada pengembangan program-program sosial.",
  },
  sekretaris: [
    {
      name: "Jihan Nabila Suryo",
      position: "Sekretaris 1",
      image: "/fotbar.jpg",
      description:
        "Mahasiswa Jurusan Ilmu Komunikasi, bertanggung jawab untuk administrasi dan dokumentasi kegiatan.",
    },
    {
      name: "Setiawati Sasmita",
      position: "Sekretaris 2",
      image: "/fotbar.jpg",
      description:
        "Mahasiswa Jurusan Sastra Arab, membantu pengelolaan dokumen dan surat-menyurat.",
    },
  ],
  bendahara: [
    {
      name: "Kirannia Ayu Zulaika",
      position: "Bendahara 1",
      image: "/fotbar.jpg",
      description:
        "Mahasiswa Jurusan Akuntansi, mengelola keuangan dan pembukuan organisasi.",
    },
    {
      name: "M. Ridho Balya Mahbubi",
      position: "Bendahara 2",
      image: "/fotbar.jpg",
      description:
        "Mahasiswa Jurusan Manajemen, membantu pengelolaan dana dan pencatatan keuangan.",
    },
  ],
  divisi: [
    {
      name: "Sie Kajian",
      head: "Detak Bara Alam",
      members: [
        "Nur Fauziatun Ni`mah",
        "Fakhri Ilyas Ramawan",
        "Siti Maisah Putri",
        "Alifianita Rohima",
      ],
      description:
        "Bertanggung jawab untuk menyelenggarakan kajian rutin, diskusi keislaman, dan tahsin Al-Quran.",
    },
    {
      name: "Sie Sosial",
      head: "Nita Mugnis Aulia",
      members: [
        "Maulidida Amalia Putri",
        "M. Dwi Andrean Maheto",
        "Dhyki Zaka Ramadhani",
        "M. Arief Fatkhurrohman",
        "Dyita Arniati",
      ],
      description:
        "Mengelola media sosial, dokumentasi kegiatan, dan publikasi acara-acara ROHIS.",
    },
    {
      name: "Sie Kewirausahaan",
      head: "Ratna Junita Caesary",
      members: [
        "Igness Iftitah Rizqy",
        "Khoirunnisa",
        "Rendi Agustian",
        "Nabkhun Azmy",
        "Arip Maulana",
      ],
      description:
        "Mengkoordinir program-program sosial, bakti sosial, dan penggalangan dana.",
    },
    {
      name: "Sie Pelatihan",
      head: "Riska Amalia",
      members: [
        "Laili Rahmawati",
        "Hikmatul Jannah",
        "M. Husnul Aqib",
        "Dea Avita",
        "Maulana Alfarizi",
      ],
      description:
        "Mengembangkan kegiatan seni islami seperti kaligrafi, nasyid, dan film-film religi.",
    },
    {
      name: "Sie Humas Dan Jurnalistik",
      head: "Adhitia Dwi Cahyani",
      members: [
        "Muhammad Aditya Nurdiansyah",
        "Sabrina Marsya Azana",
        "Novandri Firmansyah",
        "Alya Riva",
        "M. Firdaus",
      ],
      description:
        "Mengumpulkan Dokumentasi dokumentasi setiap kali ada agenda",
    },
  ],
};

const OrganizationPage: React.FC = () => {
  return (
    <React.Fragment>
      <div>
        <div className="min-h-[40vh] py-20 bg-gradient-to-b from-green-500 to-green-600 flex items-center justify-center">
          <div className="container mx-auto px-4 py-16 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-nunito">
              Struktur Organisasi
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Mengenal lebih dekat para pengurus ROHIS periode 2025-2025
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
            <h2 className="text-2xl font-bold mb-8 text-center font-nunito text-gray-800">
              Sekretaris & Bendahara
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {organizationData.sekretaris
                .concat(organizationData.bendahara)
                .map((person, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-md transform transition-transform hover:-translate-y-1"
                  >
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
            <h2 className="text-2xl font-bold mb-8 text-center font-nunito text-gray-800">
              Divisi Kerja
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {organizationData.divisi.map((divisi, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md"
                >
                  <div className="h-2 bg-green-500"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-green-600 font-nunito">
                      {divisi.name}
                    </h3>
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-500 mb-1">
                        Ketua Divisi
                      </div>
                      <div className="font-semibold text-gray-800">
                        {divisi.head}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-500 mb-1">
                        Anggota
                      </div>
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
                      <div className="text-sm font-medium text-gray-500 mb-1">
                        Tugas
                      </div>
                      <p className="text-gray-600">{divisi.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrganizationPage;
