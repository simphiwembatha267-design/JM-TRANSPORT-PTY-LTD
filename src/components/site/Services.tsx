import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import roadImg from "@/assets/project-road.jpg";
import trucksImg from "@/assets/project-trucks.jpg";
import bridgeImg from "@/assets/project-bridge.jpg";
import earthImg from "@/assets/why-earthworks.jpg";

const services = [
  {
    n: "01",
    title: "Transport & Logistics",
    copy: "Contract haulage, bulk material movement and abnormal loads with live fleet tracking.",
    img: trucksImg,
  },
  {
    n: "02",
    title: "Plant Hire",
    copy: "Wet and dry hire of excavators, TLBs, graders, rollers and dozers with certified operators.",
    img: earthImg,
  },
  {
    n: "03",
    title: "Road Construction",
    copy: "Layerworks, base preparation, surfacing, rehabilitation and gravel road upgrades.",
    img: roadImg,
  },
  {
    n: "04",
    title: "Civil Engineering",
    copy: "Stormwater, sewer and water reticulation, culverts, kerbing and concrete structures.",
    img: bridgeImg,
  },
  {
    n: "05",
    title: "Earthworks",
    copy: "Bulk excavation, cut and fill, terracing, site clearance and compaction to spec.",
    img: earthImg,
  },
  {
    n: "06",
    title: "Building Construction",
    copy: "Commercial, industrial and public buildings delivered under CIDB-graded management.",
    img: bridgeImg,
  },
  {
    n: "07",
    title: "Material Supply",
    copy: "G1–G7 gravels, crusher run, sand, topsoil and aggregate delivered on schedule.",
    img: trucksImg,
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative bg-ink py-24 text-white md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow !text-white/45">02 — Capability</p>
            <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,5.2rem)] uppercase">
              Seven disciplines.<br />
              <span className="text-white/40">One contract holder.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="max-w-sm text-[15px] leading-relaxed text-white/55 lg:ml-auto">
              Each line below is a standalone service — and together they let us carry a project
              from raw ground to hand-over without subcontracting the critical path.
            </p>
          </Reveal>
        </div>

        <div
          className="relative mt-16 border-t border-white/15"
          onMouseLeave={() => setActive(null)}
        >
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.04 * i}>
              <div
                onMouseEnter={() => setActive(i)}
                className="group relative grid cursor-default grid-cols-[3rem_1fr] items-center gap-4 border-b border-white/15 py-7 md:grid-cols-[6rem_minmax(0,1fr)_minmax(0,22rem)] md:gap-8 md:py-9"
              >
                <motion.span
                  className="absolute inset-0 -z-0 bg-white/[0.04]"
                  initial={false}
                  animate={{ opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative font-mono text-[11px] tracking-[0.2em] text-accent">
                  {s.n}
                </span>
                <h3 className="relative font-display text-[clamp(1.9rem,4.2vw,3.4rem)] uppercase leading-none transition-transform duration-500 group-hover:translate-x-2">
                  {s.title}
                </h3>
                <p className="relative col-span-2 text-sm leading-relaxed text-white/50 md:col-span-1 md:pl-8">
                  {s.copy}
                </p>
              </div>
            </Reveal>
          ))}

          <AnimatePresence>
            {active !== null && (
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-none absolute right-[6%] top-1/2 hidden h-64 w-96 -translate-y-1/2 overflow-hidden xl:block"
              >
                <img
                  src={services[active]?.img}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 border border-white/20" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
