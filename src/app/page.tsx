import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Welcome to my page</h1>
      <p className="mt-2 text-lg sm:text-xl">-Anvbeast</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Hi, my name is Iqbal Setyawan</p>
        <br />
        <p>Pecinta musik yang suka ngulik suara dari balik layar. Tertarik pada teknologi otomotif & inovasi masa depan. Menemukan disiplin dan semangat baru lewat lari.</p>
        <br />
        <p><strong>Keep learning, keep moving.</strong></p>

        <br />

        {/* <p>
          This is the neobrutalism portfolio template. Check the{' '}
          <a
            target="_blank"
            className="font-heading underline"
            href="https://github.com/neobrutalism-templates/portfolio"
          >
            github repo
          </a>{' '}
          for more info.
        </p> */}
      </div>

      <Links /> 
    </div>
  )
}
