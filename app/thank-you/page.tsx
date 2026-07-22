import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata = { title: "Thank You | Cummins Worldwide", description: "Your inquiry has been received." };

export default function ThankYouPage(){return <main><SiteHeader /><section className="thank-you"><p className="eyebrow">Message received</p><h1>Thank you for<br /><em>reaching out.</em></h1><p>Your inquiry has been submitted. A member of our team will follow up as soon as possible.</p><div><Link className="button" href="/">Return home</Link><Link className="text-link" href="/services">Explore services ↗</Link></div></section><SiteFooter /></main>}
