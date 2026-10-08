import React from "react";
import { SectionLabel } from "./SectionLabel";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = "left",
  className = "",
}) => {
  const alignClasses =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col mb-10 md:mb-14 ${alignClasses} ${className}`}>
      {label && <SectionLabel text={label} className="mb-4" />}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#19221E] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#576560] max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
