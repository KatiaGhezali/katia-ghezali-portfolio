import Link from "next/link";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-purple-950/20">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#151326]">
        <div
          role="img"
          aria-label={`${title} project preview`}
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url("${imgUrl}")` }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b18]/80 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-4 flex flex-wrap items-center justify-center gap-3 px-4 sm:translate-y-2 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
          {gitUrl && (
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source code on GitHub`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#0c0b18]/90 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-purple-400/60 hover:bg-purple-500/20"
            >
              <FaCode />
              Source Code
            </a>
          )}

          {previewUrl && (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title} live demo`}
              className="inline-flex items-center gap-2 rounded-lg bg-purple-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-purple-400"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-purple-300">
          {title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-gray-400 sm:text-base">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-4 border-t border-white/[0.08] pt-4 sm:hidden">
          {gitUrl && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-purple-300"
            >
              <FaCode />
              Source Code
            </Link>
          )}

          {previewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-purple-300"
            >
              <FaExternalLinkAlt />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
