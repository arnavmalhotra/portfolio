"use client";
import Name from "./component/name";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="h-screen flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="flex flex-col items-center gap-8 relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-zinc-800/50 shadow-xl dark:border-zinc-200/50 group cursor-pointer"
          >
            <Image 
              src="/1745172203951.jpeg" 
              alt="Arnav Malhotra" 
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          <Name />
        </motion.div>
      </div>
    </div>
  );
}
