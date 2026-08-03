import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import { z } from "zod";
import quoteImg from "@/assets/quote-night.jpg";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  service: z.string().trim().min(1, "Select a service"),
  location: z.string().trim().min(2, "Enter the project location").max(120),
  description: z.string().trim().min(10, "Tell us a little about the project").max(1500),
  start: z.string().trim().max(40).optional(),
});

const services = [
  "Transport & Logistics",
  "Plant Hire",
  "Road Construction",
  "Civil Engineering",
  "Earthworks",
  "Building Construction",
  "Material Supply",
];

const field =
  "w-full border-0 border-b border-white/20 bg-transparent py-4 text-sm text-white placeholder:text-white/35 focus:border-accent focus:outline-none transition-colors";

export function Quote() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <section id="quote" className="relative overflow-hidden bg-ink py-24 text-white md:py-36">
      <img
        src={quoteImg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-4">
            <p className="eyebrow !text-white/45">06 — Request a quote</p>
            <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,5rem)] uppercase">
              Tell us what<br />needs moving.
            </h2>
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-white/55">
              Send the scope and we will respond with rates, availability and a mobilisation
              timeline — usually within one working day.
            </p>
            <div className="mt-12 space-y-2 text-sm text-white/60">
              <p>+27 65 941 7501</p>
              <p>+27 61 475 8761</p>
              <p className="text-accent">Juniormntimande@gmail.com</p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[26rem] flex-col items-start justify-center border border-white/15 p-10 md:p-16"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 220, damping: 16 }}
                    className="grid h-16 w-16 place-items-center bg-accent text-accent-foreground"
                  >
                    <Check size={28} />
                  </motion.span>
                  <h3 className="mt-8 font-display text-5xl uppercase">Request received</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
                    Thank you. Our estimating team will be in touch shortly on the contact details
                    you provided.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid gap-x-10 gap-y-2 md:grid-cols-2"
                >
                  {[
                    { n: "name", l: "Full name", t: "text" },
                    { n: "company", l: "Company", t: "text" },
                    { n: "email", l: "Email", t: "email" },
                    { n: "phone", l: "Phone", t: "tel" },
                  ].map((f) => (
                    <div key={f.n}>
                      <label
                        htmlFor={f.n}
                        className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40"
                      >
                        {f.l}
                      </label>
                      <input
                        id={f.n}
                        name={f.n}
                        type={f.t}
                        maxLength={255}
                        className={field}
                        placeholder="—"
                      />
                      {errors[f.n] && (
                        <p className="pt-2 text-[11px] text-accent">{errors[f.n]}</p>
                      )}
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="service"
                      className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40"
                    >
                      Service required
                    </label>
                    <select id="service" name="service" defaultValue="" className={field}>
                      <option value="" className="bg-ink">
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-ink">
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors['service'] && (
                      <p className="pt-2 text-[11px] text-accent">{errors['service']}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40"
                    >
                      Project location
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      maxLength={120}
                      className={field}
                      placeholder="—"
                    />
                    {errors['location'] && (
                      <p className="pt-2 text-[11px] text-accent">{errors['location']}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="start"
                      className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40"
                    >
                      Preferred start date
                    </label>
                    <input id="start" name="start" type="date" className={field} />
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="description"
                      className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40"
                    >
                      Project description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      maxLength={1500}
                      className={`${field} resize-none`}
                      placeholder="Scope, volumes, duration…"
                    />
                    {errors['description'] && (
                      <p className="pt-2 text-[11px] text-accent">{errors['description']}</p>
                    )}
                  </div>

                  <div className="md:col-span-2 md:pt-6">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-3 bg-accent px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:gap-6"
                    >
                      Submit request
                      <span aria-hidden>→</span>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
