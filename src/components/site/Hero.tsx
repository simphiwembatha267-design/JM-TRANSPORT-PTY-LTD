import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-excavator.jpg";

const stats = [
  { value: "12+", label: "Years on site" },
  { value: "180+", label: "Projects delivered" },
  { value: "Level 1", label: "B-BBEE contributor" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden bg-ink">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Excavator working on a South African highway widening project at sunset"
          width={1920}
          height={1280}
          className="h-[118%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/50" />
      </motion.div>

      <div className="mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-end px-6 pb-14 pt-36 md:px-12 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60"
            >
              <span className="h-px w-10 bg-accent" />
              South Africa · Est. Civil &amp; Logistics
            </motion.p>

            <h1 className="max-w-4xl font-display text-[clamp(3.4rem,11vw,9.5rem)] uppercase text-white">
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Moving earth.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
                className="block text-white/45"
              >
                Building the
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                routes between.
              </motion.span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="lg:col-span-5 lg:pb-4"
          >
            <p className="max-w-md text-[15px] leading-relaxed text-white/70">
              JM Transports Business Solutions delivers transport, plant hire, earthworks and civil
              construction for infrastructure programmes across South Africa — 100% black-owned,
              Level 1 B-BBEE, and operating around the clock.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#quote"
                className="group inline-flex items-center gap-3 bg-accent px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:gap-5"
              >
                Request a quote
                <span aria-hidden>→</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-3 border border-white/25 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-white/70"
              >
                View projects
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: fade }}
          className="mt-16 grid grid-cols-2 border-t border-white/15 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 + i * 0.1 }}
              className="border-b border-white/15 py-6 pr-6 md:border-b-0 md:border-r"
            >
              <p className="font-display text-4xl text-white md:text-5xl">{s.value}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                {s.label}
              </p>
            </motion.div>
          ))}
          <div className="hidden items-end justify-end py-6 md:flex">
            <span className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
              Scroll
              <motion.span
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown size={14} className="text-accent" />
              </motion.span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
