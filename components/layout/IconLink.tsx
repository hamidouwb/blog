import Link from 'next/link';
import { ReactNode } from 'react';

interface IconLinkProps {
  href: string;
  target?: '_self' | '_blank';
  children: ReactNode;
}

export function IconLink({ href, target = '_self', children }: IconLinkProps) {
  const className =
    'p-2 rounded-lg text-gruvbox-light-fg1 hover:bg-gruvbox-light-bg2 dark:text-gruvbox-dark-fg1 dark:hover:bg-gruvbox-dark-bg2 transition-colors';

  // Use anchor tag for external links, Next.js Link for internal
  if (target === '_blank' || href.startsWith('http')) {
    return (
      <a href={href} target={target} rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
