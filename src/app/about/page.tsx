import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg ">
        <p style={{ textAlign: 'justify' }}>
          Halo, saya seorang pecinta musik berusia 23 tahun yang tidak hanya menikmati bermain musik, tetapi juga sangat tertarik mengulik aspek-aspek teknis di balik suara—mulai dari rekayasa suara, produksi, hingga hal-hal detail yang jarang terlihat di balik layar. Musik bagi saya bukan hanya soal melodi, tetapi juga ilmu dan seni dalam mengolah gelombang suara menjadi pengalaman yang bermakna. Di samping itu, saya memiliki ketertarikan yang besar terhadap dunia otomotif, terutama perkembangan teknologi dan inovasi di bidang ini, dari mesin konvensional hingga era kendaraan listrik dan otonom. Baru-baru ini, saya juga menemukan kecintaan terhadap olahraga lari, yang tidak hanya menjaga kebugaran tubuh, tetapi juga menjadi cara untuk menyegarkan pikiran dan membangun disiplin diri. Saya percaya bahwa semangat belajar, eksplorasi, dan pengembangan diri terus mewarnai perjalanan hidup saya.
        </p>
      </div>

      {/* <Skills />

      <Experience /> */}
    </div>
  )
}
