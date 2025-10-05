import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Anvbeast</h1>
      <p className="mt-1 text-lg sm:text-xl">All rounder Enthusiast</p>

      <div className="mt-5 mb-4 text-primary/75">
        {/* <p>Hi, my name is Iqbal Setyawan</p>
        <br /> */}
        <p>
          Pecinta musik yang suka ngulik suara dari balik layar. Tertarik pada teknologi otomotif & inovasi masa depan. Menemukan disiplin dan semangat baru lewat lari.
        </p>
      </div>

      <Links />

      {/* === About Me Section (Added Below Links) === */}
      <div className="space-y-6 mt-6">
        <div>
          <h5 className="mb-4 font-cera text-lg font-bold">About Me</h5>
          <p className="mb-4 text-primary/75">
            Hai, saya berusia 23 tahun — seorang pecinta musik yang tak hanya 
            menikmati bermain alat musik, 
            tapi juga sangat tertarik dengan dunia sound engineering. 
            Bagi saya, di balik setiap nada yang indah, ada ilmu dan ketelitian yang memukau.
          </p>
          <p className="mb-4 text-primary/75">
            Di sela waktu luang, saya tenggelam dalam dunia gaming. Bukan cuma untuk hiburan, 
            tapi juga sebagai cara melatih fokus dan mengeksplorasi kreativitas.
          </p>
          <p className="mb-4 text-primary/75">
            Belakangan, saya mulai jatuh cinta pada olahraga lari. Rasanya seperti reset untuk pikiran setelah seharian berkutat dengan suara dan layar. Langkah demi langkah, saya belajar disiplin, 
            kesabaran, dan pentingnya keseimbangan antara kreativitas dan kesehatan.
          </p>
          <p><strong>Keep learning, keep moving.</strong></p>
        </div>
      </div>
    </div>
  )
}
