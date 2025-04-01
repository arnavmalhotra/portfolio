"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiDownload, HiExternalLink, HiZoomIn, HiZoomOut } from 'react-icons/hi';

export default function ResumeViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);

  const zoomIn = () => setScale(prev => Math.min(prev + 0.25, 2));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-900 hover:bg-gray-200 transition-colors"
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
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-4 z-50 overflow-hidden rounded-2xl bg-zinc-900/90 shadow-2xl border border-zinc-800/50 md:inset-6 lg:inset-x-1/4 lg:inset-y-12"
            >
              {/* Header */}
              <div className="absolute inset-x-0 top-0 h-16 bg-zinc-900/90 border-b border-zinc-800/50 backdrop-blur-sm px-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={zoomOut}
                    className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors disabled:opacity-50"
                    disabled={scale <= 0.5}
                  >
                    <HiZoomOut className="h-4 w-4" />
                  </button>
                  <button
                    onClick={zoomIn}
                    className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors disabled:opacity-50"
                    disabled={scale >= 2}
                  >
                    <HiZoomIn className="h-4 w-4" />
                  </button>
                  <span className="text-sm text-gray-400">
                    {Math.round(scale * 100)}%
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white hover:bg-white/20 transition-colors"
                  >
                    <HiDownload className="h-4 w-4" />
                    <span>Download PDF</span>
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                  >
                    <HiX className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* PDF Viewer */}
              <div className="h-full w-full pt-16 bg-zinc-900/50">
                <div 
                  className="h-full w-full overflow-auto"
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'top center'
                  }}
                >
                  <iframe
                    src="/resume.pdf#view=FitH"
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