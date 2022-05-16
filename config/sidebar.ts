import { IconType } from 'react-icons'
import {
  FaBlog,
  FaMailBulk,
  FaLinkedin,
  FaStackOverflow,
  FaGithub,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/venkat-d-39a062184/',
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/ven2day',
    icon: FaGithub,
  },
  {
    label: 'Portfolio',
    href: 'https://ventoday.com',
    icon: FaBlog,
  },
  {
    label: 'Mail',
    href: 'mailto:hello@ventoday.com',
    icon: FaMailBulk,
  },
]
