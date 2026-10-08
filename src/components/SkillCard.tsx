import React from "react";
import { TechnologyBadge } from "./TechnologyBadge";
import { Icon } from "./Icon";

export interface SkillCategory {
  title: string;
  iconName: string;
  description?: string;
  skills: string[];
}

interface SkillCardProps {
  category: SkillCategory;
  className?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  category,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#E6E1D7] shadow-sm hover:shadow-md hover:border-[#234E46]/30 transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5]">
            <Icon name={category.iconName} className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-xl font-medium text-[#19221E]">
            {category.title}
          </h3>
        </div>

        {category.description && (
          <p className="text-sm text-[#576560] leading-relaxed mb-6 font-normal">
            {category.description}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#E6E1D7]/60">
        {category.skills.map((skill) => (
          <TechnologyBadge key={skill} name={skill} size="md" />
        ))}
      </div>
    </div>
  );
};
