import { PageHero, SiteFooter, SiteHeader } from "../site-chrome";

const divisions = [
  { name: "Executive Division", roles: [
    { title: "Executive Communicator for Mrs. Victoria Cummins", location: "Clearwater, FL", href: "https://careers.jobscore.com/careers/cumminsworldwide1/jobs/executive-communicator-for-mrs-victoria-cummins-bpkwfS27XnDjpIQfCH7QKi?ref=rss&sid=68" },
    { title: "VIP Lifestyle Manager", location: "Clearwater, FL", href: "https://careers.jobscore.com/careers/cumminsworldwide1/jobs/vip-lifestyle-manager-bvmCoXuIfpwR-rFvX0UT1R?ref=rss&sid=68" },
  ]},
  { name: "Financial Services Division", roles: [
    { title: "Accountant", location: "Clearwater, FL", href: "https://careers.jobscore.com/careers/cumminsworldwide1/jobs/accountant-arab6ByJLoC5LMrK6hvvz1?ref=rss&sid=68" },
    { title: "Senior Bookkeeper", location: "Clearwater, FL", href: "https://careers.jobscore.com/careers/cumminsworldwide1/jobs/senior-bookkeeper-dZl5rvXZviu78D0ciW0wOZ?ref=rss&sid=68" },
    { title: "Tax Administrative Associate", location: "Clearwater, FL", href: "https://careers.jobscore.com/careers/cumminsworldwide1/jobs/tax-administrative-associate-dig7rH65ndlBMGg-USluj0?ref=rss&sid=68" },
  ]},
  { name: "HR Services Division — Our Clients' Job Openings", roles: [
    { title: "Finance Manager", location: "Location listed on JobScore", href: "https://careers.jobscore.com/careers/cumminsworldwide1/jobs/finance-manager-dB5GLPU_fnn76PahVkWKhg?ref=rss&sid=68" },
  ]},
];

export const metadata = { title: "Careers | Cummins Worldwide", description: "Explore current career opportunities with Cummins Worldwide." };

export default function CareersPage(){return <main><SiteHeader /><PageHero eyebrow="Careers" title="Be part of something big—" accent="and be big in it." image="/tom-cummins.png" alt="Cummins Worldwide leadership" />
  <section className="page-section split-copy"><div><p className="eyebrow">Work with us</p><h2>Build a career with<br /><em>real impact.</em></h2></div><div><p>We&apos;re looking for motivated professionals who care about delivering exceptional service and helping clients achieve long-term success.</p><p>Explore our current openings below. Each position links to JobScore for the complete description and application.</p></div></section>
  <section className="jobs-section"><div className="jobs-heading"><p className="eyebrow">Now hiring</p><h2>Available <em>positions.</em></h2></div>{divisions.map((division)=><div className="job-division" key={division.name}><h3>{division.name}</h3><div>{division.roles.map((role)=><a className="job-row" href={role.href} target="_blank" rel="noreferrer" key={role.title}><span className="job-title">{role.title}</span><span className="job-location">{role.location}</span><span className="job-arrow" aria-hidden="true">↗</span></a>)}</div></div>)}<div className="career-note"><p>Don&apos;t see the right position?</p><a className="button" href="mailto:careers@cummins.world">Email your résumé <span aria-hidden="true">↗</span></a></div></section>
  <section className="values-row"><article><span>01</span><h3>Excellence</h3><p>Set a high standard and improve it continuously.</p></article><article><span>02</span><h3>Accountability</h3><p>Own the outcome and follow through on commitments.</p></article><article><span>03</span><h3>Expertise</h3><p>Bring experience, curiosity, and sound judgment.</p></article></section><SiteFooter /></main>}
