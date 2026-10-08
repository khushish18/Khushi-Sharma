import React from "react";
import { Metadata } from "next";
import {
  PageContainer,
  SectionLabel,
  GithubIcon,
  LinkedinIcon,
} from "@/components";
import {
  MapPin,
  GraduationCap,
  Mail,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Khushi Sharma — Software Developer & B.Tech Student at VIPS-TC.",
};

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-16 sm:space-y-24">
      {/* About Hero Section */}
      <section>
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            {/* Left Side: Editorial Intro & Identity Details */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <SectionLabel text="About Me" className="mb-6" />

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#19221E] leading-[1.12] mb-6">
                Curious mind,<br />
                <span className="text-[#234E46] italic">building useful things.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#576560] leading-relaxed font-normal mb-8 max-w-xl">
                I'm Khushi Sharma, a software developer who enjoys working at the intersection of AI, full-stack development and mobile applications. I like turning ideas into practical solutions, learning new technologies and collaborating on projects that create real-world impact.
              </p>

              {/* Contact & Identity Details List */}
              <div className="w-full pt-6 border-t border-[#E6E1D7] grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#19221E]">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FFFFFF] border border-[#E6E1D7]">
                  <span className="p-2 rounded-lg bg-[#EFF3EC] text-[#234E46]">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span className="font-medium text-[#19221E]">Delhi, India</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FFFFFF] border border-[#E6E1D7]">
                  <span className="p-2 rounded-lg bg-[#EFF3EC] text-[#234E46]">
                    <GraduationCap className="w-4 h-4" />
                  </span>
                  <span className="font-medium text-[#19221E] text-xs sm:text-sm">
                    B.Tech @ VIPS-TC
                  </span>
                </div>

                <a
                  href="mailto:khushisharma061205@gmail.com"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-[#FFFFFF] border border-[#E6E1D7] hover:border-[#234E46]/40 transition-colors"
                >
                  <span className="p-2 rounded-lg bg-[#EFF3EC] text-[#234E46]">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span className="font-medium text-xs sm:text-sm truncate group-hover:text-[#234E46] transition-colors">
                    khushisharma061205@gmail.com
                  </span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/khushish18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group flex items-center justify-between p-3 rounded-xl bg-[#FFFFFF] border border-[#E6E1D7] hover:border-[#234E46]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="p-2 rounded-lg bg-[#EFF3EC] text-[#234E46]">
                        <GithubIcon className="w-4 h-4" />
                      </span>
                      <span className="font-medium text-sm group-hover:text-[#234E46] transition-colors">
                        GitHub
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#576560] group-hover:text-[#234E46]" />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group flex items-center justify-between p-3 rounded-xl bg-[#FFFFFF] border border-[#E6E1D7] hover:border-[#234E46]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="p-2 rounded-lg bg-[#EFF3EC] text-[#234E46]">
                        <LinkedinIcon className="w-4 h-4" />
                      </span>
                      <span className="font-medium text-sm group-hover:text-[#234E46] transition-colors">
                        LinkedIn
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#576560] group-hover:text-[#234E46]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Vertical Education Timeline Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E6E1D7] shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#E6E1D7]">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-xl bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5]">
                      <GraduationCap className="w-5 h-5" />
                    </span>
                    <div>
                      <h2 className="font-serif text-2xl font-medium text-[#19221E]">
                        Education
                      </h2>
                      <p className="text-xs text-[#576560]">Academic timeline</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#EFF3EC] text-[#234E46] text-xs font-semibold border border-[#D8E0D5]">
                    CGPA 9.412
                  </span>
                </div>

                {/* Vertical Timeline Items */}
                <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#E6E1D7]">
                  {/* Timeline 1: VIPS-TC */}
                  <div className="relative">
                    <span className="absolute -left-[25px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#234E46] ring-4 ring-[#EFF3EC]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="font-serif text-lg font-semibold text-[#19221E]">
                        Vivekananda Institute of Professional Studies — Technical Campus
                      </h3>
                      <span className="text-xs text-[#576560] bg-[#F4F1EA] px-2.5 py-0.5 rounded-full font-medium border border-[#E6E1D7]">
                        Aug 2024 - July 2028
                      </span>
                    </div>
                    <p className="text-sm font-medium text-[#234E46] mb-1">
                      B.Tech in Industrial Internet of Things (IIOT)
                    </p>
                    <p className="text-xs text-[#576560] leading-relaxed">
                      Maintaining an outstanding cumulative CGPA of <strong className="text-[#19221E] font-semibold">9.412</strong> across undergraduate engineering coursework.
                    </p>
                  </div>

                  {/* Timeline 2: Little Flowers School */}
                  <div className="relative">
                    <span className="absolute -left-[25px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#576560] ring-4 ring-[#F4F1EA]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="font-serif text-lg font-semibold text-[#19221E]">
                        Little Flowers Public Senior Secondary School
                      </h3>
                      <span className="text-xs text-[#576560] bg-[#F4F1EA] px-2.5 py-0.5 rounded-full font-medium border border-[#E6E1D7]">
                        Apr 2020 - Mar 2023
                      </span>
                    </div>
                    <p className="text-sm font-medium text-[#576560] mb-2">
                      CBSE Board Education
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-lg bg-[#F4F1EA] text-[#19221E] font-medium border border-[#E6E1D7]">
                        Class X: <strong>93%</strong>
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-[#F4F1EA] text-[#19221E] font-medium border border-[#E6E1D7]">
                        Class XII: <strong>81.6%</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Lower Section: 3 Core Cards Grid */}
      <section>
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: What Drives Me */}
            <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E6E1D7] shadow-sm flex flex-col justify-between hover:border-[#234E46]/30 transition-all">
              <div>
                <h3 className="font-serif text-xl font-medium text-[#19221E] mb-4">
                  What Drives Me
                </h3>
                <ul className="space-y-3 text-sm text-[#576560]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#234E46] shrink-0 font-bold select-none">•</span>
                    <span>Solving real-world problems</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#234E46] shrink-0 font-bold select-none">•</span>
                    <span>Learning new technologies</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#234E46] shrink-0 font-bold select-none">•</span>
                    <span>Working with like-minded people</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#234E46] shrink-0 font-bold select-none">•</span>
                    <span>Creating meaningful solutions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Quick Facts */}
            <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E6E1D7] shadow-sm flex flex-col justify-between hover:border-[#234E46]/30 transition-all">
              <div>
                <h3 className="font-serif text-xl font-medium text-[#19221E] mb-4">
                  Quick Facts
                </h3>
                <ul className="space-y-3 text-sm text-[#576560]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#234E46] shrink-0 font-bold select-none">•</span>
                    <span><strong>120+ DSA problems</strong> solved on LeetCode</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#234E46] shrink-0 font-bold select-none">•</span>
                    <span><strong>Patent published</strong> for SafeOpen</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#234E46] shrink-0 font-bold select-none">•</span>
                    <span><strong>National Finalist</strong> — Hack Vriksh Hackathon 2025</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#234E46] shrink-0 font-bold select-none">•</span>
                    <span><strong>Best Innovation Award</strong> — Web of Innovation Hackathon</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: Currently Exploring */}
            <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E6E1D7] shadow-sm flex flex-col justify-between hover:border-[#234E46]/30 transition-all">
              <div>
                <h3 className="font-serif text-xl font-medium text-[#19221E] mb-2">
                  Currently Exploring
                </h3>
                <p className="text-xs text-[#576560] mb-4">
                  Areas of ongoing learning & study:
                </p>
                <ul className="space-y-3 text-sm text-[#576560]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#234E46] shrink-0 font-bold select-none">•</span>
                    <span>Backend development & cloud</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#234E46] shrink-0 font-bold select-none">•</span>
                    <span>Scalable system design</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#234E46] shrink-0 font-bold select-none">•</span>
                    <span>Mobile app development</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#234E46] shrink-0 font-bold select-none">•</span>
                    <span>AI applications in healthcare and intelligent systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Bottom Editorial Quote Section */}
      <section>
        <PageContainer>
          <div className="relative bg-[#F4F1EA]/70 rounded-3xl p-8 sm:p-12 md:p-16 border border-[#E6E1D7] text-center overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <span className="font-serif text-5xl text-[#234E46]/30 block leading-none">
                “
              </span>
              <blockquote className="font-serif text-2xl sm:text-3xl text-[#19221E] font-medium italic leading-relaxed">
                I enjoy learning, building and being part of something that creates a positive impact.
              </blockquote>
              <p className="text-xs uppercase tracking-widest text-[#576560] font-semibold pt-2">
                — Khushi Sharma
              </p>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
