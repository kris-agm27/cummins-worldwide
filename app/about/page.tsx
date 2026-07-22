import Image from "next/image";
import { ContactBand, PageHero, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata = { title: "About | Cummins Worldwide", description: "Meet Cummins Worldwide and founder Tom Cummins." };

export default function AboutPage() {
  return <main><SiteHeader /><PageHero eyebrow="About Cummins Worldwide" title="Built on experience." accent="Driven by better decisions." image="/tom-cummins.png" alt="Tom Cummins in his office" />
    <section className="page-section split-copy"><div><p className="eyebrow">Our philosophy</p><h2>Business can<br /><em>be better.</em></h2></div><div><p>Financial mastery is the cornerstone of everything we do. Using Tom Cummins&apos; proven financial strategies and corporate solutions, we believe it&apos;s your choices—not the economy—that determine your ability to build a lasting legacy.</p><p>Our pursuit of excellence, expertise, and accountability shapes our work. We don&apos;t simply help manage finances; we give clients the understanding and practical tools to grow every part of their business.</p></div></section>
    <section className="founder page-founder"><div className="founder-copy"><p className="eyebrow">A word from our CEO</p><h2>Success isn&apos;t luck.<br /><em>It&apos;s good decisions, consistently.</em></h2><p>“In more than 30 years of on-the-ground experience, I&apos;ve learned that sustainable success comes from understanding the risks, acting with discipline, and surrounding yourself with people who have done the work.”</p><div className="signature"><strong>Tom Cummins</strong><span>Founder &amp; CEO</span></div></div><div className="founder-images"><Image src="/foundation.png" alt="Secure archive boxes and keys" fill sizes="(max-width: 800px) 100vw, 45vw" /><div className="gold-rule" /></div></section>
    <ContactBand /><SiteFooter /></main>;
}
