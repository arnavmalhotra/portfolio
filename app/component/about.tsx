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
            <p className="text-sm">Bachelor of Engineering in Software Engineering</p>
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
                <h3 className="text-lg font-medium text-white dark:text-gray-900">Software Engineering Intern</h3>
                <p className="text-sm">Quarkle.ai</p>
                <p className="text-sm text-gray-400 dark:text-gray-600">Jun 2025 - Dec 2025</p>
              </div>
              <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                <li>Developed a public document sharing system enabling authors to showcase their work, driving <span className="font-semibold">30% increase in engagement</span> and facilitating collaboration among <span className="font-semibold">500 writers</span></li>
                <li>Architected an agent-based AI system using FastAPI WebSocket server and Flask backend, engineered smart data and context pipelines with vector databases to optimize retrieval, improving context retention by <span className="font-semibold">85%</span> and reducing response latency by <span className="font-semibold">40%</span></li>
                <li>Optimized frontend with debouncing, auto-save, and streamlined editing in Next.js, yielding <span className="font-semibold">50% faster performance</span> and improved UX</li>
              </ul>
            </div>
          </div>

          

          <div className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900/70 transition-colors dark:bg-zinc-200 dark:text-gray-900">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-white dark:text-gray-900">Software Developer</h3>
                <p className="text-sm">York University • Toronto, ON</p>
                <p className="text-sm text-gray-400 dark:text-gray-600">Oct 2024 - Apr 2025</p>
              </div>
              <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                <li>Developed and deployed a full-stack calendar application that surfaces diversity events using FastAPI, MongoDB, and React; achieved adoption by <span className="font-semibold">200 faculty and staff</span></li>
                <li>Automated content generation via Selenium scraping across <span className="font-semibold">10 sources</span> and leveraged LLMs for description generation, cutting manual curation effort by <span className="font-semibold">90%</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900/70 transition-colors dark:bg-zinc-200 dark:text-gray-900">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-white dark:text-gray-900">Research Fellow</h3>
                <p className="text-sm">Indian Institute of Technology, Roorkee • Roorkee, India</p>
                <p className="text-sm text-gray-400 dark:text-gray-600">May 2024 - Jul 2024</p>
              </div>
              <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                <li>Designed an automated slice selection method ranking MRI slices by peak voxel intensity, retaining top five lesion-rich slices per scan for FCD type II lesion detection</li>
                <li>Trained and evaluated nnU-Net models on MRI data from <span className="font-semibold">85 subjects</span> using 5-fold cross-validation, achieving improved segmentation performance to aid presurgical evaluation</li>
                <li>Published research findings in <a href="https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1601815/abstract" className="underline" target="_blank" rel="noreferrer">Frontiers in Artificial Intelligence</a></li>
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
                {["Java", "Python", "C", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-zinc-800 rounded-full text-sm dark:text-gray-900 dark:bg-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2 dark:text-gray-900">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["FastAPI", "Next.js", "React", "Node.js"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-zinc-800 rounded-full text-sm dark:text-gray-900 dark:bg-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2 dark:text-gray-900">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MongoDB", "Redis", "Vector DBs"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-zinc-800 rounded-full text-sm dark:text-gray-900 dark:bg-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2 dark:text-gray-900">Libraries/Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["PyTorch", "NumPy", "Pandas", "Matplotlib", "Selenium", "Git", "Docker", "Tailwind CSS", "JWT"].map((skill) => (
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