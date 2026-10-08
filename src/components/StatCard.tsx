import React from "react";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#FFFFFF] rounded-2xl p-6 border border-[#E6E1D7] shadow-sm hover:border-[#234E46]/30 transition-all duration-300 ${className}`}
    >
      <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#234E46] mb-2 tracking-tight">
        {value}
      </div>
      <div className="text-base font-medium text-[#19221E] mb-1">
        {label}
      </div>
      {description && (
        <p className="text-xs sm:text-sm text-[#576560] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
