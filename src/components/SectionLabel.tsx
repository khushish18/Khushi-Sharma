import React from "react";

interface SectionLabelProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  text,
  icon,
  className = "",
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF3EC] border border-[#D8E0D5] text-[#234E46] text-xs tracking-wider uppercase font-medium ${className}`}
    >
      {icon ? (
        icon
      ) : (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 1C6 1 3.5 3.5 3.5 6C3.5 7.38071 4.61929 8.5 6 8.5C7.38071 8.5 8.5 7.38071 8.5 6C8.5 3.5 6 1 6 1Z"
            fill="currentColor"
          />
          <path
            d="M6 8.5V11"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      )}
      <span>{text}</span>
    </div>
  );
};
