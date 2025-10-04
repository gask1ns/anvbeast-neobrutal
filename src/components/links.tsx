import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiInstagram,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:iqbalsetyawan283@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/gask1ns',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/johndoe/',
    },
    {
      icon: SiInstagram,
      href: 'https://www.instagram.com/Iqbalsetyawan_/',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
