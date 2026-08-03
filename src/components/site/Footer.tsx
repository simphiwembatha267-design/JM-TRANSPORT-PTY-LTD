const columns = [
  {
    title: "Navigate",
    links: [
      ["About", "#about"],
      ["Services", "#services"],
      ["Projects", "#projects"],
      ["Fleet", "#fleet"],
    ],
  },
  {
    title: "Services",
    links: [
      ["Transport & Logistics", "#services"],
      ["Plant Hire", "#services"],
      ["Civil Engineering", "#services"],
      ["Material Supply", "#services"],
    ],
  },
  {
    title: "Connect",
    links: [
      ["LinkedIn", "#"],
      ["Facebook", "#"],
      ["WhatsApp", "https://wa.me/27659417501"],
      ["Email", "mailto:Juniormntimande@gmail.com"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1600px] px-6 pb-10 pt-24 md:px-12 md:pt-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-display text-[clamp(2.8rem,8vw,7rem)] uppercase leading-[0.85]">
              JM Transports<br />
              <span className="text-white/35">Business Solutions</span>
            </p>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/45">
              Transport, plant hire and civil construction for South African infrastructure.
              100% black-owned · Level 1 B-BBEE.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                {col.title}
              </p>
              <ul className="mt-6 space-y-3">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="gold-underline text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/12 pt-8 text-[11px] uppercase tracking-[0.18em] text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} JM Transports Business Solutions (Pty) Ltd</p>
          <p>Open 24 hours · +27 65 941 7501</p>
        </div>
      </div>
    </footer>
  );
}
