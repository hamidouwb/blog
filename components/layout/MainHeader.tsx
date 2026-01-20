import Link from 'next/link';
import { GithubIcon, LinkedInIcon, LinksIcon, PortfolioIcon } from '@/components/icons';
import { IconLink } from './IconLink';
import { DarkmodeButton } from './DarkmodeButton';

export function MainHeader() {
  return (
    <header className="fixed z-10 top-0 inset-x-0 border-b bg-gruvbox-light-bg0 dark:bg-gruvbox-dark-bg0 border-gruvbox-light-bg3 dark:border-gruvbox-dark-bg3">
      <nav className="flex items-center justify-start max-w-5xl mx-auto px-4 h-24">
        <Link href="/" className="mr-auto">
          <img
            src="/headshot.png"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover object-top shadow-lg ring-2 ring-gruvbox-light-bg3 dark:ring-gruvbox-dark-bg3 scale-110"
          />
        </Link>
        <div className="flex space-x-1 items-center">
          <DarkmodeButton />
          <IconLink href="/portfolio">
            <PortfolioIcon className="w-10 h-10 fill-current" />
          </IconLink>
          <IconLink href="https://github.com/hamidouwb" target="_blank">
            <GithubIcon className="w-10 h-10 fill-current" />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/hamidouwb/" target="_blank">
            <LinkedInIcon className="w-10 h-10 fill-current" />
          </IconLink>
          <IconLink href="https://links.hamidouwb.com/" target="_blank">
            <LinksIcon className="w-10 h-10" />
          </IconLink>
        </div>
      </nav>
    </header>
  );
}
