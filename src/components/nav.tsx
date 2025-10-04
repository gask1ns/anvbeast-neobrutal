'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'

export default function Nav() {
  const path = usePathname()

  const links = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/about',
      text: 'About Me',
    },
    {
      path: '/work',
      text: 'Portal App',
    },
  ]

  return (
<div className="fixed left-0 z-50 w-full">
  <nav className="text-main-foreground bg-main font-base 
                 w-full flex justify-between items-center border-b-3 gap-7 p-4 px-5 
                 text-sm sm:text-base">
    
    {/* Logo di kiri */}
    {/* Logo di kiri - hidden on mobile (≤640px) */}
        <div className="font-bold text-lg sm:text-xl tracking-wide text-primary hidden sm:block">
          Anvbeast
        </div>

    {/* Link menu di tengah */}
    <div className="flex gap-5 mx-auto">
      {links.map((link) => (
        <Link
          key={link.path}
          className={clsx(
            'hover:border-border rounded-base border-2 px-2 py-1 transition-colors',
            path === link.path ? 'border-border' : 'border-transparent',
          )}
          href={link.path}
        >
          {link.text}
        </Link>
      ))}
    </div>

    {/* Theme Switcher di kanan */}
    <div className="">
  <ThemeSwitcher />
</div>
  </nav>
</div>
  )
}
