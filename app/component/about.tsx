import { motion } from "framer-motion";
import { HiAcademicCap, HiBriefcase, HiCode } from "react-icons/hi";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 mb-4 ">
    {children}
  </div>
);

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      className="max-w-3xl mx-auto text-gray-300 space-y-12"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <SectionTitle>
          <HiAcademicCap className="w-6 h-6 text-blue-400 dark:text-blue-600" />
          <h2 className="text-xl font-semibold text-white dark:text-gray-900">Education</h2>
        </SectionTitle>
        
        <div className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900/70 transition-colors dark:bg-zinc-200 dark:text-gray-900">
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-white dark:text-gray-900">York University</h3>
            <p className="text-sm">Bachelor of Engineering in Computer Engineering</p>
            <p className="text-sm text-gray-400 dark:text-gray-600">Expected May 2027 • Toronto, ON</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <SectionTitle>
          <HiBriefcase className="w-6 h-6 text-green-400 dark:text-green-600" />
          <h2 className="text-xl font-semibold text-white dark:text-gray-900">Experience</h2>
        </SectionTitle>
        
        <div className="space-y-6">
          <div className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900/70 transition-colors dark:bg-zinc-200 dark:text-gray-900">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-white dark:text-gray-900">Research Fellow</h3>
                <p className="text-sm">Indian Institute of Technology, Roorkee</p>
                <p className="text-sm text-gray-400 dark:text-gray-600">May 2024 - July 2024</p>
              </div>
              <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                <li>Researched hybrid BCos-KAN architectures for improved image segmentation</li>
                <li>Built interpretable EEG-based pipelines for seizure detection</li>
                <li>Designed lightweight CNN-transformer models for mobile image enhancement</li>
              </ul>
            </div>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900/70 transition-colors dark:bg-zinc-200 dark:text-gray-900">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-white dark:text-gray-900">Software Development Intern</h3>
                <p className="text-sm">Parcon India Private Limited • Kolkata</p>
                <p className="text-sm text-gray-400 dark:text-gray-600">July 2024 - Sept 2024</p>
              </div>
              <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                <li>Developed automation solutions for invoice and delivery order handling</li>
                <li>Created C and Python scripts integrated with Excel and ERP systems</li>
                <li>Reduced back-office errors by 80% and saved 90+ hours per week</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <SectionTitle>
          <HiCode className="w-6 h-6 text-purple-400 dark:text-purple-600" />
          <h2 className="text-xl font-semibold text-white dark:text-gray-900">Technical Skills</h2>
        </SectionTitle>
        
        <div className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900/70 transition-colors dark:bg-zinc-200 dark:text-gray-900">
          <div className="grid gap-4">
            <div>
              <h3 className="text-white font-medium mb-2 dark:text-gray-900">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "C", "JavaScript"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-zinc-800 rounded-full text-sm dark:text-gray-900 dark:bg-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2 dark:text-gray-900">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["FastAPI", "MongoDB", "PostgreSQL", "Next.js", "React", "Selenium"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-zinc-800 rounded-full text-sm dark:text-gray-900 dark:bg-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2 dark:text-gray-900">Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {["PyTorch", "NumPy", "Matplotlib", "Redis"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-zinc-800 rounded-full text-sm dark:text-gray-900 dark:bg-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 