import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anvbeast',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html suppressHydrationWarning lang="en">
        <body className={montserrat.className}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <div className="flex min-h-screen flex-col">
              <Nav />
              <main className="flex-grow">
                <div className="text-foreground mx-auto w-[1000px] max-w-full px-5 pt-35 pb-10">
                  {children}
                </div>
              </main>
              <Footer /> {/* Footer akan tetap di bawah konten */}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}

