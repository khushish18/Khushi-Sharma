import React from "react";
import { ExternalLink, Folder } from "lucide-react";
import { TechnologyBadge } from "./TechnologyBadge";
import { GithubIcon } from "./GithubIcon";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: ProjectData;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = "",
}) => {
  return (
    <div
      className={`group relative bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#E6E1D7] shadow-sm hover:shadow-md hover:border-[#234E46]/30 transition-all duration-300 flex flex-col justify-between h-full ${className}`}
    >
      <div>
        {/* Header line */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="p-2.5 rounded-xl bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5]">
              <Folder className="w-5 h-5" />
            </span>
            {project.category && (
              <span className="text-xs uppercase tracking-wider text-[#576560] font-medium">
                {project.category}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="p-2 text-[#576560] hover:text-[#234E46] hover:bg-[#EFF3EC] rounded-lg transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
                className="p-2 text-[#576560] hover:text-[#234E46] hover:bg-[#EFF3EC] rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#19221E] group-hover:text-[#234E46] transition-colors mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#576560] leading-relaxed mb-6 font-normal">
          {project.description}
        </p>
      </div>

      {/* Footer / Tech Badges */}
      <div className="pt-4 border-t border-[#E6E1D7]/60 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <TechnologyBadge key={tech} name={tech} size="sm" />
        ))}
      </div>
    </div>
  );
};
