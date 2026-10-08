import React from "react";
import { Metadata } from "next";
import {
  PageContainer,
  SectionLabel,
  TechnologyBadge,
  GithubIcon,
} from "@/components";
import {
  Code2,
  BookOpen,
  Wrench,
  Compass,
  Sparkles,
  Layers,
  Database,
  Terminal,
  Cpu,
  Globe,
  Flame,
  Cloud,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Verified technical skills, programming languages, core CS concepts, and developer tools of Khushi Sharma.",
};

const languages = ["JavaScript", "TypeScript", "Python", "C++"];

const frontendAndMobile = [
  "React.js",
  "Next.js",
  "React Native",
  "HTML/CSS",
  "Tailwind CSS",
];

const backend = ["Node.js", "Express.js"];

const databases = ["MongoDB", "Firebase"];

const tools = ["Git", "GitHub", "Postman", "Vercel"];

const coreCS = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
];

const currentlyExploring = [
  "Backend development",
  "Cloud",
  "Scalable software engineering practices",
  "Mobile development",
  "AI-powered software solutions",
];

export default function SkillsPage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-16 sm:space-y-24">
      {/* Header Section */}
      <section>
        <PageContainer>
          <div className="max-w-3xl mb-12">
            <SectionLabel text="SKILLS" className="mb-4" />
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#19221E] mb-4">
              Tools, technologies<br />
              <span className="text-[#234E46] italic">and concepts I work with.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#576560] leading-relaxed font-normal">
              "A combination of technical skills, problem-solving abilities and continuous learning."
            </p>
          </div>

          {/* Three Major Card Groups */}
          <div className="space-y-10">
            {/* Group 1: Technical Skills */}
            <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E6E1D7] shadow-xs space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b border-[#E6E1D7]">
                <div className="p-3 rounded-2xl bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5]">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-medium text-[#19221E]">
                    Technical Skills
                  </h2>
                  <p className="text-xs text-[#576560]">
                    Programming languages, frontend, mobile, backend & databases
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Languages */}
                <div className="space-y-3">
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#234E46]">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((skill) => (
                      <TechnologyBadge key={skill} name={skill} size="md" />
                    ))}
                  </div>
                </div>

                {/* Frontend & Mobile */}
                <div className="space-y-3">
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#234E46]">
                    Frontend & Mobile
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendAndMobile.map((skill) => (
                      <TechnologyBadge key={skill} name={skill} size="md" />
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="space-y-3">
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#234E46]">
                    Backend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {backend.map((skill) => (
                      <TechnologyBadge key={skill} name={skill} size="md" />
                    ))}
                  </div>
                </div>

                {/* Databases */}
                <div className="space-y-3">
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#234E46]">
                    Databases
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {databases.map((skill) => (
                      <TechnologyBadge key={skill} name={skill} size="md" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Group 2: Core CS Concepts */}
            <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E6E1D7] shadow-xs space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#E6E1D7]">
                <div className="p-3 rounded-2xl bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-medium text-[#19221E]">
                    Core CS Concepts
                  </h2>
                  <p className="text-xs text-[#576560]">
                    Computer science principles & theoretical foundation
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {coreCS.map((concept) => (
                  <div
                    key={concept}
                    className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D7] flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#234E46] shrink-0" />
                    <span className="text-sm font-medium text-[#19221E]">
                      {concept}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Group 3: Tools & Platforms */}
            <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E6E1D7] shadow-xs space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#E6E1D7]">
                <div className="p-3 rounded-2xl bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5]">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-medium text-[#19221E]">
                    Tools & Platforms
                  </h2>
                  <p className="text-xs text-[#576560]">
                    Version control, API testing, and deployment platforms
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#FAF8F5] border border-[#E6E1D7] text-sm font-medium text-[#19221E]"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#234E46]" />
                    <span>{tool}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Currently Exploring Section */}
      <section>
        <PageContainer>
          <div className="bg-[#F4F1EA]/70 rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E6E1D7] space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5]">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium text-[#19221E]">
                  Currently Exploring
                </h3>
                <p className="text-xs text-[#576560]">
                  Areas of ongoing learning & software engineering study
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentlyExploring.map((area) => (
                <div
                  key={area}
                  className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E6E1D7] flex items-center gap-3 shadow-2xs"
                >
                  <Sparkles className="w-4 h-4 text-[#234E46] shrink-0" />
                  <span className="text-sm font-medium text-[#19221E]">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
