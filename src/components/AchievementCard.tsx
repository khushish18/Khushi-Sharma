import React from "react";
import { Award, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

export interface AchievementItem {
  id: string;
  title: string;
  subtitle?: string;
  institution?: string;
  period?: string;
  badge?: string;
  highlights?: string[];
  type?: "education" | "academic" | "cert" | "general";
}

interface AchievementCardProps {
  item: AchievementItem;
  className?: string;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({
  item,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#E6E1D7] shadow-sm hover:shadow-md hover:border-[#234E46]/30 transition-all duration-300 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-[#E6E1D7]/60">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5]">
            {item.type === "education" ? (
              <GraduationCap className="w-5 h-5" />
            ) : (
              <Award className="w-5 h-5" />
            )}
          </div>
          <div>
            <h3 className="font-serif text-xl font-medium text-[#19221E]">
              {item.title}
            </h3>
            {item.institution && (
              <p className="text-sm text-[#576560] font-medium mt-0.5">
                {item.institution}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          {item.period && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4F1EA] text-[#576560] text-xs font-medium border border-[#E6E1D7]">
              <Calendar className="w-3.5 h-3.5 text-[#234E46]" />
              {item.period}
            </span>
          )}
          {item.badge && (
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#EFF3EC] text-[#234E46] text-xs font-semibold border border-[#D8E0D5]">
              {item.badge}
            </span>
          )}
        </div>
      </div>

      {item.subtitle && (
        <p className="text-sm sm:text-base text-[#19221E] font-medium leading-relaxed mb-4">
          {item.subtitle}
        </p>
      )}

      {item.highlights && item.highlights.length > 0 && (
        <ul className="space-y-2 mt-3">
          {item.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-[#576560]">
              <CheckCircle2 className="w-4 h-4 text-[#234E46] shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
