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
                <p className="text-sm">Kuperman Investments • Remote</p>
                <p className="text-sm text-gray-400 dark:text-gray-600">May 2026 – Present</p>
              </div>
              <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                <li>Designed and deployed the firm&apos;s core market-data platform on AWS (S3/Parquet, DuckDB), creating a single source of truth over <span className="font-semibold">3.2M+ records</span> with automated freshness alerting</li>
                <li>Engineered a fault-tolerant distributed collection system in Go (<span className="font-semibold">100+ concurrent workers</span>) feeding real-time data into pricing and trading models</li>
                <li>Eliminated silent data gaps with deduplication, automated backfill, and dead-letter handling, guaranteeing correctness under partial node failures</li>
              </ul>
            </div>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900/70 transition-colors dark:bg-zinc-200 dark:text-gray-900">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-white dark:text-gray-900">Software Engineering Intern</h3>
                <p className="text-sm">Quarkle.ai • Remote</p>
                <p className="text-sm text-gray-400 dark:text-gray-600">Jul 2025 – Sep 2025</p>
              </div>
              <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                <li>Cut median retrieval latency by <span className="font-semibold">35%</span> on a real-time AI document-Q&amp;A pipeline by adding websocket streaming and request-level caching to the Python/FastAPI backend</li>
                <li>Optimized a Next.js workspace for long-form documents with memoized rendering, batched state updates, and incremental loading, improving responsiveness by <span className="font-semibold">40%</span></li>
                <li>Grew weekly shared-document usage <span className="font-semibold">2.1x</span> across a <span className="font-semibold">500+ user</span> beta by shipping publishing and collaboration workflows with permission controls</li>
              </ul>
            </div>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900/70 transition-colors dark:bg-zinc-200 dark:text-gray-900">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-white dark:text-gray-900">Software Development Contractor</h3>
                <p className="text-sm">Markis Investments • Remote</p>
                <p className="text-sm text-gray-400 dark:text-gray-600">Apr 2025 – Jun 2025</p>
              </div>
              <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                <li>Delivered an end-to-end resort-management suite (Next.js 15, React 19, TypeScript, Supabase/PostgreSQL) — a direct-booking website, operations dashboard, and guest portals — replacing manual spreadsheet workflows</li>
                <li>Built the operations dashboard with month-over-month and year-over-year financial analytics (Chart.js), reservation and guest-profile management, and Hostaway API sync into PostgreSQL</li>
                <li>Architected a multi-tenant QR-based event check-in system (<span className="font-semibold">7 role-based access tiers</span>, <span className="font-semibold">80+ API routes</span>) that cut average guest processing from <span className="font-semibold">2 minutes</span> to under <span className="font-semibold">20 seconds</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900/70 transition-colors dark:bg-zinc-200 dark:text-gray-900">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-white dark:text-gray-900">Software Developer</h3>
                <p className="text-sm">York University • Toronto, ON</p>
                <p className="text-sm text-gray-400 dark:text-gray-600">Oct 2024 – Apr 2025</p>
              </div>
              <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                <li>Engineered a data scraping pipeline aggregating from <span className="font-semibold">20+ sources</span> with validation, retries, and exception handling, ensuring <span className="font-semibold">98% accuracy</span> in extracted datasets</li>
                <li>Built a React-based campus events calendar adopted by <span className="font-semibold">1,300+ students and faculty</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-900/70 transition-colors dark:bg-zinc-200 dark:text-gray-900">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium text-white dark:text-gray-900">Research Fellow</h3>
                <p className="text-sm">Indian Institute of Technology, Roorkee • Roorkee, India</p>
                <p className="text-sm text-gray-400 dark:text-gray-600">May 2024 – Jul 2024</p>
              </div>
              <ul className="list-disc list-inside text-sm space-y-2 ml-2">
                <li>Trained nnU-Net models on MRI data from <span className="font-semibold">85 subjects</span> with 5-fold cross-validation, achieving Dice score <span className="font-semibold">0.52 ± 0.05</span> for epilepsy lesion segmentation; results published in <a href="https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1601815/abstract" className="underline" target="_blank" rel="noreferrer">Frontiers in Artificial Intelligence</a></li>
                <li>Designed an automated slice-selection method ranking MRI slices by voxel intensity, improving lesion detection accuracy by <span className="font-semibold">30%</span> for FCD Type II</li>
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
                {["Go", "Python", "Java", "C", "TypeScript", "JavaScript", "SQL"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-zinc-800 rounded-full text-sm dark:text-gray-900 dark:bg-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2 dark:text-gray-900">Distributed &amp; Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS (EC2, S3, Lambda)", "gRPC", "Raft", "Prometheus", "Docker", "Linux", "Parquet"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-zinc-800 rounded-full text-sm dark:text-gray-900 dark:bg-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2 dark:text-gray-900">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["FastAPI", "Next.js", "React", "Node.js", "Flask"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-zinc-800 rounded-full text-sm dark:text-gray-900 dark:bg-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2 dark:text-gray-900">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "DuckDB", "Redis", "MongoDB", "SQLite"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-zinc-800 rounded-full text-sm dark:text-gray-900 dark:bg-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2 dark:text-gray-900">Libraries/Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["PyTorch", "NumPy", "Pandas", "Playwright", "Git", "Tailwind CSS"].map((skill) => (
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
