'use client';

import { useTheme } from '@/lib/contexts/theme-context';
import { MoonIcon, SunIcon } from '@/components/icons';
import { motion, AnimatePresence } from 'framer-motion';

export function DarkmodeButton() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const slideVariants = {
    enter: {
      x: -20,
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: 20,
      opacity: 0,
    },
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-purple-800 dark:text-yellow-200"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            <SunIcon className="w-8 h-8 fill-current" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            <MoonIcon className="w-8 h-8 fill-current" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
