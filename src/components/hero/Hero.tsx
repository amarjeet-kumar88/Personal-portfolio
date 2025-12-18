"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";


export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen overflow-hidden
        bg-background
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -left-48 w-130 h-130 bg-primary/20 blur-[140px]" />
        <div className="absolute top-1/3 -right-48 w-105 h-105 bg-secondary/20 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Hi, I’m{" "}
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-amber-500">
                Amarjeet Kumar
              </span>
            </h1>

            <div className="mt-6 text-xl md:text-2xl font-medium text-muted text-amber-700">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "DevOps Enthusiast",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="mt-6 max-w-xl text-muted leading-relaxed text-base md:text-lg">
              I build scalable, high-performance web applications using modern
              technologies, focusing on clean architecture, performance and
              exceptional user experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-6">
              <a
                href="#projects"
                className="
                  px-8 py-3 rounded-xl font-medium text-primary
                  bg-primary hover:bg-primary/90
                  hover:scale-105 transition-all hover:text-amber-600
                "
              >
                View Projects
              </a>

              <a
                href="https://drive.google.com/file/d/1p5YeV8GcFDAuLMgZg9pyJzCpPt-z5oWL/view?usp=drive_link"
                className="
                  px-8 py-3 rounded-xl border border-border
                  text-foreground hover:border-primary
                  hover:text-primary hover:scale-105 transition-all hover:text-amber-600
                "
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* RIGHT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ y: -10 }}
            className="relative flex justify-center"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-75 h-75 bg-primary/20 blur-[120px] rounded-full" />
            </div>

            {/* Floating animation */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <Image
                src="/images/hero-boy.png"
                alt="Developer illustration"
                width={420}
                height={420}
                priority
                className="drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
