"use client";
import Name from "./component/name";
import { motion } from "framer-motion";

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
          className="flex justify-between relative"
        >
          <Name />
        </motion.div>
      </div>
    </div>
  );
}
