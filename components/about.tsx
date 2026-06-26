"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a passionate <span className="font-medium">Full-Stack Developer</span> with over{" "}
        <span className="font-medium">4 years of experience</span>. I enjoy building
        modern web applications and finding practical solutions to complex problems.
        My goal is to create products that are{" "}
        <span className="font-medium">
          reliable, user-friendly, and built to last
        </span>
        . I believe there's always something new to learn, and I enjoy improving with
        every project.
      </p>

      <p>
        <span className="italic">Beyond coding</span>, I enjoy exploring new ideas,
        improving my problem-solving skills, and staying up to date with the latest
        technologies. I am passionate about continuous learning and always look
        forward to taking on new challenges that help me grow both personally and
        professionally.
      </p>
    </motion.section>
  );
}
