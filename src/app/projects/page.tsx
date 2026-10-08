"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  PageContainer,
  SectionLabel,
  TechnologyBadge,
  Button,
  GithubIcon,
} from "@/components";
import { ArrowRight, ShieldCheck } from "lucide-react";

type FilterCategory = "All" | "AI/ML" | "Mobile App" | "Web App" | "Hardware";

interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  categories: FilterCategory[];
  technologies: string[];
  features: string[];
  image: string;
  badge?: string;
  githubUrl?: string;
  visualDescription: string;
  objectFit?: "cover" | "contain";
  bgColor?: string;
}

const detailedProjects: ProjectDetail[] = [
  {
    id: "sahayak",
    number: "01",
    title: "Sahayak",
    subtitle: "AI-Powered Episodic Memory Assistant",
    description:
      "An edge AI-assisted system that captures surrounding visual context and converts multimodal observations into structured events to help users recall previously seen objects.",
    categories: ["AI/ML", "Hardware"],
    technologies: ["Python", "OpenCV", "YOLOv8", "FaceNet", "CLIP", "ESP32"],
    features: [
      "Real-time object detection & recognition",
      "Contextual memory storage",
      "Edge device + cloud integration",
    ],
    image: "/images/sahayak.png",
    githubUrl: "https://github.com/khushish18/Sahayak-AI",
    visualDescription:
      "Small wearable Alzheimer assistive hardware device diagram with labeled component callouts",
    objectFit: "contain",
    bgColor: "bg-[#000000]",
  },
  {
    id: "hervedas",
    number: "02",
    title: "HerVeda",
    subtitle: "AI-Powered Women's Nutrition Assistant",
    description:
      "A cross-platform mobile application that analyzes meal images using Google Gemini Vision and provides personalized nutrition recommendations for different women's health conditions.",
    categories: ["AI/ML", "Mobile App"],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Google Gemini API",
      "Expo Router",
      "Expo Image Picker",
    ],
    features: [
      "AI-powered meal analysis",
      "Personalized nutrition guidance",
      "Support for PCOS, pregnancy, postpartum and menopause",
      "User onboarding & profile persistence",
    ],
    image: "/images/hervedas.png",
    githubUrl: "https://github.com/khushish18/herveda",
    visualDescription:
      "HerVeda AI architecture and ecosystem feature flow diagram",
    objectFit: "contain",
    bgColor: "bg-[#F4F1EA]",
  },
  {
    id: "safeopen",
    number: "03",
    title: "SafeOpen",
    subtitle: "Intelligent Vehicle Safety System",
    description:
      "A computer vision and ultrasonic sensor based system to detect approaching vehicles and prevent unsafe door-opening scenarios, integrated with an Arduino/ESP32 setup and a Flutter mobile application.",
    categories: ["Hardware", "Mobile App", "AI/ML"],
    badge: "Patent Published • 94% Accuracy",
    technologies: [
      "Python",
      "OpenCV",
      "Arduino",
      "ESP32",
      "Ultrasonic Sensor",
      "Flutter",
    ],
    features: [
      "Detects approaching vehicles",
      "94% accuracy during prototype testing",
      "Ultrasonic sensor + computer vision",
      "Arduino/ESP32 controlled safety logic",
      "Flutter mobile app for manual override",
    ],
    image: "/images/safeopen.png",
    visualDescription:
      "Vehicle door safety prototype setup with door-mounted ultrasonic sensor, microcontroller, laptop dashboard, and mobile telemetry app",
    objectFit: "cover",
  },
  {
    id: "budget-eagle",
    number: "04",
    title: "Budget Eagle",
    subtitle: "AI-Powered Personal Finance Platform",
    description:
      "Developed responsive frontend modules using React, integrated REST APIs for budgeting, portfolio tracking, stock market intelligence, and AI-powered financial insights. Built reusable React components, handled asynchronous API integrations and optimized responsive UI.",
    categories: ["Web App", "AI/ML"],
    badge: "DRDO / SSPL Internship Work",
    technologies: ["React", "REST APIs", "JavaScript", "Responsive UI"],
    features: [
      "Budgeting and expense tracking",
      "Portfolio tracking and stock market intelligence",
      "AI-powered financial insights",
      "Reusable React components",
      "Async API integrations",
      "Optimized responsive UI",
    ],
    image: "/images/budget_eagle.png",
    visualDescription:
      "Personal finance dashboard on laptop screen with accompanying mobile app and financial goals notepad",
    objectFit: "cover",
  },
];

const filterOptions: FilterCategory[] = [
  "All",
  "AI/ML",
  "Mobile App",
  "Web App",
  "Hardware",
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? detailedProjects
      : detailedProjects.filter((project) =>
          project.categories.includes(activeFilter)
        );

  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-16 sm:space-y-24">
      {/* Header Section */}
      <section>
        <PageContainer>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 pb-8 border-b border-[#E6E1D7]">
            <div className="max-w-2xl">
              <SectionLabel text="MY WORK" className="mb-4" />
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#19221E] mb-4">
                Projects
              </h1>
              <p className="text-base sm:text-lg text-[#576560] leading-relaxed font-normal">
                Here are some of the projects I've worked on, combining AI, full-stack and hardware to solve real-world problems. Each project reflects my learning, curiosity and the kind of impact I want to create.
              </p>
            </div>

            {/* Interactive Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 self-start lg:self-end">
              {filterOptions.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    type="button"
                    className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 focus:outline-none ${
                      isActive
                        ? "bg-[#234E46] text-white shadow-xs"
                        : "bg-[#FFFFFF] text-[#576560] border border-[#E6E1D7] hover:border-[#234E46]/40 hover:text-[#19221E]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects List with Alternating Layouts */}
          <div className="space-y-16 sm:space-y-24">
            {filteredProjects.map((project, index) => {
              // Alternating Layout Logic:
              // Index 0 (Project 01): Image Left, Content Right
              // Index 1 (Project 02): Content Left, Image Right
              // Index 2 (Project 03): Image Left, Content Right
              // Index 3 (Project 04): Content Left, Image Right
              const isImageLeft = index % 2 === 0;

              return (
                <article
                  key={project.id}
                  className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E6E1D7] shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Visual Mockup Column */}
                    <div
                      className={`lg:col-span-5 ${
                        isImageLeft ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div
                        className={`relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E6E1D7] ${
                          project.bgColor || "bg-[#F4F1EA]"
                        } group shadow-xs`}
                      >
                        <Image
                          src={project.image}
                          alt={`${project.title} Visual Representation — ${project.visualDescription}`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 450px"
                          className={`${
                            project.objectFit === "contain"
                              ? "object-contain p-2 sm:p-3"
                              : "object-cover object-center"
                          } transition-transform duration-700 group-hover:scale-105`}
                        />
                        {project.badge && (
                          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5]/95 backdrop-blur-md text-[#234E46] text-xs font-semibold border border-[#D8E0D5]">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>{project.badge}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-7 flex flex-col justify-between ${
                        isImageLeft ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div>
                        {/* Number & Category Pills */}
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <span className="font-serif text-3xl sm:text-4xl font-medium text-[#234E46] tracking-tight">
                            {project.number}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.categories.map((cat) => (
                              <span
                                key={cat}
                                className="px-2.5 py-0.5 rounded-full bg-[#EFF3EC] text-[#234E46] text-xs font-medium border border-[#D8E0D5]"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Title & Subtitle */}
                        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#19221E] mb-1">
                          {project.title}
                        </h2>
                        <p className="text-sm font-semibold text-[#234E46] mb-4">
                          {project.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-[#576560] leading-relaxed mb-6 font-normal">
                          {project.description}
                        </p>

                        {/* Technology Badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <TechnologyBadge key={tech} name={tech} size="sm" />
                          ))}
                        </div>

                        {/* Key Features Block (Plain Bullets) */}
                        <div className="bg-[#F4F1EA]/70 rounded-2xl p-5 border border-[#E6E1D7] mb-6">
                          <h3 className="text-xs uppercase tracking-wider font-semibold text-[#19221E] mb-3">
                            Key Features
                          </h3>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#576560]">
                            {project.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-[#19221E]"
                              >
                                <span className="text-[#234E46] shrink-0 font-bold select-none">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E6E1D7]/60">
                        {project.githubUrl && (
                          <Button
                            href={project.githubUrl}
                            external
                            variant="primary"
                            size="sm"
                            icon="external"
                          >
                            View on GitHub
                          </Button>
                        )}

                        <button
                          type="button"
                          onClick={() =>
                            setExpandedProjectId(
                              expandedProjectId === project.id ? null : project.id
                            )
                          }
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#234E46] hover:underline"
                        >
                          <span>
                            {expandedProjectId === project.id
                              ? "Show Less"
                              : "Read More"}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Expandable Read More Details */}
                      {expandedProjectId === project.id && (
                        <div className="mt-4 p-4 rounded-xl bg-[#EFF3EC] border border-[#D8E0D5] text-xs text-[#576560] space-y-2">
                          <p className="font-semibold text-[#19221E]">
                            Detailed Implementation Overview:
                          </p>
                          <p>
                            Project {project.title} reflects iterative prototyping, structured module design, clean API interfaces, and user-centric problem solving. Built using verified tech stacks.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* GitHub Repository Footer Section */}
          <div className="mt-16 bg-[#FFFFFF] rounded-3xl p-8 border border-[#E6E1D7] text-center max-w-2xl mx-auto space-y-4">
            <div className="p-3.5 rounded-2xl bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5] w-fit mx-auto">
              <GithubIcon className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#19221E]">
              GitHub Code Showcase
            </h3>
            <p className="text-sm sm:text-base text-[#576560] leading-relaxed">
              Explore additional project repositories, experiment code, and open-source contributions on GitHub.
            </p>
            <div className="pt-2">
              <Button
                href="https://github.com/khushish18"
                external
                variant="primary"
                icon="external"
              >
                Visit GitHub @khushish18
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
