import Section from './Section'
import { socials } from '../constants'

const Footer = () => {
  return (
    <Section className="!px-0 !py-10" crosses>
      <footer className="container flex items-center justify-center gap-10 sm:justify-between max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          &copy; {new Date().getFullYear()}. All rights reserved
        </p>

        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-n-7 hover:bg-n-6"
            >
              <img src={item.iconUrl} alt={item.title} width={16} height={16} />
            </a>
          ))}
        </ul>
      </footer>
    </Section>
  )
}
export default Footer
