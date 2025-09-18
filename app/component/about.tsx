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
                <p className="text-sm text-gray-400 dark:text-gray-600">Jul 2025 – Dec 2025</p>
              </div>
              <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                <li>Designed and deployed an agentic AI system with Python FastAPI websockets for real-time retrieval; boosted knowledge retention by <span className="font-semibold">85%</span> and reduced hallucinations by <span className="font-semibold">60%</span> through custom pipelines and memory indexing</li>
                <li>Optimized a Next.js frontend to handle documents up to <span className="font-semibold">1M words</span> using debouncing, diffing, and caching; cut rendering latency by <span className="font-semibold">40%</span> and improved performance by <span className="font-semibold">45%</span>, enabling seamless long-document handling</li>
                <li>Built a public document-sharing system enabling authors to showcase work and collaborate; drove a <span className="font-semibold">30% increase in engagement</span> across a community of <span className="font-semibold">500+ writers</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900/70 transition-colors dark:bg-zinc-200 dark:text-gray-900">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-white dark:text-gray-900">Software Development Contractor</h3>
                <p className="text-sm">Markis Investments</p>
                <p className="text-sm text-gray-400 dark:text-gray-600">Apr 2025 – Jun 2025</p>
              </div>
              <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                <li>Delivered a direct booking website for a luxury resort using Next.js, PostgreSQL, Git LFS, and S3 buckets; increased sales by <span className="font-semibold">40%</span> and processed <span className="font-semibold">$100K revenue</span> in the first month</li>
                <li>Built a QR-based event management system providing real-time attendee tracking and analytics; deployed across <span className="font-semibold">5 events</span> with <span className="font-semibold">500+ participants</span>, reducing manual errors and bottlenecks</li>
                <li>Developed guest-facing portals for facility booking, payments, and information access; improved customer experience and adoption by <span className="font-semibold">150+ users</span> within the first month</li>
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
                <li>Engineered a data scraping pipeline aggregating from <span className="font-semibold">20+ sources</span> with validation, retries, and exception handling; ensured <span className="font-semibold">98% accuracy</span> in extracted datasets for downstream applications</li>
                <li>Developed a React-based calendar surfacing cultural events across campus; adopted by <span className="font-semibold">1,300+ students and faculty</span>, strengthening accessibility and engagement</li>
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
                <li>Trained nnU-Net models on MRI data from <span className="font-semibold">85 subjects</span> with 5-fold cross-validation, achieving Dice score <span className="font-semibold">0.52 ± 0.05</span> for epilepsy lesion segmentation; results published in <a href="https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1601815/abstract" className="underline" target="_blank" rel="noreferrer">Frontiers in Artificial Intelligence</a></li>
                <li>Designed an automated slice selection method ranking MRI slices by voxel intensity to highlight lesion-rich regions; improved lesion detection accuracy by <span className="font-semibold">30%</span> for FCD Type II</li>
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