import React from "react";
import Image from "next/image";
import { getAssetPath } from "@/utils/basePath";
import {
  PageContainer,
  SectionHeading,
  Button,
} from "@/components";
import {
  GraduationCap,
  Code2,
  FolderGit2,
  Award,
} from "lucide-react";

const technologyCategories = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    category: "Frontend & Mobile",
    items: ["React.js", "Next.js", "React Native", "HTML/CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "Firebase"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Vercel"],
  },
];

export default function HomePage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-20 sm:space-y-28">
      {/* Editorial Hero Section */}
      <section className="relative overflow-hidden">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Top Uppercase Label with Thin Muted Teal Line */}
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-[1.5px] bg-[#234E46]" />
                <span className="text-xs uppercase tracking-widest font-semibold text-[#234E46]">
                  SOFTWARE DEVELOPER
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#19221E] leading-[1.12] mb-6">
                Hi, I'm <span className="text-[#234E46] italic">Khushi Sharma</span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-[#576560] leading-relaxed max-w-xl font-normal mb-8">
                I build AI-powered and full-stack software solutions with a focus on real-world applications in healthcare, intelligent systems and everyday life. Currently exploring full-stack and mobile development while learning and building one project at a time.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/projects" variant="primary" size="lg" icon="arrow">
                  View My Work
                </Button>
                <Button
                  href="https://github.com/khushish18"
                  external
                  variant="outline"
                  size="lg"
                  icon="external"
                >
                  GitHub
                </Button>
              </div>
            </div>

            {/* Right Column: Clean Editorial Photograph Container */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Main Photograph Frame */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#E6E1D7] bg-[#F4F1EA] shadow-md">
                  <Image
                    src={getAssetPath("/images/khushi.jpg")}
                    alt="Khushi Sharma - Software Developer"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Home Statistics Card */}
      <section>
        <PageContainer>
          <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E6E1D7] shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E6E1D7]">
              {/* Stat 1: CGPA */}
              <div className="flex flex-col justify-between pt-4 sm:pt-0 sm:px-4 first:pt-0 first:px-0">
                <div className="p-3 rounded-xl bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5] w-fit mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-medium text-[#234E46] mb-1">
                    9.412
                  </div>
                  <div className="text-sm font-semibold text-[#19221E]">CGPA</div>
                  <p className="text-xs text-[#576560] mt-1 leading-relaxed">
                    B.Tech @ VIPS-TC
                  </p>
                </div>
              </div>

              {/* Stat 2: DSA Problems */}
              <div className="flex flex-col justify-between pt-6 sm:pt-0 sm:px-4">
                <div className="p-3 rounded-xl bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5] w-fit mb-4">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-medium text-[#234E46] mb-1">
                    120+
                  </div>
                  <div className="text-sm font-semibold text-[#19221E]">
                    DSA Problems
                  </div>
                  <p className="text-xs text-[#576560] mt-1 leading-relaxed">
                    Solved on LeetCode
                  </p>
                </div>
              </div>

              {/* Stat 3: Major Projects */}
              <div className="flex flex-col justify-between pt-6 sm:pt-0 sm:px-4">
                <div className="p-3 rounded-xl bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5] w-fit mb-4">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-medium text-[#234E46] mb-1">
                    4
                  </div>
                  <div className="text-sm font-semibold text-[#19221E]">
                    Major Projects
                  </div>
                  <p className="text-xs text-[#576560] mt-1 leading-relaxed">
                    Sahayak, HerVeda, SafeOpen, Budget Eagle
                  </p>
                </div>
              </div>

              {/* Stat 4: Patent Published */}
              <div className="flex flex-col justify-between pt-6 sm:pt-0 sm:px-4">
                <div className="p-3 rounded-xl bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5] w-fit mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-medium text-[#234E46] mb-1">
                    Patent Published
                  </div>
                  <div className="text-sm font-semibold text-[#19221E]">
                    SafeOpen
                  </div>
                  <p className="text-xs text-[#576560] mt-1 leading-relaxed">
                    Intelligent Vehicle Safety System
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Technologies Section */}
      <section>
        <PageContainer>
          <SectionHeading
            label="Tech Stack"
            title="Technologies I Work With"
            subtitle="Core frameworks, programming languages, and tools utilized across full-stack & mobile development."
          />

          <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E6E1D7] shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {technologyCategories.map((cat, idx) => (
                <div
                  key={cat.category}
                  className={`space-y-2.5 pb-6 md:pb-0 border-b md:border-b-0 border-[#E6E1D7] last:border-b-0 last:pb-0 ${
                    idx === technologyCategories.length - 1 && technologyCategories.length % 2 !== 0
                      ? "md:col-span-2"
                      : ""
                  }`}
                >
                  <h3 className="font-serif text-lg font-semibold text-[#19221E] tracking-tight">
                    {cat.category}
                  </h3>
                  <p className="text-base text-[#576560] leading-relaxed font-normal">
                    {cat.items.join("  ·  ")}
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
