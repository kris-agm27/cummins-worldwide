import { ContactBand, PageHero, SiteFooter, SiteHeader } from "../site-chrome";
import { ServiceExplorer } from "./service-explorer";

export const metadata = {
  title: "Services | Cummins Worldwide",
  description: "Financial and human resources solutions for individuals and enterprises.",
};

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="Our services" title="Expertise that moves" accent="business forward." />
      <section className="services services-page">
        <p className="services-intro">
          Focused guidance across the two foundations every healthy organization depends on: sound finances and strong people.
        </p>
        <ServiceExplorer />
      </section>
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
