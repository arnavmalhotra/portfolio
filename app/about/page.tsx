"use client";
import About from "../component/about";
import Footer from "../component/footer";
import ResumeViewer from "../component/resume-viewer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 flex flex-col dark:bg-zinc-100 dark:text-gray-900">
      <div className="flex-1">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center dark:text-gray-900"
        >
          About
        </motion.h2>
        <div className="flex flex-col items-center mb-12">
          <ResumeViewer />
        </div>
        <About />
      </div>
      <Footer />
    </div>
  );
} 