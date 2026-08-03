import { Reveal } from "./Reveal";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="grid lg:grid-cols-2">
        <div className="px-6 py-24 md:px-12 md:py-32 lg:pl-[max(3rem,calc((100vw-1600px)/2+3rem))]">
          <Reveal>
            <p className="eyebrow">07 — Contact</p>
            <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,5rem)] uppercase">
              Open 24 hours.<br />
              <span className="text-muted-foreground">Answered by people.</span>
            </h2>
          </Reveal>

          <div className="mt-14 max-w-lg">
            {[
              {
                icon: Phone,
                label: "Telephone",
                lines: ["+27 65 941 7501", "+27 61 475 8761"],
                hrefs: ["tel:+27659417501", "tel:+27614758761"],
              },
              {
                icon: Mail,
                label: "Email",
                lines: ["Juniormntimande@gmail.com"],
                hrefs: ["mailto:Juniormntimande@gmail.com"],
              },
              { icon: Clock, label: "Operating hours", lines: ["Open 24 hours · 7 days"] },
              { icon: MapPin, label: "Coverage", lines: ["Nationwide, South Africa"] },
            ].map((row, i) => (
              <Reveal key={row.label} delay={0.06 * i}>
                <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-5 border-b border-border py-7">
                  <row.icon size={18} className="mt-1 shrink-0 text-accent" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      {row.label}
                    </p>
                    <div className="mt-2 space-y-1">
                      {row.lines.map((l, j) => {
                        const href = row.hrefs?.[j];
                        return href ? (
                          <a
                            key={l}
                            href={href}
                            className="gold-underline block w-fit break-words text-lg"
                          >
                            {l}
                          </a>
                        ) : (
                          <p key={l} className="text-lg">
                            {l}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative min-h-[24rem] bg-secondary lg:min-h-full">
          <iframe
            title="JM Transports service area map"
            src="https://www.google.com/maps?q=South%20Africa&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full grayscale"
          />
        </div>
      </div>
    </section>
  );
}
