import { PageHero, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata = { title: "Contact | Cummins Worldwide", description: "Contact Cummins Worldwide in Clearwater, Florida." };

export default function ContactPage(){return <main><SiteHeader /><PageHero eyebrow="Contact Cummins Worldwide" title="Let's build what" accent="comes next." />
  <section className="contact-form-section" id="contact-form">
    <div className="form-intro"><p className="eyebrow">Send an inquiry</p><h2>Tell us what you&apos;re<br /><em>working toward.</em></h2><p>Share a few details and our team will follow up to discuss the clearest next step.</p></div>
    <form className="inquiry-form" action="https://formsubmit.co/kristopher@agmagency.com" method="POST">
      <input type="hidden" name="_subject" value="New Cummins Worldwide website inquiry" />
      <input type="hidden" name="_next" value="https://cummins-worldwide-navy.vercel.app/thank-you" />
      <input type="hidden" name="_template" value="table" />
      <input className="form-honey" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
      <div className="form-row"><label><span>Full name *</span><input type="text" name="name" autoComplete="name" required placeholder="Your name" /></label><label><span>Email address *</span><input type="email" name="email" autoComplete="email" required placeholder="you@company.com" /></label></div>
      <div className="form-row"><label><span>Phone</span><input type="tel" name="phone" autoComplete="tel" placeholder="Your phone number" /></label><label><span>Company</span><input type="text" name="company" autoComplete="organization" placeholder="Company name" /></label></div>
      <label><span>What can we help with? *</span><select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Budgeting Resources</option><option>Tax Solutions</option><option>Bookkeeping & Accounting</option><option>Risk Management</option><option>Policy & Training Programs</option><option>Talent Sourcing</option><option>Employee Retention Resources</option><option>Corporate Compliance</option><option>General Inquiry</option></select></label>
      <label><span>Message *</span><textarea name="message" required rows={6} placeholder="Tell us about your goals, challenges, or timeline." /></label>
      <label className="consent"><input type="checkbox" name="consent" value="Agreed" required /><span>I agree to be contacted about this inquiry.</span></label>
      <button className="button form-submit" type="submit">Send inquiry <span aria-hidden="true">↗</span></button>
      <p className="form-note">Your submission will be sent securely to our team. The first submission requires a one-time email activation by the site administrator.</p>
    </form>
  </section>
  <section className="contact-page"><div className="contact-page-intro"><p className="eyebrow">Contact details</p><h2>Prefer to connect<br />directly?</h2><p>Our team is available during regular business hours in Clearwater, Florida.</p></div><div className="contact-grid"><a href="#contact-form"><span>Email</span>Info@Cummins.World ↑</a><a href="tel:+17272235335"><span>Telephone</span>+1 727-223-5335 ↗</a><a href="https://www.google.com/maps/search/?api=1&query=625+Court+St+Suite+100+Clearwater+FL+33756" target="_blank" rel="noreferrer"><span>Visit</span>625 Court St, Suite 100<br/>Clearwater, FL 33756 ↗</a><p><span>Hours</span>Monday–Friday<br/>7:00 am–3:00 pm EST</p></div></section><SiteFooter /></main>}
