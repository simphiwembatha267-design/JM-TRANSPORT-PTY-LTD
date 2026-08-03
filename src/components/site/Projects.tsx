import { Reveal } from "./Reveal";
import roadImg from "@/assets/project-road.jpg";
import trucksImg from "@/assets/project-trucks.jpg";
import bridgeImg from "@/assets/project-bridge.jpg";
import earthImg from "@/assets/why-earthworks.jpg";

type Project = {
  title: string;
  location: string;
  status: string;
  copy: string;
  scope: string[];
  img: string;
  span: string;
  ratio: string;
};

const projects: Project[] = [
  {
    title: "Regional Arterial Upgrade",
    location: "Mpumalanga",
    status: "Completed 2024",
    copy: "18 km of rural arterial rebuilt from subgrade up, including stormwater crossings and full resurfacing under live traffic accommodation.",
    scope: ["Layerworks", "Surfacing", "Haulage"],
    img: roadImg,
    span: "md:col-span-7",
    ratio: "aspect-[16/11]",
  },
  {
    title: "Quarry Haulage Contract",
    location: "Gauteng",
    status: "Ongoing",
    copy: "Dedicated tipper fleet moving 4 200 tonnes of aggregate per week between quarry and batching plant.",
    scope: ["Transport", "Material Supply"],
    img: trucksImg,
    span: "md:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    title: "Interchange Structures",
    location: "KwaZulu-Natal",
    status: "In progress",
    copy: "Bulk earthworks, pier foundations and access works for a multi-level highway interchange package.",
    scope: ["Civils", "Earthworks", "Plant Hire"],
    img: bridgeImg,
    span: "md:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    title: "Industrial Platform Terracing",
    location: "Limpopo",
    status: "Completed 2023",
    copy: "310 000 m³ of cut and fill terraced and compacted to 95% Mod AASHTO for a distribution facility.",
    scope: ["Earthworks", "Compaction"],
    img: earthImg,
    span: "md:col-span-7",
    ratio: "aspect-[16/11]",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <p className="eyebrow">03 — Selected work</p>
            <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.6rem,6vw,5.2rem)] uppercase">
              Programmes we<br />
              <span className="text-muted-foreground">carried to hand-over.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              A sample of active and delivered contracts. Full references available on request for
              tender submissions.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-12 md:gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={0.06 * i} className={p.span}>
              <article className="group h-full">
                <div className={`relative overflow-hidden bg-secondary ${p.ratio}`}>
                  <img
                    src={p.img}
                    alt={`${p.title}, ${p.location}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
                  <span className="absolute left-6 top-6 bg-background/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em]">
                    {p.status}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                      {p.location}
                    </p>
                    <h3 className="mt-2 font-display text-[clamp(1.8rem,3vw,3rem)] uppercase text-white">
                      {p.title}
                    </h3>
                  </div>
                </div>
                <div className="grid gap-4 border-b border-border py-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-10">
                  <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
                  <ul className="flex flex-wrap gap-2">
                    {p.scope.map((s) => (
                      <li
                        key={s}
                        className="border border-border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/70"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
