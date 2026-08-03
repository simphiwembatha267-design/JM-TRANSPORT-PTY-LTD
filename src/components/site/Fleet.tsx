import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import graderImg from "@/assets/fleet-grader.jpg";
import earthImg from "@/assets/why-earthworks.jpg";
import trucksImg from "@/assets/project-trucks.jpg";
import roadImg from "@/assets/project-road.jpg";

type Machine = {
  name: string;
  units: string;
  img: string;
  summary: string;
  specs: { k: string; v: string }[];
};

const fleet: Machine[] = [
  {
    name: "Excavators",
    units: "20T – 35T",
    img: earthImg,
    summary:
      "Tracked hydraulic excavators for bulk excavation, trenching, loading and demolition support.",
    specs: [
      { k: "Operating weight", v: "20 000 – 35 000 kg" },
      { k: "Bucket range", v: "0.9 – 1.9 m³" },
      { k: "Attachments", v: "Breaker, ripper, tilt bucket" },
      { k: "Availability", v: "Wet or dry hire" },
    ],
  },
  {
    name: "Graders",
    units: "140G class",
    img: graderImg,
    summary: "Motor graders for layerworks, road shaping, camber control and gravel maintenance.",
    specs: [
      { k: "Blade width", v: "3.7 m" },
      { k: "Power", v: "135 – 165 kW" },
      { k: "Typical use", v: "Base and sub-base finishing" },
      { k: "Operators", v: "Certified, licensed" },
    ],
  },
  {
    name: "TLBs",
    units: "Backhoe loaders",
    img: earthImg,
    summary: "Versatile backhoe loaders for services trenching, backfill and confined-site works.",
    specs: [
      { k: "Dig depth", v: "up to 5.5 m" },
      { k: "Loader capacity", v: "1.0 m³" },
      { k: "Best for", v: "Reticulation, kerbing" },
      { k: "Mobility", v: "Self-drive between sites" },
    ],
  },
  {
    name: "Rollers",
    units: "Smooth & padfoot",
    img: roadImg,
    summary: "Vibratory compaction rollers achieving specified densities on fill and asphalt.",
    specs: [
      { k: "Drum weight", v: "7 – 20 t" },
      { k: "Types", v: "Single drum, tandem, pneumatic" },
      { k: "Compaction", v: "95% Mod AASHTO" },
      { k: "Support", v: "On-site density testing" },
    ],
  },
  {
    name: "Bulldozers",
    units: "D6 – D8 class",
    img: earthImg,
    summary: "Crawler dozers for mass earth movement, stripping, ripping and stockpile work.",
    specs: [
      { k: "Blade", v: "Semi-U / U-blade" },
      { k: "Power", v: "160 – 265 kW" },
      { k: "Rippers", v: "Single and multi-shank" },
      { k: "Deployment", v: "Lowbed delivered nationwide" },
    ],
  },
  {
    name: "Tipper Trucks",
    units: "10m³ – 34m³",
    img: trucksImg,
    summary: "Rigid tippers and side-tipper links for bulk haulage of spoil and aggregate.",
    specs: [
      { k: "Payload", v: "15 – 40 t" },
      { k: "Config", v: "6x4 rigid, interlink side tipper" },
      { k: "Tracking", v: "Live telematics on every unit" },
      { k: "Compliance", v: "Overload and roadworthy managed" },
    ],
  },
  {
    name: "Water Tankers",
    units: "16 000 L",
    img: roadImg,
    summary: "Dust suppression and compaction water supply with spray bars and pump-off capability.",
    specs: [
      { k: "Capacity", v: "10 000 – 18 000 L" },
      { k: "Spray", v: "Rear bar + side jets" },
      { k: "Use", v: "Haul roads, layerworks" },
      { k: "Standby", v: "24-hour availability" },
    ],
  },
  {
    name: "Loaders",
    units: "Front-end",
    img: trucksImg,
    summary: "Wheel loaders for stockpile handling, truck loading and material yard operations.",
    specs: [
      { k: "Bucket", v: "2.0 – 3.5 m³" },
      { k: "Tipping load", v: "up to 14 t" },
      { k: "Use", v: "Quarry, plant, batching" },
      { k: "Hire", v: "Hourly, daily, monthly" },
    ],
  },
];

export function Fleet() {
  const [open, setOpen] = useState<Machine | null>(null);

  return (
    <section id="fleet" className="bg-secondary py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">04 — The fleet</p>
            <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,5.2rem)] uppercase">
              Owned plant.<br />
              <span className="text-muted-foreground">No hire-chain risk.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground lg:ml-auto">
              Every machine is serviced on a scheduled maintenance programme and operated by our own
              licensed crew. Select any unit for specifications.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((m, i) => (
            <Reveal key={m.name} delay={0.04 * i}>
              <button
                type="button"
                onClick={() => setOpen(m)}
                className="group relative flex h-full w-full flex-col justify-between bg-background p-7 text-left transition-colors duration-500 hover:bg-ink"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-white/50">
                    {m.units}
                  </span>
                </div>
                <div className="mt-16">
                  <h3 className="font-display text-3xl uppercase transition-colors duration-500 group-hover:text-white">
                    {m.name}
                  </h3>
                  <span className="mt-3 inline-block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-500 group-hover:text-accent">
                    View specifications →
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm md:items-center md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${open.name} specifications`}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid w-full max-w-5xl grid-cols-1 bg-background md:grid-cols-2"
            >
              <div className="relative hidden md:block">
                <img
                  src={open.img}
                  alt={open.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative p-8 md:p-12">
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setOpen(null)}
                  className="absolute right-6 top-6 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X size={20} />
                </button>
                <p className="eyebrow">Equipment</p>
                <h3 className="mt-4 font-display text-5xl uppercase">{open.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{open.summary}</p>
                <dl className="mt-8 border-t border-border">
                  {open.specs.map((s) => (
                    <div
                      key={s.k}
                      className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-4 border-b border-border py-4"
                    >
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {s.k}
                      </dt>
                      <dd className="text-sm">{s.v}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href="#quote"
                  onClick={() => setOpen(null)}
                  className="mt-8 inline-block bg-accent px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-foreground"
                >
                  Enquire about availability
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
