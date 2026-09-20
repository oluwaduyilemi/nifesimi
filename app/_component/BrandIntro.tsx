"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function BrandIntro() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5f0]">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          
          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-start gap-3"
          >
            <span className="mt-2 h-px w-8 bg-[#76513c]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#76513c]">
              The Wardrobe Edit
            </span>
          </motion.div>

          {/* Main Statement */}
          <div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-[900px] font-serif text-[clamp(2.7rem,5vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.035em] text-[#3d281d]"
              >
                Style should feel{" "}
                <span className="italic text-[#76513c]">personal.</span>
                <br />
                Not complicated.
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end"
            >
              <p className="max-w-[570px] text-sm leading-7 text-[#6f625a] sm:text-[15px]">
                The Wardrobe Edit is here to make fashion feel easier.
                From finding the pieces that work for you to putting
                everything together, we help you build a wardrobe that
                reflects who you are and how you want to feel.
              </p>

              <div className="hidden md:flex">
                <ArrowDown
                  size={22}
                  strokeWidth={1}
                  className="text-[#76513c]"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom editorial line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="mt-20 h-px origin-left bg-[#d8cec5] md:mt-28"
        />
      </div>
    </section>
  );
}