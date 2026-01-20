'use client';

import { useRef, useState } from 'react';
import { CopyIcon, CheckIcon } from '@/components/icons';

export function CopyCodeButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [showCheckmark, setShowCheckmark] = useState(false);

  const handleClick = async () => {
    if (!buttonRef.current) return;

    // Find the parent div, then find the pre element
    const parentDiv = buttonRef.current.parentElement;
    const preElement = parentDiv?.querySelector('pre');
    const codeElement = preElement?.querySelector('code');

    // Get text from code element or pre element, using textContent to get raw text
    const textToCopy = codeElement?.textContent || preElement?.textContent;

    if (!textToCopy) {
      console.error('No text found to copy');
      return;
    }

    // Try modern Clipboard API first
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setShowCheckmark(true);
        setTimeout(() => setShowCheckmark(false), 1000);
        return;
      } catch (err) {
        console.warn('Clipboard API failed, trying fallback method:', err);
      }
    }

    // Fallback method using execCommand (works in more contexts)
    try {
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);

      if (successful) {
        setShowCheckmark(true);
        setTimeout(() => setShowCheckmark(false), 1000);
      } else {
        console.error('Fallback copy method failed');
      }
    } catch (err) {
      console.error('Failed to copy code with fallback method:', err);
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`p-2 absolute top-2 right-2 rounded-md shadow-md transition-colors ${
        showCheckmark
          ? 'bg-gruvbox-light-green dark:bg-gruvbox-dark-green'
          : 'bg-gruvbox-light-bg2 dark:bg-gruvbox-dark-bg2 hover:bg-gruvbox-light-bg3 dark:hover:bg-gruvbox-dark-bg3'
      }`}
      aria-label="Copy code to clipboard"
    >
      {showCheckmark ? (
        <CheckIcon className="w-5 h-5 fill-gruvbox-light-bg0 dark:fill-gruvbox-dark-bg0" />
      ) : (
        <CopyIcon className="w-5 h-5 stroke-gruvbox-light-fg0 dark:stroke-gruvbox-dark-fg0" />
      )}
    </button>
  );
}
