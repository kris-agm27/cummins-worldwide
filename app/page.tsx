import Image from "next/image";

const financeServices = [
  { number: "01", title: "Budgeting Resources", text: "Build a clear operating plan that turns financial data into confident, practical decisions." },
  { number: "02", title: "Tax Solutions", text: "Thoughtful tax support designed around the realities of individuals and growing enterprises." },
  { number: "03", title: "Bookkeeping & Accounting", text: "Reliable reporting and clean financial records that help leaders see what is really happening." },
  { number: "04", title: "Risk Management", text: "Identify exposure early, protect what you have built, and prepare your business for what comes next." },
];

const hrServices = [
  { number: "05", title: "Policy & Training", text: "Practical programs that create consistency, strengthen culture, and help teams perform." },
  { number: "06", title: "Talent Sourcing", text: "Find capable people who fit the role, the organization, and the ambition behind the business." },
  { number: "07", title: "Employee Retention", text: "Build the systems and working environment that make strong people want to stay." },
  { number: "08", title: "Corporate Compliance", text: "Clear guidance and dependable processes for the obligations that come with growth." },
];

function Mark({ light = false }: { light?: boolean }) {
  return (
    <span className={`wordmark ${light ? "wordmark-light" : ""}`}>
      <Image src="/brand-logo.png" alt="" width={84} height={42} className="mark-image" priority />
      <span><strong>CUMMINS</strong><small>WORLDWIDE</small></span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" aria-label="Cummins Worldwide home"><Mark /></a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/wisdom-center">Wisdom Center</a>
          <a href="/careers">Careers</a>
        </nav>
        <a className="button button-small" href="/contact#contact-form">Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Personal &amp; enterprise professional services</p>
          <h1>Make the decisions that build a <em>lasting legacy.</em></h1>
          <p className="hero-intro">Financial clarity is where progress begins. We help people and businesses turn experience, insight, and discipline into durable growth.</p>
          <div className="hero-actions">
            <a className="button" href="/contact#contact-form">Start a conversation <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="/services">Explore our services <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Cummins Worldwide leadership">
          <Image src="https://agmmarketing.egnyte.com/opendocument.do?entryId=0baec881-aa29-4904-b756-8d2c0fce9892&forceDownload=false&thumbNail=true&w=1200&h=1200&type=proportional&preview=true&prefetch=true" alt="Tom Cummins in his office" fill sizes="(max-width: 900px) 100vw, 48vw" priority />
          <div className="hero-caption"><span>30+</span> years of real-world experience</div>
        </div>
        <div className="hero-index" aria-hidden="true"><span>01</span><i /><span>04</span></div>
      </section>

      <section className="statement" id="about">
        <p className="eyebrow">What we believe</p>
        <blockquote>“Understanding your finances is the first step to <em>Financial Wisdom™.</em>”</blockquote>
        <div className="statement-grid">
          <h2>Built on choices,<br />not chance.</h2>
          <div>
            <p>Our company was founded on a simple belief: anyone has the power to improve their financial condition and status in life.</p>
            <p>We do more than manage the numbers. We equip our clients with the perspective and practical tools to make stronger decisions across every part of their business.</p>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <div><p className="eyebrow">What we do</p><h2>Expertise that moves<br /><em>business forward.</em></h2></div>
          <p>Focused guidance across the two foundations every healthy organization depends on: sound finances and strong people.</p>
        </div>
        <div className="service-label">Personal &amp; Enterprise Finance <span>04 services</span></div>
        <div className="service-grid">
          {financeServices.map((service) => <article className="service-card" key={service.title}><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><a href="/contact#contact-form" aria-label={`Discuss ${service.title}`}>Learn more ↗</a></article>)}
        </div>
        <div className="service-label service-label-hr">Human Resources Solutions <span>04 services</span></div>
        <div className="service-grid">
          {hrServices.map((service) => <article className="service-card" key={service.title}><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><a href="/contact#contact-form" aria-label={`Discuss ${service.title}`}>Learn more ↗</a></article>)}
        </div>
      </section>

      <section className="wisdom" id="wisdom">
        <div className="wisdom-image"><Image src="/financial-wisdom.png" alt="A Cummins Worldwide advisor speaking with clients" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        <div className="wisdom-copy">
          <p className="eyebrow">Our foundation</p>
          <h2>Empowerment<br />through knowledge.</h2>
          <p>Cummins Worldwide™ is built on the idea that fully understanding your finances is the starting line for strategic growth and a lasting competitive edge.</p>
          <p>Founded by Tom Cummins, a trailblazer who built his success from the ground up, we offer more than enterprise guidance—we bring hard-won experience to every conversation.</p>
          <a className="text-link text-link-light" href="/contact#contact-form">Discover Financial Wisdom™ <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="founder">
        <div className="founder-copy">
          <p className="eyebrow">A word from our CEO</p>
          <h2>Success isn&apos;t luck.<br /><em>It&apos;s good decisions, consistently.</em></h2>
          <p>“In more than 30 years of on-the-ground experience, I&apos;ve learned that sustainable success comes from understanding the risks, acting with discipline, and surrounding yourself with people who have done the work.”</p>
          <div className="signature"><strong>Tom Cummins</strong><span>Founder &amp; CEO</span></div>
        </div>
        <div className="founder-images">
          <Image src="/foundation.png" alt="Secure archive boxes and keys" fill sizes="(max-width: 800px) 100vw, 45vw" />
          <div className="gold-rule" />
        </div>
      </section>

      <section className="career-strip" id="careers">
        <p className="eyebrow">Careers</p>
        <h2>Be part of something big—and be <em>big in it.</em></h2>
        <p>We&apos;re always interested in meeting motivated professionals who care about exceptional service and long-term client success.</p>
        <a className="button" href="mailto:careers@cummins.world">Explore careers <span aria-hidden="true">↗</span></a>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">Contact us</p>
          <h2>Let&apos;s build what<br />comes <em>next.</em></h2>
        </div>
        <div className="contact-grid">
          <a href="/contact#contact-form"><span>Email</span>Info@Cummins.World ↗</a>
          <a href="tel:+17272235335"><span>Telephone</span>+1 727-223-5335 ↗</a>
          <a href="https://www.google.com/maps/search/?api=1&query=625+Court+St+Suite+100+Clearwater+FL+33756" target="_blank" rel="noreferrer"><span>Visit</span>625 Court St, Suite 100<br />Clearwater, FL 33756 ↗</a>
          <p><span>Hours</span>Monday–Friday<br />7:00 am–3:00 pm EST</p>
        </div>
      </section>

      <footer>
        <Mark light />
        <div className="footer-links"><a href="/">Home</a><a href="/about">About</a><a href="/services">Services</a><a href="/wisdom-center">Wisdom Center</a><a href="/careers">Careers</a><a href="/contact">Contact</a></div>
        <div className="footer-bottom"><span>© 2026 Cummins Worldwide LLC. All rights reserved.</span><span>Financial Wisdom™ for lasting growth.</span></div>
      </footer>
    </main>
  );
}
