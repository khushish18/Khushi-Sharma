"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Achievements", href: "/achievements" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E6E1D7] shadow-xs py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#19221E] hover:text-[#234E46] transition-colors focus:outline-none focus:ring-2 focus:ring-[#234E46]/30 rounded-lg"
        >
          <span>Khushi Sharma</span>
          {/* Small minimal leaf mark */}
          <span
            className="p-1 rounded-full bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5] group-hover:bg-[#234E46] group-hover:text-white transition-colors duration-200"
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#FFFFFF]/70 backdrop-blur-xs px-4 py-1.5 rounded-full border border-[#E6E1D7]/80 shadow-xs">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-[#234E46] font-semibold"
                    : "text-[#576560] hover:text-[#19221E] hover:bg-[#F4F1EA]/50"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-[#234E46] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#234E46] bg-[#EFF3EC] hover:bg-[#234E46] hover:text-white border border-[#D8E0D5] hover:border-[#234E46] rounded-full transition-all duration-200 shadow-xs"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 text-[#19221E] hover:bg-[#EFF3EC] rounded-xl border border-[#E6E1D7] transition-colors focus:outline-none"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#FAF8F5]/98 backdrop-blur-md border-b border-[#E6E1D7] px-6 py-6 shadow-lg transition-all">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    isActive
                      ? "bg-[#EFF3EC] text-[#234E46] font-semibold border border-[#D8E0D5]"
                      : "text-[#576560] hover:text-[#19221E] hover:bg-[#F4F1EA]"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#234E46]" />}
                </Link>
              );
            })}

            <div className="mt-4 pt-4 border-t border-[#E6E1D7]">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 text-base font-medium text-white bg-[#234E46] hover:bg-[#183832] rounded-xl transition-colors shadow-sm"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
