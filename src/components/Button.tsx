import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  icon?: "arrow" | "external" | React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  icon,
  onClick,
  className = "",
  type = "button",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#234E46]/30 active:scale-[0.98]";

  const variantClasses = {
    primary:
      "bg-[#234E46] text-white hover:bg-[#183832] shadow-sm hover:shadow",
    secondary:
      "bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5] hover:bg-[#E2EAE0] hover:border-[#234E46]/40",
    outline:
      "bg-transparent text-[#19221E] border border-[#E6E1D7] hover:border-[#234E46] hover:text-[#234E46] bg-[#FFFFFF]/60 hover:bg-[#FFFFFF]",
    ghost:
      "bg-transparent text-[#19221E] hover:text-[#234E46] hover:bg-[#EFF3EC]/50",
  };

  const sizeClasses = {
    sm: "px-4 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };

  const renderIcon = () => {
    if (!icon) return null;
    if (icon === "external") return <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />;
    if (icon === "arrow") return <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />;
    return icon;
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} group ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          <span>{children}</span>
          {renderIcon()}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        <span>{children}</span>
        {renderIcon()}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
};
