import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/providers/Providers';
import { MainHeader } from '@/components/layout/MainHeader';

export const metadata: Metadata = {
  title: 'hamidouwb',
  description: 'Full-stack dev passionate about web dev, neovim, and sharing what I know.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent FOUC - must execute before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <MainHeader />
          <main className="mx-auto max-w-5xl pt-24">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
