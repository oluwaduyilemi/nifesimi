"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative  overflow-hidden bg-[#f8f5f0]">
      <div className="mx-auto flex min-h-[calc(100vh-92px)] max-w-[1440px] flex-col justify-center px-5 py-12 sm:px-8 lg:px-12 lg:py-16 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:grid-cols-[0.85fr_1.15fr]">
          

          <div className="relative z-10 ">
            
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#76513c]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#76513c]">
                Personal Styling · Personal Shopping
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-[650px] font-serif text-[clamp(4rem,7vw,7.5rem)] font-normal leading-[0.88] tracking-[-0.045em] text-[#3d281d]"
              >
                Your wardrobe,
                <br />
                <span className="italic">but better.</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-[390px] text-sm leading-7 text-[#6f625a] sm:text-[15px]"
            >
              Making getting dressed a little easier. Discover thoughtful
              fashion finds, personal styling and shopping assistance curated
              around you.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <Link
                href="/styling"
                className="group flex items-center gap-4 bg-[#4a2e20] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#352016]"
              >
                Get styled

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.3}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/the-edit"
                className="group flex items-center gap-3 border-b border-[#4a3327] pb-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#4a3327]"
              >
                Explore the edit

                <span className="h-px w-0 bg-[#4a3327] transition-all duration-300 group-hover:w-4" />
              </Link>
            </motion.div>
          </div>

          {/* ========================= */}
          {/* IMAGE */}
          {/* ========================= */}

          <div className="relative">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{
                duration: 1.3,
                delay: 0.15,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="relative h-screen w-full overflow-hidden"
            >
              <motion.div
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
               <Image
                src="/images/hero-fashion.png"
                alt="The Wardrobe Edit"
                fill
                priority
                className="object-cover "
                />
              </motion.div>

              {/* Image overlay */}
              <div className="absolute inset-0 " />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -bottom-5 -left-5 hidden bg-[#eee8e1] px-6 py-5 lg:block"
            >
              <p className="text-[9px] uppercase tracking-[0.15em] text-[#76513c]">
                The Wardrobe Edit
              </p>

              <p className="mt-1 font-serif text-sm italic text-[#3d281d]">
                Style, curated for you.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ========================= */}
        {/* SCROLL INDICATOR */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
          className="mt-14 hidden items-center justify-between lg:flex"
        >
          <div className="flex items-center gap-3 text-[#8a7a70]">
            <ArrowDown
              size={14}
              strokeWidth={1}
              className="animate-bounce"
            />

            <span className="text-[8px] uppercase tracking-[0.2em]">
              Scroll to explore
            </span>
          </div>

          <p className="text-[8px] uppercase tracking-[0.2em] text-[#8a7a70]">
            UK 🇬🇧 · Nigeria 🇳🇬
          </p>
        </motion.div>
      </div>
    </section>
  );
}