import Image from "next/image";
import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className={`wordmark ${light ? "wordmark-light" : ""}`}>
      <Image src="/brand-logo.png" alt="" width={84} height={42} className="mark-image" priority />
      <span><strong>CUMMINS</strong><small>WORLDWIDE</small></span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" aria-label="Cummins Worldwide home"><Brand /></Link>
      <nav aria-label="Primary navigation">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/wisdom-center">Wisdom Center</Link>
        <Link href="/careers">Careers</Link>
      </nav>
      <Link className="button button-small" href="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Brand light />
      <div className="footer-links">
        <Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/wisdom-center">Wisdom Center</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link>
      </div>
      <div className="footer-bottom"><span>© 2026 Cummins Worldwide LLC. All rights reserved.</span><span>Financial Wisdom™ for lasting growth.</span></div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, accent, image, alt }: { eyebrow: string; title: string; accent: string; image?: string; alt?: string }) {
  return (
    <section className={`page-hero ${image ? "page-hero-with-image" : ""}`}>
      <div className="page-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}<br /><em>{accent}</em></h1></div>
      {image && <div className="page-hero-image"><Image src={image} alt={alt || ""} fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div>}
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="contact-band"><p className="eyebrow">Start a conversation</p><h2>Ready to make your next<br /><em>good decision?</em></h2><Link className="button" href="/contact">Contact us <span aria-hidden="true">↗</span></Link></section>
  );
}
