import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Fleet } from "@/components/site/Fleet";
import { WhyUs } from "@/components/site/WhyUs";
import { Quote } from "@/components/site/Quote";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "JM Transports Business Solutions | Civil, Plant Hire & Logistics";
const description =
  "100% black-owned, Level 1 B-BBEE South African contractor delivering transport, plant hire, earthworks, road construction and civil engineering.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            name: "JM Transports Business Solutions (Pty) Ltd",
            description,
            areaServed: "ZA",
            telephone: ["+27659417501", "+27614758761"],
            email: "Juniormntimande@gmail.com",
            openingHours: "Mo-Su 00:00-23:59",
          }),
        }}
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Fleet />
        <WhyUs />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
