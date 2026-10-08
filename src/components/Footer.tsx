import React from "react";
import Link from "next/link";
import { PageContainer } from "./PageContainer";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact", href: "/contact" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="mt-24 sm:mt-32 border-t border-[#E6E1D7] bg-[#F4F1EA]/60 pt-12 pb-10">
      <PageContainer>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[#E6E1D7]">
          {/* Left: Khushi Sharma Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-serif text-2xl font-medium text-[#19221E] hover:text-[#234E46] transition-colors"
          >
            <span>Khushi Sharma</span>
            <span
              className="p-1 rounded-full bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5] group-hover:bg-[#234E46] group-hover:text-white transition-colors"
              aria-hidden="true"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            </span>
          </Link>

          {/* Right: Navigation Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#576560]">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#234E46] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex items-center justify-between text-xs text-[#576560]">
          <p>© Khushi Sharma</p>
          <p className="text-[11px]">B.Tech @ VIPS-TC</p>
        </div>
      </PageContainer>
    </footer>
  );
};
