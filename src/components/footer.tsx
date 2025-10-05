import { ReactElement } from 'react'

export default function Footer(): ReactElement {
  const year = new Date().getFullYear()

  return (
    <footer className="container flex w-full flex-col-reverse items-center justify-center gap-y-4 py-6 px-17.5 text-xs md:items-start md:justify-between md:flex-row">
      <div className="flex flex-col gap-y-1 text-center md:text-start">
        <span className="font-cera">
          Coded with ❤️ using{' '}
          <a
            href="https://code.visualstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-tx-accent"
          >
            Visual Studio Code
          {/* </a>{' '}
          and designed using{' '}
          <a
            href="https://www.figma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-tx-accent"
          >
            Figma */}
          </a>
        </span>
        <span className="font-cera">&copy; {year} Anvbeast</span>
      </div>

      <div className="flex gap-4 text-muted-foreground">
        {/* Social links bisa diaktifkan kembali nanti */}
      </div>
    </footer>
  )
}