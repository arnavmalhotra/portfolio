"use client";
import Projects from "../component/projects";
import Footer from "../component/footer";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 flex flex-col bg-zinc-900/30 dark:bg-zinc-100/30 dark:text-gray-900">
      <div className="flex-1">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center dark:text-gray-900"
        >
          Projects
        </motion.h2>
        <Projects />
      </div>
      <Footer />
    </div>
  );
} 