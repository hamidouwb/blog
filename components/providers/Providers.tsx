'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@/lib/contexts/theme-context';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
