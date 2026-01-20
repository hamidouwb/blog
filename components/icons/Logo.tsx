'use client';

import { useEffect, useRef, createElement } from 'react';

export function Logo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import the dotlottie player component
    import('@dotlottie/player-component');
  }, []);

  return (
    <div ref={containerRef}>
      {createElement('dotlottie-player', {
        src: 'https://lottie.host/686c0216-9676-4bbf-ac0b-be626dbf24fa/uVy640JbOo.json',
        background: 'transparent',
        speed: '1',
        style: { width: '150px', height: '150px' },
        className: 'fill-current text-black dark:text-white',
        loop: true,
        autoplay: true,
      })}
    </div>
  );
}
