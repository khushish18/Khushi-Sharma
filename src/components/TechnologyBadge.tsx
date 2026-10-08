import React from "react";

interface TechnologyBadgeProps {
  name: string;
  size?: "sm" | "md";
  className?: string;
}

export const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({
  name,
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3.5 py-1 text-xs sm:text-sm",
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full bg-[#F4F1EA] text-[#19221E] border border-[#E6E1D7] transition-colors duration-200 hover:border-[#234E46]/40 hover:bg-[#EFF3EC] ${sizeClasses[size]} ${className}`}
    >
      {name}
    </span>
  );
};
