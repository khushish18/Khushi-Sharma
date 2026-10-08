import React from "react";
import { Metadata } from "next";
import { PageContainer, SectionLabel } from "@/components";
import {
  Sparkles,
  Target,
  Users,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Patents, hackathon awards, leadership roles, and technical milestones of Khushi Sharma.",
};

const valuesStrip = [
  {
    title: "Innovation",
    description: "Turning ideas into meaningful solutions.",
    icon: Sparkles,
  },
  {
    title: "Consistency",
    description: "Steady effort in learning and problem-solving.",
    icon: Target,
  },
  {
    title: "Community",
    description: "Growing and learning together.",
    icon: Users,
  },
  {
    title: "Impact",
    description: "Building technology for real-world use.",
    icon: Compass,
  },
];

export default function AchievementsPage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-16 sm:space-y-24">
      {/* Header Section */}
      <section>
        <PageContainer>
          <div className="max-w-3xl mb-12">
            <SectionLabel text="ACHIEVEMENTS" className="mb-4" />
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#19221E] mb-4">
              Milestones that<br />
              <span className="text-[#234E46] italic">shape my journey.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#576560] leading-relaxed font-normal">
              "A collection of recognitions, contributions and consistent learning experiences that motivate me to keep growing."
            </p>
          </div>

          {/* Achievement Grid: Row 1 (3 Cards) & Row 2 (2 Wider Cards) */}
          <div className="space-y-6">
            {/* First Row: 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Achievement 01: Published Patent */}
              <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E6E1D7] shadow-xs hover:border-[#234E46]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-end mb-6">
                    <span className="px-3 py-1 rounded-full bg-[#EFF3EC] text-[#234E46] text-xs font-semibold border border-[#D8E0D5]">
                      Published Patent
                    </span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#19221E] mb-2 leading-snug">
                    SafeOpen — Intelligent Vehicle Safety System
                  </h2>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#234E46] mb-4">
                    Official Patent Publication
                  </p>
                  <p className="text-sm text-[#576560] leading-relaxed">
                    "Published a patent for SafeOpen, an intelligent vehicle safety and control system."
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E6E1D7]/60 flex items-center gap-2 text-xs text-[#234E46] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#234E46]" />
                  <span>Patent Record</span>
                </div>
              </div>

              {/* Achievement 02: Best Innovation Award */}
              <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E6E1D7] shadow-xs hover:border-[#234E46]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-end mb-6">
                    <span className="px-3 py-1 rounded-full bg-[#EFF3EC] text-[#234E46] text-xs font-semibold border border-[#D8E0D5]">
                      Best Innovation
                    </span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#19221E] mb-2 leading-snug">
                    Best Innovation Award
                  </h2>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#234E46] mb-4">
                    Web of Innovation Hackathon • TechVerse
                  </p>
                  <p className="text-sm text-[#576560] leading-relaxed">
                    "Received the Best Innovation Award at the Web of Innovation Hackathon organized by TechVerse."
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E6E1D7]/60 flex items-center gap-2 text-xs text-[#234E46] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#234E46]" />
                  <span>Hackathon Recognition</span>
                </div>
              </div>

              {/* Achievement 03: National Finalist */}
              <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E6E1D7] shadow-xs hover:border-[#234E46]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-end mb-6">
                    <span className="px-3 py-1 rounded-full bg-[#EFF3EC] text-[#234E46] text-xs font-semibold border border-[#D8E0D5]">
                      National Finalist
                    </span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#19221E] mb-2 leading-snug">
                    National Finalist
                  </h2>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#234E46] mb-4">
                    Hack Vriksh Hackathon 2025
                  </p>
                  <p className="text-sm text-[#576560] leading-relaxed">
                    "Recognized as a National Finalist at Hack Vriksh Hackathon 2025."
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E6E1D7]/60 flex items-center gap-2 text-xs text-[#234E46] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#234E46]" />
                  <span>National Competition</span>
                </div>
              </div>
            </div>

            {/* Second Row: 2 Wider Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Achievement 04: Secretariat */}
              <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E6E1D7] shadow-xs hover:border-[#234E46]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-end mb-6">
                    <span className="px-3 py-1 rounded-full bg-[#EFF3EC] text-[#234E46] text-xs font-semibold border border-[#D8E0D5]">
                      Leadership & Coordination
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl font-medium text-[#19221E] mb-2 leading-snug">
                    Secretariat
                  </h2>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#234E46] mb-4">
                    Eonics Club, VSE&T
                  </p>
                  <p className="text-sm text-[#576560] leading-relaxed">
                    "Served as Secretariat, coordinating technical events and facilitating communication between organizing teams and participants."
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E6E1D7]/60 flex items-center gap-2 text-xs text-[#234E46] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#234E46]" />
                  <span>Student Leadership Role</span>
                </div>
              </div>

              {/* Achievement 05: 120+ DSA Problems */}
              <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E6E1D7] shadow-xs hover:border-[#234E46]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-end mb-6">
                    <span className="px-3 py-1 rounded-full bg-[#EFF3EC] text-[#234E46] text-xs font-semibold border border-[#D8E0D5]">
                      120+ DSA Solved
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl font-medium text-[#19221E] mb-2 leading-snug">
                    120+ DSA Problems
                  </h2>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#234E46] mb-4">
                    LeetCode Problem Solving
                  </p>
                  <p className="text-sm text-[#576560] leading-relaxed">
                    "Solved 120+ Data Structures and Algorithms problems on LeetCode."
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E6E1D7]/60 flex items-center gap-2 text-xs text-[#234E46] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#234E46]" />
                  <span>Algorithmic Practice</span>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Bottom Subtle Four-Part Values Strip */}
      <section>
        <PageContainer>
          <div className="bg-[#F4F1EA]/70 rounded-3xl p-6 sm:p-8 border border-[#E6E1D7]">
            <p className="text-xs uppercase tracking-widest font-semibold text-[#234E46] mb-6 text-center">
              Core Engineering Values
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {valuesStrip.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E6E1D7] space-y-2 shadow-2xs"
                  >
                    <div className="p-2 rounded-xl bg-[#EFF3EC] text-[#234E46] w-fit">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-lg font-medium text-[#19221E]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#576560] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
