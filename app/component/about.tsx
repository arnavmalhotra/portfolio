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
                <p className="text-sm text-gray-400 dark:text-gray-600">Present</p>
              </div>
              <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                <li>Currently working as a software engineering intern</li>
              </ul>
            </div>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900/70 transition-colors dark:bg-zinc-200 dark:text-gray-900">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-white dark:text-gray-900">Lead Software Developer</h3>
                <p className="text-sm">OneTimeTable • Remote</p>
                <p className="text-sm text-gray-400 dark:text-gray-600">Jan 2025 - Present</p>
              </div>
              <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                <li>Developed a full-stack student dashboard using FastAPI, MongoDB, and Next.js; drove adoption to 50+ users across 4 universities and achieved 35+ companion Chrome extension installs</li>
                <li>Automated course data extraction via LLM pipelines, achieving 95% accuracy on schedules and syllabi, and added multi-format export options that integrate with external calendar platforms, saving students up to 3 hours per semester</li>
                <li>Enhanced performance and usability via Redis caching, reducing average load times by 60%</li>
              </ul>
            </div>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900/70 transition-colors dark:bg-zinc-200 dark:text-gray-900">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-white dark:text-gray-900">Software Developer</h3>
                <p className="text-sm">York University • Toronto, ON</p>
                <p className="text-sm text-gray-400 dark:text-gray-600">Oct 2024 - April 2025</p>
              </div>
              <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                <li>Developed and deployed a full-stack calendar application that surfaces diversity events using FastAPI, MongoDB, and React; achieved adoption by 200+ faculty and staff</li>
                <li>Automated content generation via Selenium scraping across 10+ sources and leveraged LLMs for description generation, cutting manual curation effort by 90%</li>
              </ul>
            </div>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900/70 transition-colors dark:bg-zinc-200 dark:text-gray-900">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-white dark:text-gray-900">Software Developer Intern</h3>
                <p className="text-sm">Parcon India Private Limited • Kolkata, India</p>
                <p className="text-sm text-gray-400 dark:text-gray-600">Jul 2024 - Sep 2024</p>
              </div>
              <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                <li>Created C/Python automation scripts integrated with Excel and ERP systems, transforming manual document workflows handling thousands of invoices and delivery orders monthly</li>
                <li>Automated document signing and uploading, leading to 90+ weekly staff-hours saved, elimination of administrative errors, and faster processing</li>
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
                <li>Enhanced transparency in AI decision-making for medical applications via research into hybrid BCos-KAN architectures for MRI segmentation and explainable EEG seizure-detection pipelines</li>
                <li>Engineered lightweight CNN-transformer models for mobile image enhancement, achieving DSLR-quality output while reducing model size by 50% compared to baseline architectures</li>
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
                {["PostgreSQL", "MongoDB", "Redis"].map((skill) => (
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