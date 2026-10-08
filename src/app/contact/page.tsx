"use client";

import React, { useState } from "react";
import {
  PageContainer,
  SectionLabel,
  Button,
  GithubIcon,
  LinkedinIcon,
} from "@/components";
import { Mail, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-16 sm:space-y-24">
      {/* Contact Hero Section */}
      <section>
        <PageContainer>
          <div className="max-w-3xl mb-12">
            <SectionLabel text="LET'S CONNECT" className="mb-4" />
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#19221E] mb-4">
              Let's build something<br />
              <span className="text-[#234E46] italic">meaningful together.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#576560] leading-relaxed font-normal">
              "I'm always interested in learning, building and collaborating on practical software ideas."
            </p>

            {/* Large Primary CTA Button */}
            <div className="mt-8">
              <Button
                href="mailto:khushisharma061205@gmail.com"
                variant="primary"
                size="lg"
                icon="arrow"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Three Large Clean Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Card 1: Email */}
            <a
              href="mailto:khushisharma061205@gmail.com"
              className="group bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E6E1D7] shadow-xs hover:border-[#234E46]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5] group-hover:bg-[#234E46] group-hover:text-white transition-colors duration-200">
                    <Mail className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#576560] group-hover:text-[#234E46] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#234E46] mb-2">
                  Email
                </p>
                <p className="text-base sm:text-lg font-medium text-[#19221E] break-all group-hover:text-[#234E46] transition-colors">
                  khushisharma061205@gmail.com
                </p>
              </div>
              <p className="text-xs text-[#576560] mt-6 pt-4 border-t border-[#E6E1D7]/60">
                Click to open email client
              </p>
            </a>

            {/* Card 2: LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E6E1D7] shadow-xs hover:border-[#234E46]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5] group-hover:bg-[#234E46] group-hover:text-white transition-colors duration-200">
                    <LinkedinIcon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#576560] group-hover:text-[#234E46] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#234E46] mb-2">
                  LinkedIn
                </p>
                <p className="text-base sm:text-lg font-medium text-[#19221E] group-hover:text-[#234E46] transition-colors">
                  Khushi Sharma
                </p>
              </div>
              <p className="text-xs text-[#576560] mt-6 pt-4 border-t border-[#E6E1D7]/60">
                Connect on LinkedIn
              </p>
            </a>

            {/* Card 3: GitHub */}
            <a
              href="https://github.com/khushish18"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E6E1D7] shadow-xs hover:border-[#234E46]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#EFF3EC] text-[#234E46] border border-[#D8E0D5] group-hover:bg-[#234E46] group-hover:text-white transition-colors duration-200">
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#576560] group-hover:text-[#234E46] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#234E46] mb-2">
                  GitHub
                </p>
                <p className="text-base sm:text-lg font-medium text-[#19221E] group-hover:text-[#234E46] transition-colors">
                  @khushish18
                </p>
              </div>
              <p className="text-xs text-[#576560] mt-6 pt-4 border-t border-[#E6E1D7]/60">
                View GitHub repositories
              </p>
            </a>
          </div>

          {/* Interactive Direct Message Card */}
          <div className="max-w-2xl mx-auto bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E6E1D7] shadow-xs">
            <h3 className="font-serif text-2xl font-medium text-[#19221E] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-[#576560] mb-6">
              Or leave a quick note below to start a conversation.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#EFF3EC] border border-[#D8E0D5] text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#234E46] mx-auto" />
                <h4 className="font-serif text-xl font-medium text-[#19221E]">
                  Message Sent
                </h4>
                <p className="text-sm text-[#576560]">
                  Thank you for reaching out. You can also write directly to{" "}
                  <a
                    href="mailto:khushisharma061205@gmail.com"
                    className="underline text-[#234E46] font-medium"
                  >
                    khushisharma061205@gmail.com
                  </a>
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs font-medium text-[#234E46] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#19221E] mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#E6E1D7] rounded-xl text-[#19221E] placeholder-[#576560]/50 focus:outline-none focus:border-[#234E46] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-wider font-semibold text-[#19221E] mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Your email address"
                      className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#E6E1D7] rounded-xl text-[#19221E] placeholder-[#576560]/50 focus:outline-none focus:border-[#234E46] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#19221E] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#E6E1D7] rounded-xl text-[#19221E] placeholder-[#576560]/50 focus:outline-none focus:border-[#234E46] transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
