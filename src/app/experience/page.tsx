import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { getAssetPath } from "@/utils/basePath";
import {
  PageContainer,
  SectionLabel,
  TechnologyBadge,
  Button,
} from "@/components";
import {
  Building2,
  Calendar,
  MapPin,
  Code2,
  Layers,
  Cpu,
  CheckCircle2,
  Sparkles,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Software Development Internship experience of Khushi Sharma at DRDO, Solid State Physics Laboratory (SSPL).",
};

const keyContributions = [
  {
    title: "Frontend Development",
    description: "Built responsive modules for Budget Eagle using React.",
    icon: Code2,
  },
  {
    title: "API Integration",
    description:
      "Integrated REST APIs for budgeting, portfolio tracking, stock market intelligence and AI-powered financial insights.",
    icon: Layers,
  },
  {
    title: "Reusable UI & Optimization",
    description: "Built reusable React components and optimized responsive UI.",
    icon: Cpu,
  },
];

const techStack = ["React", "REST APIs", "JavaScript", "Responsive UI"];

const learnings = [
  {
    title: "Practical experience",
    detail: "Building real-world software modules",
  },
  {
    title: "API integration",
    detail: "Working with asynchronous API-driven interfaces",
  },
  {
    title: "Reusable development",
    detail: "Creating reusable React components",
  },
  {
    title: "Responsive design",
    detail: "Optimizing interfaces across screen sizes",
  },
];

export default function ExperiencePage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-16 sm:space-y-24">
      {/* Header & Main Experience Card */}
      <section>
        <PageContainer>
          {/* Top Label & Main Heading */}
          <div className="max-w-3xl mb-12">
            <SectionLabel text="EXPERIENCE" className="mb-4" />
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#19221E] mb-3">
              Software Development Intern
            </h1>
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#234E46] mb-6">
              DRDO, Solid State Physics Laboratory (SSPL)
            </h2>

            {/* Meta Tags Bar */}
            <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-[#576560]">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E6E1D7] text-[#19221E] font-medium shadow-2xs">
                <Calendar className="w-3.5 h-3.5 text-[#234E46]" />
                Jun 2026 – Aug 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E6E1D7] text-[#19221E] font-medium shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#234E46]" />
                New Delhi, India • On-site
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF3EC] text-[#234E46] font-semibold border border-[#D8E0D5]">
                <Building2 className="w-3.5 h-3.5" />
                DRDO / SSPL Internship
              </span>
            </div>
          </div>

          {/* Main Experience Hero Card */}
          <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E6E1D7] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: About the Role & Tech Stack */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#19221E] mb-4">
                    About the Role
                  </h3>
                  <p className="text-base sm:text-lg text-[#576560] leading-relaxed font-normal">
                    "Developed responsive frontend modules for Budget Eagle, an AI-powered personal finance platform using React, integrating REST APIs for budgeting, portfolio tracking, stock market intelligence and AI-powered financial insights."
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-[#E6E1D7]">
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#19221E] mb-3">
                    Verified Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <TechnologyBadge key={tech} name={tech} size="md" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: DRDO/SSPL Laboratory Visual */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E6E1D7] bg-[#F4F1EA] shadow-xs group">
                  <Image
                    src={getAssetPath("/images/drdo_sspl.png")}
                    alt="DRDO Solid State Physics Laboratory Research Workstation Environment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#19221E]/30 via-transparent to-transparent opacity-50" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#FAF8F5]/90 backdrop-blur-md border border-[#E6E1D7] text-xs font-semibold text-[#19221E]">
                    Solid State Physics Laboratory (SSPL), DRDO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Key Contributions Section */}
      <section>
        <PageContainer>
          <div className="mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#19221E]">
              Key Contributions
            </h3>
            <p className="text-sm text-[#576560] mt-1">
              Core technical modules engineered during internship tenure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyContributions.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E6E1D7] shadow-xs hover:border-[#234E46]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 rounded-2xl bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5] w-fit mb-5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-xl font-medium text-[#19221E] mb-3">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#576560] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </PageContainer>
      </section>

      {/* Learning & Takeaways Section */}
      <section>
        <PageContainer>
          <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E6E1D7]">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#234E46]" />
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#234E46]">
                Core Takeaways & Learnings
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {learnings.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E6E1D7] space-y-1.5"
                >
                  <p className="text-sm font-semibold text-[#19221E]">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#576560] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
