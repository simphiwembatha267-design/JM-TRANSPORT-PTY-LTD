import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Fleet", href: "#fleet" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = !scrolled;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 md:px-12 lg:grid-cols-[1fr_auto_1fr]"
      >
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span
            className={`grid h-9 w-9 shrink-0 place-items-center font-display text-lg leading-none transition-colors ${
              dark ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
            }`}
          >
            JM
          </span>
          <span className="min-w-0">
            <span
              className={`block truncate font-display text-xl leading-none tracking-wide transition-colors ${
                dark ? "text-white" : "text-foreground"
              }`}
            >
              JM Transports
            </span>
            <span
              className={`block text-[9px] font-semibold uppercase tracking-[0.28em] transition-colors ${
                dark ? "text-white/55" : "text-muted-foreground"
              }`}
            >
              Business Solutions
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`gold-underline text-[12px] font-medium uppercase tracking-[0.16em] transition-colors ${
                  dark ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-3">
          <a
            href="#quote"
            className="hidden bg-accent px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-foreground transition-transform duration-300 hover:scale-[1.03] sm:inline-block"
          >
            Request Quote
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden ${dark ? "text-white" : "text-foreground"}`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-background lg:hidden"
          >
            <ul className="flex flex-col px-6 pb-6">
              {links.map((l) => (
                <li key={l.label} className="hairline">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-display text-2xl tracking-wide text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-5">
                <a
                  href="#quote"
                  onClick={() => setOpen(false)}
                  className="block bg-accent px-6 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-foreground"
                >
                  Request Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
