import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 mt-16 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/arnavmalhotra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arnav-malhotra-ab424218b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:arnav196@my.yorku.ca"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Arnav Malhotra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

