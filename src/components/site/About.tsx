import { Reveal, ImageReveal } from "./Reveal";
import aboutImg from "@/assets/about-team.jpg";

const cards = [
  { k: "Level 1", v: "B-BBEE contributor · 135% procurement recognition" },
  { k: "Zero", v: "Lost-time incidents across current contracts" },
  { k: "24/7", v: "Dispatch, haulage and site support" },
];

export function About() {
  return (
    <section id="about" className="relative bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="relative">
              <ImageReveal
                src={aboutImg}
                alt="JM Transports site engineers reviewing drawings beside an excavator"
                width={1280}
                height={1600}
                className="aspect-[4/5]"
              />
              <div className="absolute -bottom-8 -right-4 hidden bg-ink px-8 py-7 md:block lg:-right-12">
                <p className="font-display text-5xl text-accent">100%</p>
                <p className="mt-1 max-w-[9rem] text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  Black-owned South African enterprise
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <Reveal>
              <p className="eyebrow">01 — The company</p>
              <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.6rem,6vw,5.2rem)] uppercase">
                Built for scale,<br />
                <span className="text-muted-foreground">run with discipline.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 grid max-w-3xl gap-8 md:grid-cols-2">
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  JM Transports Business Solutions (Pty) Ltd was founded to give infrastructure
                  clients a single accountable partner across the whole delivery chain — from bulk
                  earthworks and layerworks through to material haulage and final surfacing.
                </p>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  We operate our own plant, employ our own certified operators and hold our own
                  safety file. That control is why municipalities, contractors and mining houses
                  keep us on programme when schedules tighten.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 border-t border-border">
              {cards.map((c, i) => (
                <Reveal key={c.k} delay={0.08 * i}>
                  <div className="group grid grid-cols-[7rem_1fr] items-baseline gap-6 border-b border-border py-7 transition-colors duration-500 hover:bg-secondary/60 md:grid-cols-[11rem_1fr]">
                    <p className="pl-0 font-display text-3xl transition-colors duration-500 group-hover:text-accent md:pl-4 md:text-4xl">
                      {c.k}
                    </p>
                    <p className="pr-4 text-sm leading-relaxed text-muted-foreground">{c.v}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
