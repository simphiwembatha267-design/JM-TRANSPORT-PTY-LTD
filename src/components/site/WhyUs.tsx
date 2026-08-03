import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import earthImg from "@/assets/why-earthworks.jpg";

const chapters = [
  {
    t: "Experienced team",
    c: "Site agents, foremen and operators who have run provincial road and bulk earthworks packages from first peg to practical completion.",
  },
  {
    t: "Modern equipment",
    c: "A young, owned fleet on a preventative maintenance schedule — fewer breakdowns, fewer standing-time claims.",
  },
  {
    t: "Safety compliance",
    c: "Full safety file, appointed SHE officer, toolbox talks, PPE issue registers and incident reporting on every contract.",
  },
  {
    t: "Nationwide capability",
    c: "Lowbed-mobilised plant and long-haul tippers deployed to any province, with accommodation and fuel logistics handled in-house.",
  },
];

const stats = [
  { to: 12, suffix: "+", label: "Years experience" },
  { to: 180, suffix: "+", label: "Completed projects" },
  { to: 45, suffix: "", label: "Heavy machines" },
  { to: 96, suffix: "%", label: "Client retention" },
];

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-36">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div ref={ref} className="relative lg:col-span-5">
            <div className="sticky top-32 overflow-hidden">
              <motion.img
                style={{ y }}
                src={earthImg}
                alt="Bulldozer moving earth in heavy dust at sunset"
                loading="lazy"
                className="aspect-[3/4] w-full scale-110 object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="font-display text-4xl uppercase text-white">
                  Why clients<br />stay with us
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">05 — The difference</p>
              <h2 className="mt-6 max-w-xl font-display text-[clamp(2.4rem,5vw,4.6rem)] uppercase">
                Reliability is a<br />
                <span className="text-muted-foreground">logistics problem.</span>
              </h2>
              <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
                Most programme delays are not engineering failures — they are plant, people and
                material arriving late. We built this company around removing exactly that risk.
              </p>
            </Reveal>

            <div className="mt-14">
              {chapters.map((ch, i) => (
                <Reveal key={ch.t} delay={0.06 * i}>
                  <div className="hairline group py-8">
                    <div className="flex items-baseline gap-5">
                      <span className="font-mono text-[11px] text-accent">
                        0{i + 1}
                      </span>
                      <h3 className="font-display text-3xl uppercase md:text-4xl">{ch.t}</h3>
                    </div>
                    <p className="mt-4 max-w-xl pl-10 text-sm leading-relaxed text-muted-foreground">
                      {ch.c}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-ink">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-px bg-white/10 px-0 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink px-6 py-14 text-center md:px-10 md:py-20">
              <p className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-none text-white">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-10 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:items-center">
          <p className="eyebrow">Accreditation</p>
          <ul className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
            {["Level 1 B-BBEE", "CIDB Registered", "OHS Act Compliant", "SANS Standards"].map(
              (c) => (
                <li
                  key={c}
                  className="flex min-h-28 items-center justify-center bg-background px-4 text-center font-display text-xl uppercase tracking-wide text-foreground/70 transition-colors duration-500 hover:text-accent"
                >
                  {c}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
