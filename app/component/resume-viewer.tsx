"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiDownload, HiExternalLink } from 'react-icons/hi';

export default function ResumeViewer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-900 hover:bg-gray-200 transition-colors dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
        whileHover={{ y: -2 }}
      >
        <HiExternalLink className="w-4 h-4" />
        <span className="font-medium">View Resume</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 dark:bg-zinc-100/80"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-4 z-50 overflow-hidden rounded-2xl bg-zinc-900/90 shadow-2xl border border-zinc-800/50 md:inset-6 lg:inset-x-1/4 lg:inset-y-12 dark:bg-zinc-100/90 dark:border-zinc-400/50"
            >
              {/* Header */}
              <div className="absolute inset-x-0 top-0 h-16 bg-zinc-900/90 border-b border-zinc-800/50 backdrop-blur-sm px-4 flex items-center justify-end dark:bg-zinc-100/90 dark:border-zinc-400/50">
                <div className="flex items-center gap-2">
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white hover:bg-white/20 transition-colors dark:bg-zinc-900/10 dark:text-gray-900 dark:hover:bg-zinc-900/20"
                  >
                    <HiDownload className="h-4 w-4 dark:text-gray-900" />
                    <span>Download PDF</span>
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                  >
                    <HiX className="h-5 w-5 dark:text-gray-900" />
                  </button>
                </div>
              </div>
              
              {/* PDF Viewer */}
              <div className="h-full w-full pt-16 bg-zinc-900/50">
                <div className="h-full w-full">
                  <iframe
                    src="/resume.pdf#toolbar=0&view=Fit&zoom=page-fit"
                    className="h-full w-full"
                    title="Resume"
                    style={{
                      background: 'white',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 