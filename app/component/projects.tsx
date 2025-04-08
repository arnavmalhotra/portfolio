import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tech: string[];
  points: string[];
  media?: {
    type: "image" | "video";
    url: string;
    alt?: string;
  };
  index: number;
}

const ProjectCard = ({ title, description, link, tech, points, media, index }: ProjectCardProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      className="group relative bg-zinc-900/50 backdrop-blur-md rounded-lg overflow-hidden hover:bg-zinc-900/70 transition-all cursor-pointer dark:bg-zinc-200 dark:text-gray-900"
      whileHover={{ y: -4 }}
    >
      {media && (
        <div className="relative w-full overflow-hidden">
          {media.type === "image" ? (
            <div className="relative w-full">
              <Image
                src={media.url}
                alt={media.alt || title}
                width={1920}
                height={1080}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105 transform-gpu"
                style={{ transformOrigin: 'center center' }}
                priority={index === 0}
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-zinc-200/50" />
            </div>
          ) : (
            <div className="relative w-full">
              <video
                src={media.url}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105 transform-gpu"
                style={{ transformOrigin: 'center center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-zinc-200/50" />
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-white dark:text-gray-900 group-hover:text-white/90 dark:group-hover:text-gray-900/90 transition-colors">{title}</h3>
          <HiExternalLink className="w-5 h-5 text-gray-400 dark:text-gray-600 group-hover:text-white dark:group-hover:text-gray-900 transition-colors" />
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-600 mt-2 group-hover:text-gray-300 dark:group-hover:text-gray-700 transition-colors">{description}</p>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-gray-300 dark:bg-zinc-300 dark:text-gray-900 group-hover:bg-zinc-700/80 dark:group-hover:bg-zinc-400/80 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-300 dark:text-gray-700">
            {points.map((point, i) => (
              <li key={i} className="group-hover:text-gray-200 dark:group-hover:text-gray-800 transition-colors">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.a>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "SuperchargedNotes",
      description: "AI platform leveraging OCR to convert 5+ note formats into structured markdown.",
      link: "https://superchargednotes.com",
      tech: ["FastAPI", "PostgreSQL", "Next.js", "TypeScript"],
      points: [
        "Built full-stack OCR platform converting 5+ note formats to markdown with 90% accuracy.",
        "Created AI study tools (quizzes, flashcards, summaries) reducing prep time by 40%."
      ],
      media: {
        type: "image" as const,
        url: "/projects/superchargednotes.png",
        alt: "SuperchargedNotes Platform"
      }
    },
    {
      title: "OneTimeTable",
      description: "A unified dashboard for students to manage course schedules and academic planning",
      link: "https://onetimetable.org",
      tech: ["FastAPI", "MongoDB", "Next.js", "Redis"],
      points: [
        "Developed student dashboard, achieving 50+ users & 35+ extension installs.",
        "Automated data extraction using LLMs (95% accuracy), saving students 3 hrs/semester.",
        "Improved performance with Redis caching, cutting load times by 60%."
      ],
      media: {
        type: "image" as const,
        url: "/projects/onetimetable.png",
        alt: "OneTimeTable Dashboard"
      }
    },
    {
      title: "INeedHelp@YorkU",
      description: "Centralized platform for student support services discovery",
      link: "https://ineedhelp.yorku.dev",
      tech: ["React", "FastAPI", "PostgreSQL", "JWT Auth"],
      points: [
        "Built platform for 80+ university services, attracting 1000+ visits & 50+ recurring users.",
        "Reduced student search time for support resources by 25%."
      ],
      media: {
        type: "image" as const,
        url: "/projects/ineedhelp.png",
        alt: "INeedHelp@YorkU Platform"
      }
    },
    {
      title: "York University Calendar Project",
      description: "Diversity calendar showcasing religious and cultural events",
      link: "https://dedi.eecs.yorku.ca",
      tech: ["FastAPI", "React", "MongoDB", "Selenium", "LLMs"],
      points: [
        "Deployed diversity events calendar, adopted by 200+ faculty/staff.",
        "Automated content generation via scraping & LLMs, reducing curation effort by 90%."
      ],
      media: {
        type: "image" as const,
        url: "/projects/calendar.png",
        alt: "York University Calendar"
      }
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid gap-6 sm:gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </motion.div>
    </div>
  );
} 