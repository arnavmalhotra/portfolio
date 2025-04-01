"use client";
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-5">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-2 rounded-full bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 shadow-lg shadow-black/10 dark:bg-zinc-100 dark:border-zinc-200 dark:shadow-black/10"
      >
        <div className="flex items-center gap-8">
          <Link href="/" passHref>
            <motion.a
              className={`text-sm font-medium transition-colors ${
                pathname === '/' ? 'text-white dark:text-gray-900' : 'text-gray-400 dark:text-gray-400'
              } hover:text-white`}
              whileHover={{ y: -1 }}
            >
              home
            </motion.a>
          </Link>
          
          {[
            { path: '/about', label: 'about' },
            { path: '/projects', label: 'projects' }
          ].map(({ path, label }) => (
            <Link key={path} href={path} passHref>
              <motion.a
                className={`text-sm font-medium transition-colors ${
                  pathname === path ? 'text-white dark:text-gray-900' : 'text-gray-400 dark:text-gray-400'
                } hover:text-white`}
                whileHover={{ y: -1 }}
              >
                {label}
              </motion.a>
            </Link>
          ))}

          <motion.button
            onClick={() => {
              if (theme === 'light') {
                setTheme('dark');
              } else {
                setTheme('light');
              }
            }}
            className="p-2 rounded-full hover:bg-zinc-800/50 transition-colors"
            whileHover={{ y: -1 }}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-gray-400" />
            ) : (
              <Sun className="w-5 h-5 text-gray-400" />
            )}
          </motion.button>
        </div>
      </motion.nav>
    </div>
  );
}
